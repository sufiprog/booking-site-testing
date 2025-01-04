import mongoose from "mongoose";

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("DB Connected");
    });
    connection.on("error", (err) => {
      console.log("DB Error, Make sure db is up and running", err);
    });
  } catch (error) {
    console.log(
      "MongoDB connection error, please check your db connection",
      error
    );
  }
}
