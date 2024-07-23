
const Card = ({data , index , handleClick}) => {

    const {pic , name , artist , adder} = data
  return (
    <div className="px-10 mt-10 ">
        <div className="bg-zinc-200 w-64 h-32 flex items-center py-2 px-3 gap-6 relative rounded-xl">
            <div className="h-20 w-20  px-2 py-10 rounded-md overflow-hidden">
                <img className="object-contain" src={pic} alt="" />
            </div>
            <div>
                <h1 className="text-2xl">{name}</h1>
                <p>{artist}</p>
            </div>
            <button onClick={() => handleClick(index)} className={`text-xl mt-4 text-zinc-100 ${adder === false ? "bg-orange-500" : "bg-blue-500"} py-1 px-5 absolute bottom-0 left-[25%] -translate-y-[-50%] -translate-x-[-50%] rounded-full whitespace-pre-line`}>
            {adder === false? "Add to Fav" : "Added"}
            </button>
        </div>
    </div>
  )
}

export default Card