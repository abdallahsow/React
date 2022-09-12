import React from 'react';
import './state.css'

const UseState = () => {
    const answer = React.useState("Yes")
    console.log(answer)
  
    return (
    <div className="state">
      <h1 className="state-title">Is state important to know?</h1>
      <div className="state-value">
        <h3>{answer[0]}</h3>
      </div>
    </div>
  );
};

export default UseState;
