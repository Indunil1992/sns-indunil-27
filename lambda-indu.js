let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {

    try {
        let data = await sns.confirmSubscription({
            TopicArn: "arn:aws:sns:us-east-1:318300609668:TestSNS",
            Token: "lWNGedNN+3kfDTpouKYOOdwJOyBTuTwFPVIJdvrqEZyPxHcShtJ8q1D6CeeeiEb6PVV7GiNFnxjzrAYzQ77OYH/aQiMkLGiUqw0xDKMsfutFA4nR3wLQ+PuIHAoDY0XmLj6AScHJA4MloyWFuCGXzxbbMTEHuPC8JqKRsZVsWutxa5tFw3onSZqdrRteb1hCctqAO9Ea8g1/iYkmib8KViHVjZI64VJM9xl+NprNR3R212b87+Gxi6JhTsUdHPdg8yT6o/fdyx0uo+O9kWTPwOWSoSJNpCiph7WDuGHj9TYovcU+KTKWLTA0Gb+7CkrC+063ty+woHImhIHSH1oYyg==",
            AuthenticateOnUnsubscribe: "false"
        }).promise();

        console.log("data");
                console.log(data);
    } catch (err) {
        // error handling goes here
                console.log("err");
                console.log(err);

    };

    return { "message": "Successfully executed: test" };
};