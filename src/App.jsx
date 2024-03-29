import "./App.css";
import Button from "./Button/Button";
import DesingStep from "./DesingStep/DesingStep";
import DreamDesing from "./DreamDesing/DreamDesing";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import SubHero from "./SubHero/SubHero";

function App() {
  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <SubHero></SubHero>
     <Services></Services>
     <DreamDesing></DreamDesing>
     <DesingStep></DesingStep>
     {/* <Button></Button> */}
    </>
  );
}

export default App;
