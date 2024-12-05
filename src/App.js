
import '.';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Home from './Components/Home';
import Form from './Components/Form';



function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path="/forms/:id" element={<Form />} />
        <Route path="/" element={<Home /> } />
      </Routes>
    </Router>
      {/* <BrowserRouter>
      <Routes>
      <Route exact path="/form" element={<FormHeader/>}></Route>
        
      </Routes>
    </BrowserRouter> */}
  
        {/* <Header/> 
        <Template/>
        <Mainbody/> */}
    </div>
  );
}

export default App;
