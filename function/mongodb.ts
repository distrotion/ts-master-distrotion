import { MongoClient } from 'mongodb';

const url = 'mongodb://172.23.10.73:27017';

export const insertMany = async (db_input: string, collection_input: string, input: any[]) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(db_input);
  const collection = db.collection(collection_input);
  let res = await collection.insertMany(input);
  await client.close();
  return res;
};

export const find = async (db_input: string, collection_input: string, input: any) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(db_input);
  const collection = db.collection(collection_input);
  let res = await collection.find(input).limit(1000).sort({ "_id": -1 }).toArray();
  await client.close();
  return res;
};

export const findsome = async (db_input: string, collection_input: string, input: any) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(db_input);
  const collection = db.collection(collection_input);
  let res = await collection.find(input).limit(500).sort({ "_id": -1 }).project({"PO":1,"CP":1,"ALL_DONE":1}).toArray();
  await client.close();
  return res;
};

export const update = async (db_input: string, collection_input: string, input1: any, input2: any) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(db_input);
  const collection = db.collection(collection_input);
  let res = await collection.updateOne(input1, input2);
  await client.close();
  return res;
};
