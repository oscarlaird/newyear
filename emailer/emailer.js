import { resolutions } from "./resolutions.js";
import { fetchEntries } from "./firebase.js";

const AWS = require('aws-sdk');

async function send_email(entries) {

 // Define email parameters
  const emailParams = {
   Source: 'olaird25@gmail.com',
   Destination: {
    ToAddresses: [
     'olaird25@gmail.com',
    ]
   },
   Message: {
    Body: {
     Text: {
      Charset: "UTF-8",
      Data: JSON.stringify(entries)
     }
    },
    Subject: {
     Charset: 'UTF-8',
     Data: 'API Results'
    }
   }
  };

  // Configure AWS region
  AWS.config.update({region: 'us-west-2'});

  // Create an AWS SES client
  const ses = new AWS.SES();

  // Send the email
  await ses.sendEmail(emailParams).promise();


}

exports.handler = async (event) => {
   fetchEntries().then((entries) => {
         console.log('entries: ' + entries);
         send_email(entries);
   }).catch((error) => {
         console.log(error);
   });
 };
