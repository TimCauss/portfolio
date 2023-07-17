import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Components :
import Card from './Card';

//Librairies :
import 'tachyons';

//Style : 
import './index.css';

//Enums :
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
      <Card id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
      <Card id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
    </div>
  </React.StrictMode>
);


reportWebVitals();