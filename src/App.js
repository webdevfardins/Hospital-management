

import AddPatient from './Components/AddPatient';
import DateAndLocation from './Components/DateAndLocation';
import Footer from './Components/Footer/Footer';
import ICD_Favorites from './Components/ICD_Favorites';
import Navbar from './Components/Navbar/Navbar';
import Patients from './Components/Patients';
import Home from './Components/home/Home';

function App() {
  return (
    <div className="App">
    {/* <AddPatient/>
    <DateAndLocation/> */}
    {/* <ICD_Favorites/> */}
    {/* <Patients/> */}
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
