import './App.css';
import { useState } from 'react';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';

function App() {

  const [choice, setChoice] = useState("All");
  const [search,setSearch] = useState("");

  console.log(search);

  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch} choice={choice} setChoice={setChoice}/>
      <Blogs search={search} choice={choice}/>
    </div>
  );
}

export default App;
