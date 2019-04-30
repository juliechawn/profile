
 const API_KEY =`${process.env.REACT_APP_AWS_KEY}`
 const API_WEB =`${process.env.REACT_APP_AWS_WEB}`

const awsmobile =  {
    // https://got-20181210143420.s3.amazonaws.com
    "aws_appsync_graphqlEndpoint": API_WEB ,
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": API_KEY,

};



export default awsmobile;

// Load the SDK and UUID
