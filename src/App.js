import './App.css';
import Header from "./components/header"
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe';
import MyWork from './components/myWork';
import ContactMe from './components/contactMe';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;
