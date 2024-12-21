function User({name,desc,img}) {
  return (
    <>
      <div className="flex justify-between w-[350px] items-center bg-white mt-5 p-2 mx-auto rounded-lg">
        <div className="flex gap-3">
          <img
            className="h-14 w-14 rounded-full object-covera"
            src={img}
            alt=""
          />
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm">{desc}</p>
          </div>
        </div>

        <button className="bg-violet-500 px-4 py-1 rounded-full text-white">Follow</button>
      </div>
    </>
  );
}

export default User;
