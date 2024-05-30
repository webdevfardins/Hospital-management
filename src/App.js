

import AddPatient from './Components/AddPatient';
import DateAndLocation from './Components/DateAndLocation';
import Footer from './Components/Footer/Footer';
import ICD_Favorites from './Components/ICD_Favorites';
import Navbar from './Components/Navbar/Navbar';
import Patients from './Components/Patients';
import SignUp from './Components/SignUp/SignUp';
import Signin from './Components/SignIn/Signin';
import Home from './Components/home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    
      <Routes>
       
        <Route path="/signin" element={ <Signin/>}/>
        <Route path="/signup" element={<SignUp/>} />
   
    </Routes>
    
    
    </div>
  );
}

export default App;
