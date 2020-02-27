let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.publish({
            Message: "hi test 2/27/2020",
            PhoneNumber: "+94713245242",
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType': {
                    DataType: "String",
                    StringValue: "Transactional"
                }
            }
        }).promise();


        console.log("data");
        console.log(data);
    } catch (err) {
        // error handling goes here
        console.log("err");
        console.log(err);

    };

    return { "message": "Successfully executed: sns" };
};