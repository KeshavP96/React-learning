//Component name should start with capital letter
//Component should return a function
//JSX is used
// Export the component for it to be access outside

import React from "react";
import './App.css'
import Homepage from "./pages/homepage";

/*
const App = ()=> {
  return(
   <div>This is my first component using Arrow function</div>
  )
}
*/

//OR

/*
function App(){
  return React.createElement('div',{className : 'myClass'}, 'This is my first component using react create element')
}
*/

//OR

function App(){
  return(
    <div className="App">
      <Homepage/>
    </div>
  )
}




export default App;
