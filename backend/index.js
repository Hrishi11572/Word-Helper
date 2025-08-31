import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { connectUsingMongoose } from './config/mongoose.js';
import autoCorrectRouter from './routes/autoCorrect.routes.js';

const app = express(); 
app.use(cors()); // allows cross origin request 
app.use(express.json()); // parse JSON Bodies 
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/autocorrect', autoCorrectRouter);

// app.post('/process' , (req, res) => {
//     const { word } = req.body; 
//     console.log("Received word: " , word); 

//     // reverse the word - logic 
//     const reversed = word.split('').reverse().join('');
//     return res.json({result : reversed}); 
// })

const PORT = 8080; 
app.listen(PORT, () => {
    console.log(`Server running live on http://localhost:${PORT}`); 
    connectUsingMongoose();
    console.log('Connected to MongoDB using Mongoose');
}); 


