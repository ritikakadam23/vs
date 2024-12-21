import { useState } from "react";

function Alert(){
    let [alertStatus,setAlert]=useState(false);
    function alertHandler(){
        setAlert((prev)=>!prev)
    }
    return(
        <>
        <div className="w-[400px] mx-auto my-10 ">
            <h1 className="font-bold text-3xl mb-2">This is simple alert app.</h1>
            <p className="text-sm text-gray-600 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, a.</p>
            <button onClick={alertHandler} className="px-3 py-2 bg-orange-600 rounded-lg text-white">{alertStatus ? 'Hide Alert' : "Show Alert"}</button>
        </div>
        {
            alertStatus ?  <div className="absolute right-20 top-10 bg-cyan-100 px-4 py-2 rounded-lg">
            This is react alert
        </div> : ""
        }

       
        
        
        </>
    )
}

export default Alert;