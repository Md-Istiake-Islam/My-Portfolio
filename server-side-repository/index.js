import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 5000;

// Setup middleware,
app.use(cors());
app.use(express.json());

// Setup root Api,
app.get("/", (req, res) => {
   res.send("Hello from the server!");
});

// Connect to Mongodb Client Server

// MongoDB connection uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ognt0bn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions Object to set the stable API version
const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});

// Connect the client to the server
const run = async () => {
   try {
      //DataBase Collections
      //Users collection
      const profileInfoCollection = client
         .db("PortfolioAdminsData")
         .collection("ProfileInfo");

      //Projects collection
      const projectsCollection = client
         .db("PortfolioAdminsData")
         .collection("Projects");

      //Api Configuration
      //post profile data
      app.post("/profileInfo", async (req, res) => {
         const info = req.body;
         const result = await profileInfoCollection.insertOne(info);
         res.send(result);
      });
      //get profile data
      app.get("/profileInfo", async (req, res) => {
         const result = await profileInfoCollection.find().toArray();
         res.send(result);
      });

      //post projects data
      app.post("/projects", async (req, res) => {
         const info = req.body;
         const result = await projectsCollection.insertOne(info);
         res.send(result);
      });

      //get projects data
      app.get("/projects", async (req, res) => {
         const result = await projectsCollection.find().toArray();
         res.send(result);
      });

      // Check the express server is connected successfully to the MongoDB using MongoClient with Ping command
      await client.db("admin").command({ ping: 1 });
      console.log(
         "Pinged your deployment. You are successfully connected to MongoDB!"
      );
   } finally {
   }
};
run().catch(console.dir);

// Listen to the server
app.listen(port, () => {
   console.log(`server is running on the ${port}`);
});
