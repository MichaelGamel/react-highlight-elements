import React, { useState } from 'react';

import './App.css';
import Wrapper from './Wrapper';

const App = () => {
  const [title1, setTitle1] = useState(1);
  const [title2, setTitle2] = useState(1);
  const [title3, setTitle3] = useState(1);
  const [title4, setTitle4] = useState(1);

  const clickHandler1 = () => {
    setTitle1(title1 + 1);
  };

  const clickHandler2 = () => {
    setTitle2(title2 + 1);
  };

  return (
    <div className="App">
      <button onClick={clickHandler1}>Change title 1</button>
      <button onClick={clickHandler2}>Change title 2</button>
      <h1 />
      <Wrapper color={'red'} timeout={2000}>
        <p>{title1}</p>
        <p>{title2}</p>
        <p>{title3}</p>
        <p>{title4}</p>
      </Wrapper>
    </div>
  );
};

export default App;
