import './Title.css';

import {useState} from 'react';
function Title({title,price,Cam,features})
{

  const [nums,setTitle] = useState({title});

    function clickHandler()
    {
        setTitle("popcorn");
        console.log("Cart Item added");
    }

    // console.log(props.title);

//    const list = features.map((feature) => <li>{feature}</li>)
  
    console.log(features)

    return (
        // <div><a href="https://google.com">Google </a></div>
        

        <div className="devo">
            <div className='title'>  <h2>{title}</h2></div>
          
           
             <div className='prd'> <h3>Product Item:{price}</h3></div>

          <div className='cam'><p>{Cam}</p></div>  
            <br></br>
           {/* <p>{features.map((feature)=><li>{feature}</li>)}</p> */}

           <div className='fet'><p>{features}</p></div>
           
            <br></br>
            <br></br>

            <button className='btn' onClick={clickHandler}>Add To Cart</button>
            
        </div>

        
        
    )
}
export default Title;
