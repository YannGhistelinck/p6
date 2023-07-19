import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import About from '../pages/About';
import Lodgement from '../pages/Lodgement'
import Header from './Header';
import Footer from './Footer';


function Routing(){
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/a_propos" element={<About/>}/>
                <Route path="/logement" element={<Lodgement/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routing