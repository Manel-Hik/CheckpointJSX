import logo from './logo.svg';
import './App.css';
import myImage from "./imgsrc.jpg"
import './style.css'

const firstName = prompt("Who are you??");
function App() {
  
  return (
    <>
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:100}}>
      <h1 className="title red"> Hello {firstName} </h1>
      <br/>
      <img src={myImage} alt ='myImage' />
      <br/>
      <img src="/arbre.jpeg" alt="myimage" />
      </div>
      </header>
    </div>
    <video width="750" height="500" controls >
      <source src="/nature.mp4" type="video/mp4"/>
     </video>
    </>
  );
}

export default App;
