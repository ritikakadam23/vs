function Card({desc,name,type,price,img,ratings}){
    return(
        <>
        <div className="w-[260px] border m-6 p-3 rounded-lg border-lightgray-400" onClick={()=>{
            alert(`${name} is orderd!!`)
        }}>
            <div className="relative">
            <img className="rounded-lg mb-1" src={img} alt="" />
            {

                ratings > '4.5' ? <div className="absolute bg-green-100 text-green-700 px-3 bottom-0 m-2  rounded-full">Best Seller</div> : ""
                
            }

            </div>


            <div className="relative">
            <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg mb-1">{name}</h1>
            
            <span className={type == 'veg' ? "h-2 w-2 bg-green-800 rounded-full" : "h-2 w-2 bg-red-800 rounded-full" }></span>
            </div>
            
            <p className="text-md">{desc}</p>
            {
               price > '200' ? <div className="absolute right-0 bottom-0 px-2 bg-green-600 text-white rounded-full text-sm">Free Delivery</div> : ""
            }

            

            </div>
            
        </div>

        
        </>
    )
}

export default Card;