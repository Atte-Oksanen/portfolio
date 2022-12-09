import './App.css';
import Header from "./header"
import NavBar from './navBar';
import AboutMe from './aboutMe';
import MyWork from './myWork';

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
