// import { useState } from "react";

// function App(){
//   let [age,setAge]= useState(24)
//   return(
//     <>
//     <div className="w-[400px] mx-auto my-10 text-center">
//       <h1 className="font-bold text-3xl">The age is {age}</h1>
//       <button onClick={()=>{
//         setAge(30);
//       }} className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-3">Update Age</button>
//     </div>
      
//     </>
//   )
// }

// export default App;

// import Counter from './Components/Counter'

// function App(){
//   return(
//     <>
//       <Counter/>
//     </>


//   )

// }

// export default App;



// import Alert from './Components/Alert'

// function App(){
//   return(
//     <>
//       <Alert/>
//     </>


//   )

// }

// export default App;

import Loader from './Components/Loader'
import User from './Components/User'

function App(){
  return(
    <>
      {/* <Loader/> */}
      <User/>
    </>


  )

}

export default App;





















