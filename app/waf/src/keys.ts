import {BindingKey} from '@loopback/core';
import {LoggerFactory} from 'typescript-logging';
import {
  AuthWithOSIdentity,
  AuthedToken,
  ComputeManager,
  NetworkDriver,
} from './services';

export interface LogFn {
  (logmsg: string): Promise<void>;
}
export namespace WafBindingKeys {
  export const KeyLoggerGenerator = BindingKey.create<LoggerFactory>(
    'logging.factory',
  );
  export const KeyAuthWithOSIdentity = BindingKey.create<AuthWithOSIdentity>(
    'services.openstack.AuthWithOSIdentity',
  );

  export const KeyInternalAdminTokenSingleton = BindingKey.create<AuthedToken>(
    'services.openstack.InternalAdminTokenSingleton',
  );

  export const KeySolvedAdminToken = BindingKey.create<AuthedToken>(
    'services.openstack.SolvedAdminToken',
  );

  export const KeyComputeManager = BindingKey.create<ComputeManager>(
    'services.openstack.ComputeManager',
  );

  export const KeyNetworkDriver = BindingKey.create<NetworkDriver>(
    'services.openstack.NetworkDriver',
  );

  export const KeyDbConfig = BindingKey.create<object>('datasources.config.db');

  export namespace Request {
    export const KeyTenantId = BindingKey.create<string>(
      'context.request.tenantid',
    );
    export const KeyUserToken = BindingKey.create<string>(
      'context.request.usertoken',
    );
  }
}
