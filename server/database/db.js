import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-1z91h3c-shard-00-00.klrvgjt.mongodb.net:27017,ac-1z91h3c-shard-00-01.klrvgjt.mongodb.net:27017,ac-1z91h3c-shard-00-02.klrvgjt.mongodb.net:27017/?ssl=true&replicaSet=atlas-n7ueue-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;


