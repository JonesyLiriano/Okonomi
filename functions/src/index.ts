import * as ContactEmail from './utils/contactEmail.js';



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const contactEmail = ContactEmail.contactEmailSend;
