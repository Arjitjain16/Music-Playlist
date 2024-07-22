
const Card = () => {
  return (
    <div className="px-10 mt-10 ">
        <div className="bg-zinc-200 w-64 h-32 flex items-center py-2 px-3 gap-6 relative rounded-xl">
            <div className="bg-orange-400 h-8 w-16  px-2 py-10 rounded-md"></div>
            <div>
                <h1 className="text-2xl">Song Name</h1>
                <p>Artish Name</p>
            </div>
            <button className="bg-orange-400 text-xl mt-4 text-zinc-100 py-1 px-5 absolute bottom-0 left-[25%] -translate-y-[-50%] -translate-x-[-50%] rounded-md">
            Add Fav
            </button>
        </div>
    </div>
  )
}

export default Card