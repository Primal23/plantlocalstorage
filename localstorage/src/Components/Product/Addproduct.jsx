import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function Addproduct() {

    let initialValue;

  if(localStorage.getItem("Plant")===null){
    initialValue=[]
   } else{
    initialValue=JSON.parse(localStorage.getItem("Plant"));
  }

  const [value,setValue]=useState(initialValue);
const [insert,setInsert]= useState({});

  const handleChange=(e)=>{
    setInsert({
      ...insert,
      [e.target.name]: e.target.value
    });
  };

  console.log(value,"value state")
  console.log(insert,"insert state")

  const handleSubmit = (e)=> {
    e.preventDefault();
    const newPlantId = value.length === 0 ? 1 : value[value.length-1].p_id + 1;
    const details= {
      p_id: newPlantId,
      ...insert
    };

    const updateValue =[...value,details];//corrected line
    setValue(updateValue); // update the state with the new array
    localStorage.setItem("Plant",JSON.stringify(updateValue));// store the updated  array in localstorage
  };
  return (
    <div style={{display:"flex",justifyContent:"center"}}>

    <Box style={{border:"1px solid black",height:"600px",width:"600px",background:"linear-gradient(180deg,#eea7f3,#c0f5d022 60%)"}}
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <div>
        <h2>INSERTING PRODUCT</h2>
    <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label="Product Name*"
          name="name"
         onChange={handleChange}
        
        />
        <br/>
        <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label="Availability*"
          name="availability"
          onChange={handleChange}
        />
         <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label="Price*"
          name="price"
          onChange={handleChange}
        />
         <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label="Description*"
          name="description"
         onChange={handleChange}
         multiline
         rows={4}
        />
         <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label="Image Link*"
         name="image"
          onChange={handleChange}
        />
        <br/><br/>
        <Button type="submit" fullWidth variant="contained"
        onClick={handleSubmit}>
  Submit
</Button>
    </div>
    </Box>
    </div>
  )
}
