
import './App.css';
import Icon from "./Icon";


function App() {
  // const name ="Saransh";
  const ListofItems=["Ansh","Sam","Deep","Krish"];
  return (
    <div className="App">
     <h1>Hello</h1>
     
     {ListofItems.map(name=><Icon name={name}/>)}
    </div>
  );
}

export default App;
