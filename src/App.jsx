import { useState } from "react"
import Card from "./assets/components/Card"
import Navbar from "./assets/components/Navbar"

const App = () => {

  const data = [
    {
      "pic": "https://images.unsplash.com/photo-1530419248307-be80b9468e77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29uZyUyMHBsYXlsaXN0fGVufDB8fDB8fHww",
      "name": "One love",
      "artist": "The hill",
      "adder": false
    },
    {
      "pic": "https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Together",
      "artist": "Seton",
      "adder": false
    },
    {
      "pic": "https://images.unsplash.com/photo-1518911710364-17ec553bde5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvbmclMjBwbGF5bGlzdHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Be Yourself",
      "artist": "Vans The band",
      "adder": false
    },
    {
      "pic": "https://images.unsplash.com/photo-1518887572120-cae9ec0daab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvbmclMjBwbGF5bGlzdHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Just Up",
      "artist": "Jevsss",
      "adder": false
    },
    {
      "pic": "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvbmclMjBwbGF5bGlzdHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Take up",
      "artist": "Runmmor",
      "adder": false
    }
  ]
   
  const [songData, setsongData] = useState(data)

  const handleClick = (index) => {
    setsongData(prev =>
      prev.map((item, itemindex) =>
        itemindex === index ? { ...item, adder: !item.adder } : item
      )
    );
  };
  

  return (
    <div className="">
      <Navbar/>
      <div className="flex items-center flex-row flex-wrap">
        {songData.map((obj, index) => (
          <Card key={index} data={obj} index={index}  handleClick = {handleClick} />
        ))}
      </div>
    </div>
  )
}

export default App