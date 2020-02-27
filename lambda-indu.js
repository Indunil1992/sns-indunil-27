let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.subscribe({
            TopicArn: "arn:aws:sns:us-east-1:318300609668:TestSNS",
            Protocol: "sms",
            Endpoint: "94713245242"
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed: test" };
};