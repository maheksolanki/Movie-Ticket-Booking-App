note: we add this scrip to package.json => "server": "nodemon server.js"  so that we run our backend server using `npm run server`;

1. first we initialize the server using npm
npm init -y
2. next we install the necessory packages
  -  axios : To make HTTP requests (GET, POST, PUT, DELETE) from frontend (like React) or backend (Node.js).
  - cloudinary :To upload and manage images or videos on the Cloudinary platform (cloud storage for media).
  - cors :  Middleware in Express to allow Cross-Origin Requests, e.g., React app calling a Node.js API on a different port.
  - dotenv : To load environment variables from a .env file (e.g., DB password, API key) into process.env.
  - express : A fast web framework for Node.js to build backend APIs.
  - nodemon : for dect the chnages.

Note : Parsing means "converting" something from one format into a structure your code can understand.
3. When the frontend sends this JSON to the backend:
Edit
{
  "name": "Mahek",
  "age": 21
}
so that we use `app.use(express.json());`
It parses (converts) the text into a JavaScript object like this:
req.body = {
  name: "Mahek",
  age: 21
};
Now your backend can easily use req.body.name and req.body.age.

4. next we go to the mongodb site and in this go to the cluster -> driver -> copy uri.
5.  next we create the user schema in model folder.
for create schema we use Schema constructor.
then create function based on schema using model.
and export this function for usage.

6. In frontend we send the data to the clerk so that we also setup clerk in backend.

