import logo from './logo.svg';
import './App.css';
import HomeComponent from './home';
import CoursesComponent from './courses';

function App() {
  const name = "John"
  return (
    <div className="App">
      <HomeComponent />
      <p style={{color:'blue',backgroundColor:'yellow'}}>{name}</p>
      <h1 className="one">This is where we learnt about react.</h1>
      <CoursesComponent />
    </div>
  );
}

export default App;
