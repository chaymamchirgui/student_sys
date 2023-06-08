import * as React from 'react';
import  { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Paper,Button } from '@mui/material';
import { Container, margin } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));


 

export default function Student() {
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};
const classes = useStyles();
const[name,Setname]=useState('');
const[address,Setadress]=useState('');
const [student,Setstudent]=useState([]);
const handleClick=(e)=>{
    e.preventDefault();
    const student={name,address}
     console.log(student)
     fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
  
    }).then(()=>{
      console.log("New Student added")
    })
  }
  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      Setstudent(result);
    }
  )
  },[])
  


  return (
    <Container>
    <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>

<form className={classes.root} noValidate autoComplete="off">

  <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
  value={name}
  onChange={(e)=>Setname(e.target.value)}
  
  />
  <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
  value={address}
  onChange={(e)=>Setadress(e.target.value)}
  
  />
  
   <Button variant="contained" color="info" onClick={handleClick}>
  Submit
</Button>
   </form>
   
   </Paper>
   <h1>List of Students</h1>
   <Paper elevation={3} style={paperStyle}>

      {student.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>
      ))
}


    </Paper>
   </Container>

  )
}
