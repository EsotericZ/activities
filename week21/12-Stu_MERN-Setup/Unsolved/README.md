# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:
Sets shortcuts to run pieces of code to install dependencies and start both the server and the client

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:
Sets the URL to run the application locally

```json
"proxy": "http://localhost:3001",
```

## Server-side Functionality
* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:
If in production use the directory build for the client not the server - this is created when you run the install

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:
For any get request use the client directory that is created once you run the install 

```js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```
