import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [word, setWord] = useState('');
  const [response , setresponse] = useState('');

  async function handleSubmit () {
    const res = await axios.post('http://localhost:8080/api/autocorrect/process', { word });
    const data = res.data.data;
    setresponse(data);
  }

  return (
    <>
    <h1 className='heading' style={{fontFamily:"American Typewriter"}}>Welcome to Word-Help</h1>
    <div className= 'container' >
      <input className="input-field" placeholder='Enter a word...' value = {word} onChange={(e) =>{setWord(e.target.value); }}></input>
      <button type="button" className="btn btn-primary btn-lg custom" onClick={handleSubmit}>Submit</button>
    </div>
    <div className='response'>
        {response && <p>{response}</p>}
    </div>
    </>
  ); 
}

export default App
