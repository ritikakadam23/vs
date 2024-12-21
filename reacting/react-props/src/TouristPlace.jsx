function TouristPlace({name,desc,img,season,ratings,price}){
    return(
        <>
        <div className="w-[300px] border border-gray-200 p-2 m-2 rounded-lg">
            <div className="relative">
            <img className="rounded-lg mb-2" src={img} alt="" />
            <div className="absolute bottom-0 m-2">
                {
                    price > '12000' ?  <span className="px-3 rounded-full bg-red-600 text-white">Expensive</span> :  <span className="px-3 rounded-full bg-green-600 text-white">Cheaper</span>
                }
            
           
        </div>
            </div>
          
            <p className="text-xl font-bold mb-2">{name}</p>
            <p className="text-sm text-gray-600 mb-2">{desc}</p>
               
                    
            <p className="">{ratings}</p>
            
            {
                    season == 'summer' ?  <span className="px-3 rounded-full bg-yellow-600 text-black">Best to visit in Summer</span>    :  <span className="px-3 rounded-full bg-yellow-600 text-black">Best to visit in Winter</span>    
                }
        </div>
        
        
        </>
    )
}

export default TouristPlace;