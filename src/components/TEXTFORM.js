import React , {useState} from 'react'


export default function TEXTFORM(props) {
  
  const clickmeon = ()=>{
    console.log("I am clicked")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("UpperCase Enabled" , "success");
  }
  const clickmeon1 = ()=>{




    console.log("i am lowercase")
    let newText1 = text.toLowerCase()
    setText(newText1)
    props.showAlert("LowerCase  Enabled" , "success");
  }
  const handleonclick = (event)=>{

    console.log("hello")
    setText(event.target.value)
  }
  const cleartext = ()=>{
       setText('')
  }
  const repeattext =()=>{
    let text1 = text + ' '
    let mytext = text1.repeat(3)
   
    setText(mytext)
    props.showAlert("Repeat Enabled" , "success");
  }
  const removespace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Reomove Spaces Enabled" , "success");
  }
  const wordcopy = ()=>{
    var newText1 = document.getElementById("mybox");
    newText1.select();
    newText1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(newText1.value);
    props.showAlert("WordCopy" , "success");
  }
  const [text, setText] = useState('Enter your text');
  
  return (
   <>
    <div className = "container" style = {{color: props.mode=== 'dark'?'white':'black'}}>
    <h3>{props.title}</h3>
  <div className=" mb-3">
  
  <textarea className = "form-control" value = {text} style = {{backgroundColor: props.mode === 'dark' ?'#817d7d' : 'white',
color: props.mode=== 'dark'?'white':'black'}} onChange = {handleonclick}  id = "mybox" rows = "8"></textarea>
</div>
 <button className="btn btn-primary" onClick = {clickmeon}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-2" onClick = {clickmeon1}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-2" onClick = {cleartext}>Clear Text</button>
 <button className="btn btn-primary mx-2" onClick = {repeattext}>Repeat Text</button>
 <button className="btn btn-primary mx-2" onClick = {wordcopy}>Copy Text</button>
 <button className="btn btn-primary mx-2" onClick = {removespace}>Trim Text</button>
</div>
<div className="container my-3" style = {{color: props.mode=== 'dark'?'white':'black'}}>
<h3>Your text Summary</h3>
  <p>{text.split(" ").length} words and {text.length} letters</p>
  <p>Time taken - {.008 * text.split(" ").length}mins</p>
  <h3>Preview</h3>
<p>{text}</p>
</div>

   </> 
  )
  }
