import React from 'react';
import ReactDOM from 'react-dom';
import Clock from '../frontend/clock.jsx';
import Tabs from '../frontend/tabs.jsx';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const tab_obj = [{ title: "one", content: "nothing" },
  { title: "two", content: "nothing" },
  { title: "three", content: "nothing" }]
  ReactDOM.render(
    
  <div>
    <Clock /> 
    <Tabs className="tabs" tabs={tab_obj}/>
  </div>,
  root);
});

{/* <AnalogClock theme={Themes.navy} /> */}
