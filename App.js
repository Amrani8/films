
import React, {useEffect, useState} from 'react';
 import Api from './apimo/Api';
// import Opi from './opimo/Opi';
// import Poste from './opimo/poste';
// import { Context, ContextProvider } from './context';



function App () {
  // const[title,setTitle]=useState("My name");
  // const user = useContext(Context);

  


  

  // useEffect(() => {
  //   document.title = title;
  //   return () => {
  //     console.log("unmonted");

  //   };
  
  // },[title]);
 

  return (
  
       <div className="App">
{/*       
       <button onClick={()=>setTitle(`darija coding`)}> changer le titre</button>
       <h3>{user.name}</h3>
       <h3>{user.email}</h3> */}

 <Api/> 
{/* <Opi/>
<Poste/> */}

       </div>
  
     
  );
}


// const AppWithProvider = () => (
//   <ContextProvider>
//     <App />
//   </ContextProvider>
// );

// export default AppWithProvider;

export default App;