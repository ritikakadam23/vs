import {Link} from "react-router-dom"


function Feed({img,id}){

    return(
        <>
        <Link to={`/post/${id}`}>
            <img className="w-[260px] h-[260px] " src={img} alt="" />
        </Link>
        
        
        </>
    )
}

export default Feed;