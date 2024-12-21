import Users from "./Pages/NewUsers";
import { useParams } from "react-router-dom";
import Feed from './Components/Feed'

function UserDetails(){

    let {username} = useParams();
    let user = Users.find(user=> user.username==username)
    return (
        <>
             <div className="mx-auto w-[500px] flex items-center gap-5 mt-24 mb-24">
                <img className="h-24 w-24 rounded-full object-cover mt-4" src={user.image} alt="" />

                <div className="text-left">
                    <p>{user.name}</p>
                    <p className="text-sm text-neutral-600">{user.profession}</p>
                    <p>{user.description}</p>
                    <div className="flex gap-3 mt-2">
                        <div className="bg-neutral-200 rounded-md p-1">{user.followers} Followers</div>
                        <div className="bg-neutral-200 rounded-md p-1">{user.follows} Followings</div>

                    </div>
                </div>
            </div>    
                <div className="w-[800px] mx-auto">
                    <div className="flex flex-wrap gap-2 object-cover">
                        {
                            user.posts.map(post=> <Feed img={post.image} id={post.id}/>)
                        } 
                    </div>
               
                </div>
               
        </>
    )   
}

export default UserDetails;