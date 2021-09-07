import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'


const Questions = ({currqus,setcurrqus,qustion,correct,score,setScore,setqustion, options,setoptions}) => {


    const [selected,setselected]=useState();
    const [error,seterror]=useState(false);
   // console.log(qustion[currqus].qustion);
         const history= useHistory()

    const handleselected=(item)=>{
        if(selected===item  && selected===correct ) {
            return 'select'
        }
        else if(selected===item && selected !==correct){

            return 'wrong'
        }
        else if(item===correct){
            return 'select'
        }

    }
    const handlecheck=(item)=>{
        setselected(item);
        if(item===correct) setScore(score +1) ;
        seterror(false)
    }

    const handlenext=(e)=>{
        if(currqus >5){
            history.push('/Result')
        }
        else if(selected){
            setcurrqus(currqus + 1);
            setselected();

        }
        else{
            seterror('please select an option first');
        }
        
        

    }
    const handleQuit=(e)=>{
        console.log("quit")

    }


    return (
        <div className="qustion">
           <h1 >Question {currqus + 1 }</h1>
           <div className="singledQustion">

               <h2>{qustion[currqus].question}</h2>

               <div className="options">
               {options && options.map((item)=><button onClick={()=>{handlecheck(item)} } 
               className={`singleOption ${selected &&  handleselected(item) }  `} key={item} disabled={selected} >{item}</button>)}
               </div>

               <div className="controls">
                   <Button variant="contained" color="secondary" size='large' style={{width:185}} onClick={handleQuit} >
                       <Link to='/'>Quit </Link>
                       
                   </Button>
                   <Button variant="contained" color="primary" size='large'  style={{width:185}} onClick={handlenext} >
                       Next
                   </Button>
                

               </div>
               


           </div>
        </div>
    )
}

export default Questions
