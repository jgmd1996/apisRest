import mongoose from "mongoose"

//mongoose.connect('mongodb//localhost:27017/test'); erro 
//mongoose.connect("mongodb+srv://alura:123@alura.dkjed.mongodb.net/alura-node"); erro
mongoose.connect("mongodb+srv://alura:123@alura.fway2xr.mongodb.net/?retryWrites=true&w=majority");


let db = mongoose.connection;

export default db;