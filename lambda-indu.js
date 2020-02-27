let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.publish({
            Message: "hi",
            TopicArn: "arn:aws:sns:us-east-1:318300609668:new-test",
            MessageStructure: "String",
            MessageAttributes: {}
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed: test" };
};