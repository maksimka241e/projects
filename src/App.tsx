import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  { MainHome }   from './components/Home/home';
import { MainProjects } from './components/Projects/projects';
import { MainSkills } from "./components/Skills/skills";
import { MainAbout } from "./components/About/about";
import { MainContact } from "./components/Contact/contact";
import { MainCV } from "./components/CV/CV";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<MainHome></MainHome>}></Route>
      <Route path='Projects' element={<MainProjects></MainProjects>}></Route>
      <Route path="CV" element={<MainCV></MainCV>}></Route>
      <Route path="Skills" element={<MainSkills></MainSkills>}></Route>
      <Route path="About" element={<MainAbout></MainAbout>}></Route>
      <Route path="Contact" element={<MainContact></MainContact>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
