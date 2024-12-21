import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <>
        <div className= "p-3 border-b">
            <div className="w-[900px] mx-auto flex justify-between items-center" >
                <a className="text-2xl font-bold" href="/">Instagram</a>
                {/* <Link to='/' className="text-2xl font-semibold">ReactSpa</Link> */}


                <div className="flex gap-3">
                    <Link to='/requests' className=''>Requests</Link>
                    <a href="/about">About us</a>
                    <a href="">Contact Us</a>
                   
                </div>
            </div>
            
        </div>
        
        
        </>
    )
}

export default Navbar;