import mongoose from 'mongoose'
import Word from './models/word.model.js'
import { connectUsingMongoose } from './config/mongoose.js'
import { words } from './words.js';

async function seed() {
    await connectUsingMongoose(); 
    await Word.deleteMany({});
    await Word.insertMany(words.map(text => ({text}))); 
    console.log("Seeded words!"); 
    mongoose.disconnect(); 
}

seed();