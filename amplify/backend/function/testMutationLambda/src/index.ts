/* Amplify Params - DO NOT EDIT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIENDPOINTOUTPUT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIIDOUTPUT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const SDK = require('aws-sdk');
const docClient = new SDK.DynamoDB.DocumentClient();

async function saveTodo(geohashes: string[]) {
  console.log('GEOHASHES', geohashes);
  console.log('DOC CLIENT', docClient);
  console.log('ENV', process.env);

  return true;
}

exports.handler = async event => {
  const {geohashes} = event.arguments;
  console.log('GEOHASHES', geohashes);

  return saveTodo(geohashes);
};
