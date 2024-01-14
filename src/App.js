import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'



function App() {
  const[mode,setmode] = useState('light');
  const[alert,setAlert] = useState(null);

  let showAlert = (message ,type)=>{
    setAlert ({
      msg : message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  let togglemode = ()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#2f2f2f"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white"
    }
    }
  return (
    <>
   
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3 ">
    <Textform showAlert={showAlert} heading="Enter text below to convert" mode={mode} />
    {/* <About/>  */}
    </div>
    </>
   
  );
}

export default App;
