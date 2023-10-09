import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import StateSample from './hooks/StateSample';
import FetchSample from './hooks/FetchSample';

function App() {

  //let name = "Oğuzhan"
  //let age = 28

  //const[name, setName] = useState()
  const[name, setName] = useState("Oğuzhan Varlı")
  const [age, setAge] = useState(28)

  function handleChange() {
    //console.log('worked')
    //name = "Ahmet"
    setName("Ahmet")
    //console.log(name)
  }

  function handleChangeAge(){
    setAge(18)
    setName('Icardi')
  }





  return (
    <>
    {/* <StateSample/> */}
    <FetchSample/>
      {/* <div className='center'>
        <h1>{name}</h1>
        <div>
          <button onClick={handleChange}>Change Name</button>
        </div>

      </div>
      <div className='center'>
        <h1>{age}</h1>
        <div>
          
          <button onClick={handleChangeAge}>Change Age</button>
        </div>

      </div> */}
    </>
  );
}

export default App;
