import Card from "./assets/components/Card"
import Navbar from "./assets/components/Navbar"

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <div className="flex items-center flex-row flex-wrap">
      <Card /> 
      </div>
    </div>
  )
}

export default App