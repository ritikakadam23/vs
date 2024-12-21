import { useState } from "react";

function Loader(){

    let [loadingStatus,setLoader] = useState(false);
    function loaderHandler(){
        setLoader((prev)=>!prev)
    }
    
    return(
        <>
        <div className="w-[400px] mx-auto my-10 ">
            <h1 className="font-bold text-3xl mb-2">This is simple loader app.</h1>
            <p className="text-sm text-gray-600 mb-3">Lorem ipsum dolor sit amet adipisicing elit. Praesentium, a.</p>
            
                <button onClick={loaderHandler} className="px-3 py-2 bg-orange-600 rounded-lg text-white flex gap-2 items-center">
                    <p>Load Data</p>
                   {
                        loadingStatus ? <div className="loader"></div> : ""
                   }
                   
                </button>
                
        </div>

        {
            loadingStatus ? <div className="absolute right-20 top-10 bg-cyan-100 px-4 py-2 rounded-lg">
            Data is Loading...
        </div> : "" 
        }

        
        

       
        
        
        </>
    )
}

export default Loader;