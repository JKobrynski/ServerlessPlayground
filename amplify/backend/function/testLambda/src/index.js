/* Amplify Params - DO NOT EDIT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIENDPOINTOUTPUT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIIDOUTPUT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async message => {
  console.log('MESSAGE', message);

  return 'Hello world';
};
