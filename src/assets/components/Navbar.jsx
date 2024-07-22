
const Navbar = () => {
  return (
    <nav className="w-full px-16 py-3 flex item center justify-between">
        <div>
            <h1>Change</h1>
        </div>
        <div className="bg-orange-600 flex item-center gap-2 py-1 px-2 rounded-xl text-zinc-100 font-bold">
            <h1>Favorites</h1>
            <h3>2</h3>
        </div>
    </nav>
  )
}

export default Navbar