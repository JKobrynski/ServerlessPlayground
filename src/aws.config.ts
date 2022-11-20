import config from './aws-exports';
import {AUTH_TYPE} from 'aws-appsync-auth-link/lib';

type AWSMOBILE = {
  aws_project_region: string;
  aws_cognito_identity_pool_id: string;
  aws_cognito_region: string;
  aws_user_pools_id: string;
  aws_user_pools_web_client_id: string;
  oauth: {};
  aws_appsync_graphqlEndpoint: string;
  aws_appsync_region: string;
  aws_appsync_authenticationType: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS;
};

export const awsmobile: AWSMOBILE = {
  aws_project_region: config.aws_project_region,
  aws_cognito_identity_pool_id: config.aws_cognito_identity_pool_id,
  aws_cognito_region: config.aws_cognito_region,
  aws_user_pools_id: config.aws_user_pools_id,
  aws_user_pools_web_client_id: config.aws_user_pools_web_client_id,
  oauth: config.oauth,
  aws_appsync_graphqlEndpoint: config.aws_appsync_graphqlEndpoint,
  aws_appsync_region: config.aws_appsync_region,
  aws_appsync_authenticationType:
    config.aws_appsync_authenticationType as AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
};
