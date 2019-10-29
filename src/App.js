import React, { useState } from 'react';

import './App.css';
import Wrapper from './Wrapper';

const App = () => {
  const [title1, setTitle1] = useState('title1');
  const [title2, setTitle2] = useState('title2');
  const [title3, setTitle3] = useState('title3');
  const [title4, setTitle4] = useState('title4');

  const clickHandler1 = () => {
    setTitle1('title1 changed');
  };

  const clickHandler2 = () => {
    setTitle2('title1 changed');
  };

  return (
    <div className="App">
      <button onClick={clickHandler1}>Change title 1</button>
      <button onClick={clickHandler2}>Change title 2</button>
      <h1 />
      <Wrapper>
        <p>{title1}</p>
        <p>{title2}</p>
        <p>{title3}</p>
        <p>{title4}</p>
      </Wrapper>
    </div>
  );
};

export default App;
