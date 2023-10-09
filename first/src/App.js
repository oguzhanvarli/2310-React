import logo from './logo.svg';

import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Navbar from './components/Navbar';
import Header from './components/Header'
import PageContent from './components/PageContent';
import About from './components/About';
import ImageLocation from './components/ImageLocation';
import Footer from './components/Footer';

function App() {

  
let name = "Oğuzhan Varlı"
let age = 28


let myObj = {
  title: "Frontend Developer",
  company: "Wissen",
  year : 2023,
}


let firstArray = {a: 15}
let secondArray= {a : 15}

let deneme = 'Oğuzhan'
let deneme2 = 'Oğuzhan'



  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <PageContent  />
      <About name={name} age={age} myObj={myObj}/>
      <ImageLocation />
      <Footer></Footer>
    </>
  );
}

export default App;
