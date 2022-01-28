# Tatjana Marković Node-Emaily 
Full-stack Node, Express, MongoDB, React, Stripe app from Stephen Grider

## Table of contents

  - [Instruction](#instruction)
  - [Overview](#overview)
  - [Built with](#built-with)
  - [Screenshots](#screenshot)
  - [Author](#author)

## Instruction:
1. run server in development mode with at server 
    npm run dev
2. production build with
    on heroku build
        "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
    build client with
        /client: npm run build
3. find it on
    http://localhost:3000
4. ngrok start server (only on development mode)
    open -> C:\Users\L\Desktop\ngrok-stable-windows-amd64
    on terminal -> ngrok http 5000

## Overview
    Emaily  is an api server that listens on port 3000 on development mode

    Front Endpoints - App.js:
    1. '/' - Landing page,
    2. '/surveys' - Dashboard,
    3. '/surveys/new' - SurveyNew, 
    
    Server Endpoints - routes:
    1. GET - '/auth/google/callback' - user login with google oauth2 - redirect to '/surveys' - Dashboard,  
    2. GET - '/auth/google/' - new user registration with google oauth2,
    3. GET - '/auth/logout' - user logout - redirect to '/' - Landing,
    4. POST - '/api/stripe' - billing with Stripe service,    
    5. POST - 'api/surveys' - new Survey, 
    6. GET - 'api/surveys/thanks' - Thank you page
    7. POST - 'api/surveys/webhooks' - Place to send sendgrid click results

    It was tested with the help of a Postman.

## Build with 
    1. Node.js
    2. Express, body-parser
    3. Cookie-session
    4. Passport
    5. Google oauth2
    6. Stripe - billing API
    7. Mongoose
    8. MongoDB
    9. React.js, react-router-dom, 
    10. Redux, Redux-Form
    11. Axios
    12. SendGrid - Email webserver (https://signup.sendgrid.com/ )
    13. Materialize CSS, icons
    14. Ngrok - localhost tunnel server
    15. lodash, lodash path-parser
    

### Screenshot

![Heroku ](./client/public/screenshots/heroku.png)
![User logout](./client/public/screenshots/logout.png)
![User logged ](./client/public/screenshots/logged-user.png)
![User billing ](./client/public/screenshots/stripe-billing.png)
![MongoDB Atlas "users" table](./client/public/screenshots/atlas-users.png)
![MongoDB Atlas "surveys" table](./client/public/screenshots/atlas-survey.png)
![Browser /users/ sending surveys](./client/public/screenshots/testing-console.png)
![Browser /users/ response surveys](./client/public/screenshots/test-response.png)
![Mail Inbox](./client/public/screenshots/email.png)
![SendGrid Activity Feed](./client/public/screenshots/sendgrid.png)
![Form validation Errors](./client/public/screenshots/form-validation-errors.png)
![Form](./client/public/screenshots/form.png)
![Form Review](./client/public/screenshots/form-review.png)
![Dashboard](./client/public/screenshots/dashboard.png)
![Email Inbox](./client/public/screenshots/email-inbox.png)
![Ngrok Start](./client/public/screenshots/ngrok-start.png)
![SendGrid add Ngrok url](./client/public/screenshots/sendgrid-add-ngrok-url.png)
![SendGrid Ngrok test connection](./client/public/screenshots/sendgrid-test-connection.png)
![Ngrok terminal](./client/public/screenshots/ngrok-terminal.png)
![SendGrid Ngrok response](./client/public/screenshots/sendgrid-ngrok-response.png)
![Thank you](./client/public/screenshots/thank-you.png)
![Webhooks](./client/public/screenshots/webhooks-body.png)
![Updated Survey in mongodb](./client/public/screenshots/survays-updated.png)
![Survey List](./client/public/screenshots/survey-list.png)
## Author
- Website - [Tatjana Markovic](https://my-react-portfolio-tatjana.vercel.app/)
- LinkedIn - [Tatjana Marković](https://www.linkedin.com/in/tatjana-markovi%C4%87-919501189/)
- GitHub - [tatjama](https://github.com/tatjama)

