
import React from 'react';
import { useState } from 'react';

import './App.css';


import Footer from './Component/Footer';
import Header from './Component/Header';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import axios from 'axios';



function App() {
  const [name, setname] = useState("");
  const [qustion,setqustion]=useState();
  const [score,setscore]=useState(0)

 
  const fechQuestion=async()=>{
    const data=await axios.get('https://opentdb.com/api.php?amount=10&category=23&type=multiple')
    console.log(data.data.results)
    setqustion(data.data.results)
  }

  return (
    <>
    <div className="App" style={{backgroundImage:"url(./ques1.png)"}} >
   

    <Switch>
     <Route exact path="/" > <Home name={name} setname={setname} fechQuestion={fechQuestion}/> </Route>
     <Route exact path="/quiz"> <Quiz name={name} qustion={qustion} setqustion={setqustion} score={score} setscore={setscore} />   </Route>
     <Route exact path="/Result" component={Result} />

    </Switch>

    
    
    
       
    </div>
    <Footer />
    </>

  );
}

export default App;
