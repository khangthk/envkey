enum ActionType {
  REGISTER = "envkey/api/REGISTER",

  INIT_SELF_HOSTED = "envkey/api/INIT_SELF_HOSTED",
  UPGRADE_SELF_HOSTED = "envkey/api/UPGRADE_SELF_HOSTED",
  UPGRADE_SELF_HOSTED_FORCE_CLEAR = "envkey/api/UPGRADE_SELF_HOSTED_FORCE_CLEAR",
  UPDATE_LICENSE = "envkey/api/UPDATE_LICENSE",

  CREATE_SESSION = "envkey/api/CREATE_SESSION",
  GET_SESSION = "envkey/api/GET_SESSION",

  DELETE_ORG = "envkey/api/DELETE_ORG",

  RENAME_ORG = "envkey/api/RENAME_ORG",
  RENAME_USER = "envkey/api/RENAME_USER",

  CREATE_EXTERNAL_AUTH_SESSION = "envkey/api/CREATE_EXTERNAL_AUTH_SESSION",
  CREATE_EXTERNAL_AUTH_INVITE_SESSION = "envkey/api/CREATE_EXTERNAL_AUTH_INVITE_SESSION",
  GET_EXTERNAL_AUTH_SESSION = "envkey/api/GET_EXTERNAL_AUTH_SESSION",
  GET_EXTERNAL_AUTH_PROVIDERS = "envkey/api/GET_EXTERNAL_AUTH_PROVIDERS",
  DELETE_EXTERNAL_AUTH_PROVIDER = "envkey/api/DELETE_EXTERNAL_AUTH_PROVIDER",
  GET_EXTERNAL_AUTH_USERS = "envkey/api/GET_EXTERNAL_AUTH_USERS",
  GET_EXTERNAL_AUTH_ORGS = "envkey/api/GET_EXTERNAL_AUTH_ORGS",
  OAUTH_CALLBACK = "envkey/api/OAUTH_CALLBACK",
  SAML_ACS_CALLBACK = "envkey/api/SAML_ACS_CALLBACK",

  CREATE_SCIM_PROVISIONING_PROVIDER = "envkey/api/CREATE_SCIM_PROVISIONING_PROVIDER",
  UPDATE_SCIM_PROVISIONING_PROVIDER = "envkey/api/UPDATE_SCIM_PROVISIONING_PROVIDER",
  DELETE_SCIM_PROVISIONING_PROVIDER = "envkey/api/DELETE_SCIM_PROVISIONING_PROVIDER",
  LIST_INVITABLE_SCIM_USERS = "envkey/api/LIST_INVITABLE_SCIM_USERS",

  CHECK_SCIM_PROVIDER = "envkey/api/CHECK_SCIM_PROVIDER",
  CREATE_SCIM_USER = "envkey/api/CREATE_SCIM_USER",
  GET_SCIM_USER = "envkey/api/GET_SCIM_USER",
  LIST_SCIM_USERS = "envkey/api/LIST_SCIM_USERS",
  UPDATE_SCIM_USER = "envkey/api/UPDATE_SCIM_USER",
  DELETE_SCIM_USER = "envkey/api/DELETE_SCIM_USER",

  CREATE_EMAIL_VERIFICATION = "envkey/api/CREATE_EMAIL_VERIFICATION",
  CHECK_EMAIL_TOKEN_VALID = "envkey/api/CHECK_EMAIL_TOKEN_VALID",

  CLEAR_TOKEN = "envkey/api/CLEAR_TOKEN",
  CLEAR_USER_TOKENS = "envkey/api/CLEAR_USER_TOKENS",
  CLEAR_ORG_TOKENS = "envkey/api/CLEAR_ORG_TOKENS",
  FORGET_DEVICE = "envkey/api/FORGET_DEVICE",

  CREATE_INVITE = "envkey/api/CREATE_INVITE",
  LOAD_INVITE = "envkey/api/LOAD_INVITE",
  REVOKE_INVITE = "envkey/api/REVOKE_INVITE",
  ACCEPT_INVITE = "envkey/api/ACCEPT_INVITE",

  CREATE_DEVICE_GRANT = "envkey/api/CREATE_DEVICE_GRANT",
  LOAD_DEVICE_GRANT = "envkey/api/LOAD_DEVICE_GRANT",
  REVOKE_DEVICE_GRANT = "envkey/api/REVOKE_DEVICE_GRANT",
  ACCEPT_DEVICE_GRANT = "envkey/api/ACCEPT_DEVICE_GRANT",

  REVOKE_DEVICE = "envkey/api/REVOKE_DEVICE",

  UPDATE_ORG_SETTINGS = "envkey/api/UPDATE_ORG_SETTINGS",

  CREATE_ORG_SAML_PROVIDER = "envkey/api/CREATE_ORG_SAML_PROVIDER",
  UPDATE_ORG_SAML_SETTINGS = "envkey/api/UPDATE_ORG_SAML_SETTINGS",

  UPDATE_USER_ROLE = "envkey/api/UPDATE_USER_ROLE",
  REMOVE_FROM_ORG = "envkey/api/REMOVE_FROM_ORG",

  CREATE_CLI_USER = "envkey/api/CREATE_CLI_USER",
  RENAME_CLI_USER = "envkey/api/RENAME_CLI_USER",
  DELETE_CLI_USER = "envkey/api/DELETE_CLI_USER",
  AUTHENTICATE_CLI_KEY = "envkey/api/AUTHENTICATE_CLI_KEY",

  CREATE_RECOVERY_KEY = "envkey/api/CREATE_RECOVERY_KEY",
  LOAD_RECOVERY_KEY = "envkey/api/LOAD_RECOVERY_KEY",
  REDEEM_RECOVERY_KEY = "envkey/api/REDEEM_RECOVERY_KEY",

  UPDATE_TRUSTED_ROOT_PUBKEY = "envkey/api/UPDATE_TRUSTED_ROOT_PUBKEY",

  ENVKEY_FETCH_UPDATE_TRUSTED_ROOT_PUBKEY = "envkey/api/ENVKEY_FETCH_UPDATE_TRUSTED_ROOT_PUBKEY",

  REVOKE_TRUSTED_PUBKEYS = "envkey/api/REVOKE_TRUSTED_PUBKEYS",

  CREATE_APP = "envkey/api/CREATE_APP",
  RENAME_APP = "envkey/api/RENAME_APP",
  UPDATE_APP_SETTINGS = "envkey/api/UPDATE_APP_SETTINGS",
  DELETE_APP = "envkey/api/DELETE_APP",

  GRANT_APP_ACCESS = "envkey/api/GRANT_APP_ACCESS",
  REMOVE_APP_ACCESS = "envkey/api/REMOVE_APP_ACCESS",

  CREATE_BLOCK = "envkey/api/CREATE_BLOCK",
  RENAME_BLOCK = "envkey/api/RENAME_BLOCK",
  UPDATE_BLOCK_SETTINGS = "envkey/api/UPDATE_BLOCK_SETTINGS",
  DELETE_BLOCK = "envkey/api/DELETE_BLOCK",

  CONNECT_BLOCK = "envkey/api/CONNECT_BLOCK",
  DISCONNECT_BLOCK = "envkey/api/DISCONNECT_BLOCK",
  REORDER_BLOCKS = "envkey/api/REORDER_BLOCKS",

  UPDATE_ENVS = "envkey/api/UPDATE_ENVS",
  FETCH_ENVS = "envkey/api/FETCH_ENVS",

  FETCH_ENVKEY = "envkey/api/FETCH_ENVKEY",
  CHECK_ENVKEY = "envkey/api/CHECK_ENVKEY",

  CREATE_VARIABLE_GROUP = "envkey/api/CREATE_VARIABLE_GROUP",
  DELETE_VARIABLE_GROUP = "envkey/api/DELETE_VARIABLE_GROUP",

  CREATE_SERVER = "envkey/api/CREATE_SERVER",
  DELETE_SERVER = "envkey/api/DELETE_SERVER",

  CREATE_LOCAL_KEY = "envkey/api/CREATE_LOCAL_KEY",
  DELETE_LOCAL_KEY = "envkey/api/DELETE_LOCAL_KEY",

  GENERATE_KEY = "envkey/api/GENERATE_KEY",
  REVOKE_KEY = "envkey/api/REVOKE_KEY",

  FETCH_LOGS = "envkey/api/FETCH_LOGS",
  FETCH_DELETED_GRAPH = "envkey/api/FETCH_DELETED_GRAPH",

  RBAC_CREATE_ORG_ROLE = "envkey/api/RBAC_CREATE_ORG_ROLE",
  RBAC_DELETE_ORG_ROLE = "envkey/api/RBAC_DELETE_ORG_ROLE",
  RBAC_UPDATE_ORG_ROLE = "envkey/api/RBAC_UPDATE_ORG_ROLE",

  CREATE_ENVIRONMENT = "envkey/api/CREATE_ENVIRONMENT",
  DELETE_ENVIRONMENT = "envkey/api/DELETE_ENVIRONMENT",
  UPDATE_ENVIRONMENT_SETTINGS = "envkey/api/UPDATE_ENVIRONMENT_SETTINGS",

  RBAC_CREATE_ENVIRONMENT_ROLE = "envkey/api/RBAC_CREATE_ENVIRONMENT_ROLE",
  RBAC_DELETE_ENVIRONMENT_ROLE = "envkey/api/RBAC_DELETE_ENVIRONMENT_ROLE",
  RBAC_UPDATE_ENVIRONMENT_ROLE = "envkey/api/RBAC_UPDATE_ENVIRONMENT_ROLE",
  RBAC_UPDATE_ENVIRONMENT_ROLE_SETTINGS = "envkey/api/RBAC_UPDATE_ENVIRONMENT_ROLE_SETTINGS",
  RBAC_REORDER_ENVIRONMENT_ROLES = "envkey/api/RBAC_REORDER_ENVIRONMENT_ROLES",

  RBAC_CREATE_APP_ROLE = "envkey/api/RBAC_CREATE_APP_ROLE",
  RBAC_DELETE_APP_ROLE = "envkey/api/RBAC_DELETE_APP_ROLE",
  RBAC_UPDATE_APP_ROLE = "envkey/api/RBAC_UPDATE_APP_ROLE",

  RBAC_CREATE_INCLUDED_APP_ROLE = "envkey/api/RBAC_CREATE_INCLUDED_APP_ROLE",
  DELETE_INCLUDED_APP_ROLE = "envkey/api/DELETE_INCLUDED_APP_ROLE",

  CREATE_GROUP = "envkey/api/CREATE_GROUP",
  RENAME_GROUP = "envkey/api/RENAME_GROUP",
  DELETE_GROUP = "envkey/api/DELETE_GROUP",

  CREATE_GROUP_MEMBERSHIP = "envkey/api/CREATE_GROUP_MEMBERSHIP",
  DELETE_GROUP_MEMBERSHIP = "envkey/api/DELETE_GROUP_MEMBERSHIP",
  REORDER_GROUP_MEMBERSHIPS = "envkey/api/REORDER_GROUP_MEMBERSHIPS",

  CREATE_APP_USER_GROUP = "envkey/api/CREATE_APP_USER_GROUP",
  DELETE_APP_USER_GROUP = "envkey/api/DELETE_APP_USER_GROUP",

  CREATE_APP_GROUP_USER_GROUP = "envkey/api/CREATE_APP_GROUP_USER_GROUP",
  DELETE_APP_GROUP_USER_GROUP = "envkey/api/DELETE_APP_GROUP_USER_GROUP",

  CREATE_APP_GROUP_USER = "envkey/api/CREATE_APP_GROUP_USER",
  DELETE_APP_GROUP_USER = "envkey/api/DELETE_APP_GROUP_USER",

  CREATE_APP_BLOCK_GROUP = "envkey/api/CREATE_APP_BLOCK_GROUP",
  DELETE_APP_BLOCK_GROUP = "envkey/api/DELETE_APP_BLOCK_GROUP",
  REORDER_APP_BLOCK_GROUPS = "envkey/api/REORDER_APP_BLOCK_GROUPS",

  CREATE_APP_GROUP_BLOCK = "envkey/api/CREATE_APP_GROUP_BLOCK",
  DELETE_APP_GROUP_BLOCK = "envkey/api/DELETE_APP_GROUP_BLOCK",
  REORDER_APP_GROUP_BLOCKS = "envkey/api/REORDER_APP_GROUP_BLOCKS",

  CREATE_APP_GROUP_BLOCK_GROUP = "envkey/api/CREATE_APP_GROUP_BLOCK_GROUP",
  DELETE_APP_GROUP_BLOCK_GROUP = "envkey/api/DELETE_APP_GROUP_BLOCK_GROUP",
  REORDER_APP_GROUP_BLOCK_GROUPS = "envkey/api/REORDER_APP_GROUP_BLOCK_GROUPS",

  REENCRYPT_ENVS = "envkey/api/REENCRYPT_ENVS",

  FETCH_ORG_STATS = "envkey/api/FETCH_ORG_STATS",

  SELF_HOSTED_RESYNC_FAILOVER = "envkey/api/SELF_HOSTED_RESYNC_FAILOVER",

  SET_ORG_ALLOWED_IPS = "envkey/api/SET_ORG_ALLOWED_IPS",
  SET_APP_ALLOWED_IPS = "envkey/api/SET_APP_ALLOWED_IPS",

  UNSUBSCRIBE_CLOUD_LIFECYCLE_EMAILS = "envkey/api/UNSUBSCRIBE_CLOUD_LIFECYCLE_EMAILS",

  STARTED_ORG_IMPORT = "envkey/api/STARTED_ORG_IMPORT",
  FINISHED_ORG_IMPORT = "envkey/api/FINISHED_ORG_IMPORT",

  BULK_GRAPH_ACTION = "envkey/api/BULK_GRAPH_ACTION",
}

export default ActionType;
