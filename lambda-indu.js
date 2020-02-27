let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.publish({
            Message: "hi, test ",
            Subject: "test sns",
            TopicArn: "arn:aws:sns:us-east-1:318300609668:TestSNS",
            MessageStructure: "String",
            MessageAttributes: {}
        }).promise();
        console.log("data");
                console.log(data);
    } catch (err) {
        // error handling goes here
                console.log("err");
                console.log(err);
    };


    return { "message": "Successfully executed: 123" };
};