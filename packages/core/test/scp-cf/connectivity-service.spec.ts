import { createLogger } from '@sap-cloud-sdk/util';
import { Destination } from '../../src';
import { addProxyConfiguration } from '../../src/scp-cf/connectivity-service';
import {
  mockConnectivityServiceBinding,
  mockedConnectivityServiceProxyConfig,
  mockServiceBindings
} from '../test-util/environment-mocks';
import {
  providerServiceToken,
  providerUserJwt
} from '../test-util/mocked-access-tokens';
import { mockServiceToken } from '../test-util/token-accessor-mocks';
import { mockClientCredentialsGrantCall } from '../test-util/xsuaa-service-mocks';

const testLogger = createLogger('test');

describe('connectivity-service', () => {
  afterEach(() => {
    delete process.env.VCAP_SERVICES;
    jest.restoreAllMocks();
  });

  it('adds a proxy configuration containing at least the host, the port, and the "Proxy-Authorization" header to a destination', done => {
    mockServiceBindings();
    mockServiceToken();

    const input: Destination = {
      url: 'https://example.com',
      proxyType: 'OnPremise'
    };

    const expected: Destination = {
      url: 'https://example.com',
      proxyType: 'OnPremise',
      proxyConfiguration: {
        ...mockedConnectivityServiceProxyConfig,
        headers: {
          'Proxy-Authorization': `Bearer ${providerServiceToken}`
        }
      }
    };

    addProxyConfiguration(input)
      .then(actual => {
        expect(actual).toEqual(expected);
        done();
      })
      .catch(error => {
        testLogger.error(error);
      });
  });

  it('also contains the "SAP-Connectivity-Authentication" header if a JWT is present', done => {
    mockServiceBindings();
    mockServiceToken();

    const input: Destination = {
      url: 'https://example.com',
      proxyType: 'OnPremise'
    };

    const expected: Destination = {
      url: 'https://example.com',
      proxyType: 'OnPremise',
      proxyConfiguration: {
        ...mockedConnectivityServiceProxyConfig,
        headers: {
          'Proxy-Authorization': `Bearer ${providerServiceToken}`,
          'SAP-Connectivity-Authentication': `Bearer ${providerUserJwt}`
        }
      }
    };

    addProxyConfiguration(input, providerUserJwt)
      .then(actual => {
        expect(actual).toEqual(expected);
        done();
      })
      .catch(error => {
        testLogger.error(error);
      });
  });

  it('throws an error if there is no connectivity service bound', done => {
    addProxyConfiguration({ url: '' }).catch(error => {
      expect(error.message).toContain('connectivity service');
      done();
    });
  });

  it('throws an error if there is no XSUAA service with plan "application" bound', done => {
    process.env.VCAP_SERVICES = JSON.stringify({
      connectivity: [
        {
          plan: 'lite',
          label: 'connectivity',
          name: 'my-connectivity',
          credentials: mockConnectivityServiceBinding.credentials
        }
      ]
    });

    addProxyConfiguration({ url: '' }).catch(error => {
      expect(error.message).toBe(
        'Failed to add proxy authorization header - client credentials grant failed!'
      );
      done();
    });
  });

  it('throws an error if the client credentials grant fails', done => {
    mockServiceBindings();
    mockClientCredentialsGrantCall(
      'https://provider.example.com',
      { error: 'nope' },
      500,
      'clientid',
      'clientsecret'
    );

    addProxyConfiguration({ url: '' }).catch(error => {
      expect(error.message).toContain(
        'Failed to add proxy authorization header'
      );
      done();
    });
  });
});
