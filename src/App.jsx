import { useState } from 'react';
import './App.css'

function App() {
  const [word, setWord] = useState('');
  const [response , setresponse] = useState('');

  async function handleSubmit () {
      const res = await fetch('http://localhost:8080/process' , {
        method : "POST",
        headers: {"content-type" : "application/json"},
        body : JSON.stringify({word}),
      });

      const data = await res.json();
      setresponse(data.result);
  }

  return (
    <>
    <h1 className='heading' style={{fontFamily:"American Typewriter"}}>Welcome to Word-Help</h1>
    <div className= 'container' >
      <input className="input-field" placeholder='Enter a word...' value = {word} onChange={(e) =>{setWord(e.target.value); }}></input>
      <button type="button" class="btn btn-primary btn-lg custom" onClick={handleSubmit}>Submit</button>
    </div>
    <div className='response'>
        {response && <p>{response}</p>}
    </div>
    </>
  ); 
}

export default App
