import TouristPlace from './TouristPlace'
const touristPlaces = [
    {
      placeName: "Goa",
      desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
      img: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      whenToVisit: "Winter",
      ratings: 4.5,
      price: 15000
    },
    {
      placeName: "Manali",
      desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
      img: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
      whenToVisit: "Summer",
      ratings: 4.7,
      price: 10000
    },
    {
      placeName: "Kerala",
      desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
      img: "https://images.unsplash.com/photo-1679022579345-72dc76a518f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      whenToVisit: "Winter",
      ratings: 4.8,
      price: 20000
    },
    {
      placeName: "Jaipur",
      desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
      img: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      whenToVisit: "Winter",
      ratings: 4.6,
      price: 12000
    }
  ];
  

function App(){
    return(
        <>
        <div className='flex justify-center'>
        {
            touristPlaces.map(TPlace=><TouristPlace name={TPlace.placeName} desc={TPlace.desc} img={TPlace.img} season={TPlace.whenToVisit} ratings = {TPlace.ratings} price={TPlace.price}/>)
        }
        </div>
        
        
        </>
    )
}

export default App;