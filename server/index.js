const express = require("express"); 
const cors = require("cors"); 

const app = express(); 
app.use(cors()); // allows cross origin request 
app.use(express.json()); // parse JSON Bodies 

app.post('/process' , (req, res) => {
    const { word } = req.body; 
    console.log("Received word: " , word); 

    // reverse the word - logic 
    const reversed = word.split('').reverse().join('');
    return res.json({result : reversed}); 
})

PORT = 8080; 
app.listen(PORT, () => {
    console.log(`Server running live on http://localhost:${PORT}`); 
}); 


