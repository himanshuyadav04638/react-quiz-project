import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Questions from '../Component/Questions';



const Quiz = ({name,qustion,setqustion,score}) => {

    const [options,setoptions]=useState();
    const [currqus,setcurrqus]=useState(0);

    useEffect(() => {
        //console.log(qustion);
        setoptions(
            qustion &&
            handleSuffle([qustion[currqus]?.correct_answer,...qustion[currqus]?.incorrect_answers])
        )


        
    }, [qustion,currqus])

    console.log(options)

    const handleSuffle=(optionss)=>{
        return optionss.sort(()=>Math.random()- 0.5);
    }
    console.log(name)


  
      
  

    return (
        <div className="quiz">

       
           <div>
               <span className="subtitle">Welcome, {name}</span>
             
           </div>

           {
               qustion ?(
                 <> 
                    <div className="quizInfo" >
                        <span>Score: {score}</span>

                    </div>
                    <Questions  currqus={currqus} 
                    setcurrqus={setcurrqus}
                    qustion={qustion}
                    correct={qustion[currqus]?.correct_answer}
                    score={score}
                    setScore={setqustion}
                    setqustion={setqustion}
                    options={options}
                    setoptions={setoptions}
                    
                    
                    />

               
                </>
                ):(   <CircularProgress style={{margin:100 }} color='inherit' size={150} thickness={1}/>)
           }

        </div>
    )
}

export default Quiz
