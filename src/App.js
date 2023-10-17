
import './App.css';
import MainSection from './components/MainSection';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App flex flex-col md:flex md:flex-row">
     <div className=' sticky top-0'>
     <Sidebar/>
      </div>  
    
      <MainSection/>

    </div>
  );
}

export default App;
