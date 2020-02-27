let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.publish({
            Message: "hi",
            PhoneNumber: "+94713245242",
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType': {
                    DataType: "String",
                    StringValue: "Promotional"
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed: sns" };
};