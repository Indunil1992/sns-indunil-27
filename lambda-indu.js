let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.unsubscribe({
            SubscriptionArn: "arn:aws:sns:us-east-1:318300609668:TestSNS:5aac42c6-3953-48ac-977e-d7d3ed5504be	"
        }).promise();

        console.log("data");
                console.log(data);
    } catch (err) {
        // error handling goes here
    };
            console.log("err");
                console.log(err);


    return { "message": "Successfully executed: test" };
};