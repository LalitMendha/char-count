import './App.css';
import { useState } from 'react';

function CharCounter(){

  const [text, setText] = useState("");  //Text state that will be updated.
  const [count, setCount] = useState(0)  //Counter state that will be updated.

  function handleInputChange(oEvent){
    let tweet = oEvent.target.value;
    setText(tweet);
    if(tweet){    //if there is text count number of characters.
      let count = tweet.length;
      setCount(count);
    }else{
      setCount(0);
    }
  }

  function handleOnClick(){
    let text = document.querySelector('#id-text');
    text.value = "";
    setCount(0);    //make count as initial
    setText("");    //make text as initial
   }

  return(
    <div className="container">
      <header>
          <button className="cancel">X</button>
          <button className="tweet-submit">Tweet</button>
      </header>
      <main>
          <textarea onChange={handleInputChange} id="id-text" maxLength="500" value={text} placeholder="What's happening?" rows="5" cols="50" />
          <div className="count">
            <button onClick={handleOnClick}>Clear</button>
            <button> {count} / 500</button>
          </div> 
      </main>
      <footer>
          <div>
              <div className="icons">❤️ 👍 🔥 💯</div> 
          </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
        <CharCounter />
    </div>
  );
}

export default App;
