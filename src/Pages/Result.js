import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';


const Result = ({name,score}) => {
    const history=useHistory();

    useEffect(()=>{
        if(!name){
            history.push('/')


        }
    },[name,history])
    return (
        <div className="result" >
            <span className="title"> Final Score : {score}</span>
            <Button variant='contained' color='primary' size='large' >
              <Link to='/'>  Got to home</Link>
            </Button>
             
            
        </div>
    )
}

export default Result
