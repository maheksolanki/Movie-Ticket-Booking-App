note: we add this scrip to package.json => "server": "nodemon server.js"  so that we run our backend server using `npm run server`;

1. first we initialize the server using npm
npm init -y
2. next we install the necessory packages
  -  axios : To make HTTP requests (GET, POST, PUT, DELETE) from frontend (like React) or backend (Node.js).
  - cloudinary :To upload and manage images or videos on the Cloudinary platform (cloud storage for media).
  - cors :  Middleware in Express to allow Cross-Origin Requests, e.g., React app calling a Node.js API on a different port.
  - dotenv : To load environment variables from a .env file (e.g., DB password, API key) into process.env.
  - express : A fast web framework for Node.js to build backend APIs.
  - nodemon : for detect the chnages.

Note : Parsing means "converting" something from one format into a structure your code can understand.
3. When the frontend sends this JSON to the backend:
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

our login data is send to the clerk so we need to retrive this data and save to db.
for that we use inngest that runs in backgroud and handle the jobs.

we have write the function to save data inside the inngest folder index.js file.
(give some info about inngest also plz)

7. next we create the model or the schema  for movie.
it contains the property like 
  id,title,overview
  poster_path
  backdrop_path
  release_date
  original_language
  tagline:
  genres
  casts
  vote_average
  runtime
8. next create the model for shows. that contains bellow property
movie , showDateTime ,showPrice ,occupiedSeats

9. let's next we creat the api for geting currenct palying movie from tmdb(the movie data base) this is third party that give us movies. so we login in TMDB and get api to access movies from that site.

our first api is 
http://localhost:3000/api/show/now-playing
this run successfully mean get current playing movie.

let next we add this getting movie on front end add movie in admin panel.

10. for the adding movie we need other controller or routes that add this getting movies.

for add movie api is :
http://localhost:3000/api/show/add

11. next we crete the api to get all movie from db 
http://localhost:3000/api/show/all

12. and then to get particular movie with parameter id then 
http://localhost:3000/api/show/749170

13. Let next we crate the Booking Model and controller for api.

14. Here in this application we use Stripe for payment gateway
- payment gatewate is initialize in bookingSeats controller.
