import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import React,{useState} from 'react'
import Footer from './Components/Footer'

function App() {
  const [progress, setprogress] = useState(0)
  
  const handleprogress=(progress)=>{
setprogress(progress)
  }
  
  
  return (
    <div className="App">

<Router>
     <Navbar />
     <LoadingBar
        color='red'
        height={4}
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
     <Routes>


     <Route  exact path='/' element={ <News handleprogress={handleprogress} pageSize="6" page="" key="general" category="general" /> }/>
     <Route  exact path='/entertainment' element={ <News handleprogress={handleprogress} pageSize="6" page="" key="entertainment" category="entertainment" /> }/>
     <Route  exact path='/health' element={ <News handleprogress={handleprogress} pageSize="6" page=""  key="health" category="health" /> }/>
     <Route  exact path='/science' element={ <News handleprogress={handleprogress} pageSize="6" page="" key ="science"category="science" /> }/>
     <Route  exact path='/sports' element={ <News handleprogress={handleprogress} pageSize="6" page="" key="sports" category="sports" /> }/>
     
     

     </Routes>
    <Footer />
     </Router>
    </div>
  );
}

export default App;
