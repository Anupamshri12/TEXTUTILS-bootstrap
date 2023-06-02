
import './App.css';
import Navbar from './components/Navbar';
import TEXTFORM from './components/TEXTFORM';
import Alert from './components/Alert';
import React  , {useState} from 'react';

export default function App() {
  const toggleme = ()=>{
      if(mode === 'dark'){
        setmode('light');
        text2('Enable Dark Mode');
        document.body.style.backgroundColor = 'white';
        showAlert("Enable Light mode" , "success");
        
      }
      else{
        setmode('dark');
        text2('Enable Light Mode');
        document.body.style.backgroundColor = 'rgb(6 31 68)';
        showAlert("Enable Dark mode" , "success");
      }
  }
  const showAlert = (message , type)=>{
    setAlert({
        msg: message,
        type:type
    })
   setTimeout(() =>{
       setAlert(null);
   }, 1500);
  }
  const[alert ,setAlert] = useState(null);
  const[text1 ,text2] = useState('Enable Dark Mode');
  const[mode , setmode] = useState('light');
  return (
    
    <>
   

   <Navbar title = "TextUtils" mytext = "Home" mode = {mode} togglemode = {toggleme} title1 = {text1} />
 <Alert k= {alert}/>
<div className="container my-3">
<TEXTFORM title = "Enter your Text here - " mode = {mode} showAlert = {showAlert}/>



</div>



   
    </>

    
  )
}





