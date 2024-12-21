import { useState } from "react";

function Counter(){

    let [counter,setCounter] = useState(0);
    function incrementHandler(){
        // setCounter(counter + 1);
        setCounter((prev)=>prev+1)
    }

    function decrementHandler(){
        // setCounter(counter + 1);
        if(counter > 0){
        setCounter((prev)=>prev-1)

        
        }
    }

    return(
        <>
        <div className="w-[400px] mx-auto my-10">
            <h1 className="font-bold text-3xl mb-2">This is simple counter app</h1>
            <p className="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, cumque?</p>

            <h1>{counter}</h1>
                <div className="flex gap-2">
                    <button onClick={incrementHandler} className="mt-2 px-3 py-2 bg-orange-600 text-white rounded-lg">Increment</button>
                    <button onClick={decrementHandler} className=" mt-2 px-3 py-2 bg-orange-600 text-white rounded-lg">Decrement</button>
                </div>
        </div>

       
        
        
        </>
    )
}

export default Counter;