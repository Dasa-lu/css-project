import './App.css'
import NavBar from "./components/NavBar.tsx";
import AbouTony from "./components/AbouTony.tsx";
import Divider from "./components/Divider.tsx";
import Allinfo from "./components/WorkInformation.tsx";

function App() {

  return (
    <>
      <div>
       <NavBar/>
          <Divider/>
          <AbouTony/>
          <Divider/>
<Allinfo/>
      </div>

    </>
  )
}

export default App
