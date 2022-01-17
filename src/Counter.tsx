import './Counter.scss';
import React, { ChangeEvent, useState } from 'react';

const Counter = () => {

  const [number, setNumber] = useState(0)
  const [words, setWords] = useState<string>('')


  const inc = (count: number) => count + 1;
  const dec = (count: number) => count - 1;
  const reset = (count: number) => count = 0;

  const inputPhrase = (event: ChangeEvent<HTMLInputElement>) => {
    setWords(event?.target.value)
  }


  const userChoice = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(event.target.value));
  }

    return (
<>

      <hr style={{height: '40px', backgroundColor: 'tomato'}} />

      <main className="Counter">
        <h1>Days Since Last Incident:</h1>
        <p className="count">{number}</p>
        <section className="controls">
          <button onClick={() => setNumber(dec)}>Decrement</button>
          <button onClick={() => setNumber(reset)}>Reset</button>
          <button onClick={() => setNumber(inc)}>Increment</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input 
            id="set-to" 
            type="number"
            value={number}
            onChange={userChoice} 
            />
             <input 
            id="set-to" 
            type="number"
            value={number}
            onChange={userChoice} 
            />
            <input type="submit" />
          </form>




          <form onSubmit={() => {}}>
            <label htmlFor="barf">{words}</label>
            <input 
            id="barf"
            type="string"
            value={words}
            onChange={inputPhrase} />
            <button>BARF!</button>
          </form>
        </section>
      </main>
      </>
    );
  };
  
  const CounterApp = () => <Counter />;
  
  export default CounterApp;
  