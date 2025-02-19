import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://myadaramsaikiran:FXYeNeu8R1Eodwhy@cluster0.i0j23.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { ssl: true, tlsInsecure: true }
    );
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
