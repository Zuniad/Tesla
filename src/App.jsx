import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from'./Title.jsx';
import Src from './Src.jsx';

function App() {

const[count,setCount]=useState(0);

function Incr()
{
  setCount(count+1);

}
function Decr()
{
  setCount(count-1);
}

function Reset()
{
  setCount(0);
}

  // passing the arrays to the props 

  // creating the arrays
   let features=['Snapdragon',8,'Gen3'];

  //  let options=[]

   let mos=["Tensor","T",18]

   let xp=["Snapdragon","X","Plus"]

   let px=["Amd","Ryzen","7Hs"]

  let brand={Andro:"Nokia",Ios:"IOS",Ten:"Google",Adr:"Nubia",Gm:"Gaming"};
const [color,setColor] =useState('Blue');
 

let mul=2*2

const changecolor = () =>{
  setColor('Green');
  // console.log(color);
}


  return (
    <div>
   
     




{/* useState is a react hook ,which contains an state variable 
which helps us to track state in components & updates the user interface when state changes

 */}

      {/* <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson" */}
  
    
    {/*  To wrap the numbers in given jsx data we use {} for the given data */}
<Src>
    <Title title={brand.Andro} price={45000} Cam={"200mpx"} features={features}/>

   

    <Title title={brand.Ios} price={90000} Cam={"64mpx"} features={["Bionic","A","16"]} />

 

    <Title title={brand.Gm} price={50000}  Cam={"80mpx"}features={mos}/>

    <Title title={brand.Ten} price={89999} Cam={"48mpx"} features={xp}></Title>
    <Title title={brand.Adr} price={68799} Cam={"78mpx"} features={px}></Title>

   {/* Passing arrays to the props */}


   </Src>

    <>
<h3>useState Hooks in react</h3>

<p>2 * 2 ={mul}</p>
<h2>Fav color is {color}</h2>
    
    <button onClick={changecolor}>Click!</button>
    </>

    <div className='md1'>
      <div className='md2'>
        Incr & Decr
      </div>
      <div className='md3'>
        <div className='md41'><button onClick={Decr}>-</button></div>
        <div className='md43'>{count}</div>
        <div className='md42'><button onClick={Incr}>+</button></div>
      </div>
<div className='md5'><button onClick={Reset}>Reset</button></div>
    </div>
    </div>
    

  );
}

export default App
