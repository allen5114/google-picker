# Google Picker API
1. Create API key and OAuth 2.0 client ID at https://console.cloud.google.com/
2. Add the url "http://localhost" to **Autorized Javasript origins** and **Authorized redirect URLs**
3. Replace **CLIENT_ID** and **DEVELOPER_KEY** in demo/app.js

# Dependencies Setup
Install nodejs (https://nodejs.org/en/download/)
````
// navigate to the cloned directory
cd google-picker

// install npm packages
npm install
````

# Changes

Based off https://github.com/sdoomz/react-google-picker
1. Only keeping file name / file content based search
2. Added more mime types for searching
3. run on port 80

# Run
````
// navigate to the cloned directory
cd google-picker

npm start
````
