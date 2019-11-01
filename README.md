# Data-API-in-Dapi


Accessing identity data, end-user accounts, account balance, and transactional data from the server.


## Steps:


1- Open index.html in browser 


2- Login and get accessCode from console. The credentials are found in Dapi Documentation https://docs.dapi.co/.


3- Put the accessCode in app.js file and update both appSecret and appKey which are obtained from Dapi Dashboard https://dashboard.dapi.co/home. Furthermore, update Adresses URL of the Webhook to include the public IP of your device.



4- To run the application directly through Node.JS, simply use this command:
```node app.js```


Note: The server will listen on port 5000 which is the same port Webhook is using.
