import Users from "./Users"
import UserCard from "../Components/UserCard";


function Requests(){
    return(
        <>
        <div className="mx-auto w-[500px] text-center mb-40">
            <h1 className="font-bold text-2xl mt-24 ">Your Follow Requests</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora rem dolores.</p>

            {
                Users.map(user=><UserCard img={user.image} name={user.name} prof={user.profession} username={user.username} followers={user.followers} follows = {user.follows} />)
            }
        </div>            

        </>
    )
}

export default Requests;