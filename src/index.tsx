import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterApp from './Counter';
import QuizParty from './QuizParty';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <QuizParty />
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);


