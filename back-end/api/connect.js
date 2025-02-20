import { MongoClient } from "mongodb";
const URI =
  "mongodb+srv://dedebarbosa_:HnleFa2XVG3UMxtd@cluster0.kwza0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
