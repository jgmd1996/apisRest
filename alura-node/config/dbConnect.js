import mongoose from "mongoose"

mongoose.connect("mongodb+srv://joao:gabriel123@restapi.yjr45py.mongodb.net/?alura-node");

let db = mongoose.connection;

export default db;