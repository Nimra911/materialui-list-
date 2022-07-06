import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// import SearchAppBar from './Component/SearchAppBar';
import Buttons from './Component/Buttons';

function App() {

// console.log(Array);
// const[item, setItem] = useState(Array);
// const[drop, setDrop] = useState();
// // drop function

// const selectedValue = (e) =>
// {
  
//   let check = e.target.value;
//  setDrop(check);
// console.log(drop);
// if(check==='All')
// {
//   setItem(Array);
// }
// else
// {
//   const data= Array.filter((data)=> (data.brand)===(check));
//   setItem(data);
// }

// }
// // button function
// const handleClick=(item)=>
// { 
// const data= Array.filter((data)=> (data.year)===(item)  );
//  setItem(data);
// }



  return (
    <>
    {/* <SearchAppBar/> */}
    {/* <DropDown/> */}
    <Buttons/>
    {/* <div className='buttoncontainer'>
     <Stack direction="row" spacing={5}>
    <button onClick={()=>
   {  
   handleClick('2000')  }
   }
   >2000</button> 
    <button onClick={()=>
   {  
   handleClick('3000')  }
   }
   >3000</button> 
    <button onClick={()=>
   {  
   handleClick('4000')  }
   }
   >4000</button> 
   </Stack>
   </div>
  {/* const data= Array.filter((year)=> (data.year)==(Year)  ); */}
{/* <label for="cars">Choose a car:</label>
<select value={drop} onChange={selectedValue}
>
  {console.log(drop)}
  <option >All</option>
  <option value="bmw">bmw</option>
  <option value="cv">cv</option>
  <option value="cvfj">cvfj</option>
</select>
<div className="displayresult">
  { 
  item.map((elem)=>
 (
<h1>{elem.year},{elem.id},{elem.img},{elem.brand}</h1>
)
  )
}
  </div>  */}
   </>
   );
}
export default App;
