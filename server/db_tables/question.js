var params = {
    TableName : "Question",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH"},
],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

module.exports = params;
