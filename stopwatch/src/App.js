import React ,{useState} from 'react';
import './App.css';

function App() {
   const [timer , settimer]  = useState(0)
   const [count , setcount] = useState()

   const start=()=>{
      
      let id = setInterval(()=>{

           settimer((p)=>p+1)

      },1000)
      setcount(id);
   }

   const stop=()=>{
      
       clearInterval(count)
   }
   const reset=()=>{
    clearInterval(count)
     settimer(0)
   }

  return (
    
    <div className="App">
           
         <h1>{timer}</h1>

         <button onClick={start}>Start</button> &nbsp;
          <button onClick={stop}>Stop</button>  &nbsp;
         <button onClick={reset}>Reset</button>
         


    </div>
  );
}

export default App;
