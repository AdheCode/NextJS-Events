
import {MongoClient} from 'mongodb';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export async function connectDatabase(){

    const url = `mongodb+srv://${serverRuntimeConfig.mongodb_username}:${serverRuntimeConfig.mongodb_password}@${serverRuntimeConfig.mongodb_clustername}.ullmy.mongodb.net/${serverRuntimeConfig.mongodb_database}?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(url);

    return client;
}

export async function insertDocument(client, collection, document){
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);

    return result;
}

export async function getAllDocument(client, collection, sort){
    const db = client.db();
    const result = await db.collection(collection).find().sort(sort).toArray();
    
    return result;
}