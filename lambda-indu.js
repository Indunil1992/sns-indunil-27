let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {

    try {
        let data = await sns.deleteEndpoint({
            EndpointArn: "arn:aws:sns:us-east-1:318300609668:endpoint/MPNS/snsAppTestCafe/089788cf-baa2-4b7b-a864-4490da4a2ae4"
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