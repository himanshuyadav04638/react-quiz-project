import { useState } from 'react'
import { Button, MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import Categories from '../Categories'
import { useHistory } from 'react-router'
const Home = ({name,setname,fechQuestion}) => {

     const [category, setcategory] = useState("");

     const History =useHistory();
    
  const  handleSumbit=()=>{
       fechQuestion();
         History.push('/quiz');
     }
    return (
        <div className="content" >
            <div className="settings" >
                <span style={{fontSize:30}}>Quiz Setting</span>

                <div className="settings_select" >
                    <TextField 
                    style={{marginBottom:25}} 
                    label="Enter Your Name" 
                    variant="outlined"
                    onChange={(e)=>{setname(e.target.value)}}
                     />

                    <TextField select label="Select Category" variant="outlined"  style={{marginBottom:30}} onChange={(e)=>{setcategory(e.target.value)}} value={category} >
                     {Categories.map((cat)=><MenuItem key={cat.category} value={cat.value} >{cat.category} </MenuItem>
                         
                     )}
                        
                    </TextField>
                    <Button variant="contained" color="primary" size="large" onClick={handleSumbit} >Start Quiz</Button>


                </div>
                


            </div>
             <img src="./quizimg.png" className="banner" alt="quiz img" />
        </div>
    )
}

export default Home
