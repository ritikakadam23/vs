import {Link} from 'react-router-dom'

function UserCard({img,name,prof,username}){
    return(
        <>
        <Link to={`/${username}`} className='hover:cursor-pointer'>
            <div className="flex items-center gap-5 mt-4">
                <img className="h-14 w-14 rounded-full object-cover mt-4" src={img} alt="" />

                <div className="text-left">
                    <p>{name}</p>
                    <p className="text-sm text-neutral-600">{prof}</p>
                </div>
            </div> 
        
        </Link>
               
        </>
    )
}

export default UserCard;