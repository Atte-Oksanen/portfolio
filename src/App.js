import './App.css';
import Header from "./components/header"
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe';
import MyWork from './components/myWork';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AboutMe />
      <MyWork />
    </div>
  );
}

export default App;
