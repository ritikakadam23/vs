import { useState } from "react"

function User(){
    let [user,setUser] = useState({
        name: "Aarav",
        profession: "Software Engineer",
        image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHwwfDB8fHww",
        requestSent:  false,
        isFriend: false

    })

    function userHandler(){
        setUser((prev)=>({
            ...prev, requestSent: true
        }))
    }


    return (
        <>
         <div className="flex justify-between w-[350px] items-center bg-white mt-5 p-2 mx-auto rounded-lg">
        <div className="flex gap-3">
          <img
            className="h-14 w-14 rounded-full object-covera"
            src={user.image}
            alt=""
          />
          <div>
            <p className="font-bold">{user.name}</p>
            <p className="text-sm">{user.profession}</p>
          </div>
        </div>

        <button onClick={userHandler} className="bg-violet-500 px-4 py-1 rounded-full text-white">{user.requestSent ? "Requested" : "Follow Me"}</button>
      </div>
        </>
    )
}

export default User;