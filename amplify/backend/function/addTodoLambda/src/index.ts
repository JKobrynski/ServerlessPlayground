/* Amplify Params - DO NOT EDIT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIENDPOINTOUTPUT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIIDOUTPUT
	API_SERVERLESSPLAYGROUND_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const SDK = require('aws-sdk');

const docClient = new SDK.DynamoDB.DocumentClient();
const TodosTable = `${process.env.API_SERVERLESSPLAYGROUND_TODOTABLE_NAME}`;

async function saveTodo(geohashes: string[]) {
  const params = {
    TableName: TodosTable,
    Item: {
      id: Math.random().toString(),
      name: `Todo ${geohashes.join(', ')}`,
      description: 'Todo description',
    },
  };

  try {
    await docClient.put(params).promise();
  } catch (err) {
    return err;
  }
}

exports.handler = async event => {
  const {geohashes} = event.arguments;

  try {
    await saveTodo(geohashes);
    return {body: 'Todo created successfully'};
  } catch (error) {
    return {error};
  }
};
