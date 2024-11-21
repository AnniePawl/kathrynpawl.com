
import Header from './Header'
import Home from './Home/Home'
import Projects from './Home/Projects';
// Graphic Design Links
import Shapes from './GraphicDesign/Shapes';
import Patterns from './GraphicDesign/Patterns';
import Typography from './GraphicDesign/Typography';
import Illustrations from './GraphicDesign/Illustrations';
// Case Study Links
import Fins from './CaseStudies/Fins';
import Barko from './CaseStudies/Barko';
import FlowerBar from './CaseStudies/FlowerBar'
import MedSmart from './CaseStudies/MedSmart';
// Product Design 
import Widgets from './ProductDesign/Widgets';
import Thumbs from './ProductDesign/Thumbs';
import MaisFrida from './ProductDesign/MaisFrida';
import PackageDesign from './ProductDesign/PackageDesign';
import Calcumon from './ProductDesign/Calcumon';



import {
 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default function App() {


   
    return (
      
    <Router>
        {/* <Header/> */}
        <Routes>
            <Route path="/projects" element={<Projects/>} />
            <Route exact path="/" element={<Home />} />
            {/* Graphic Design */}
            <Route path="/shapes" element={<Shapes/>} />
            <Route path="/patterns" element={<Patterns/>} />
            <Route path="/typography" element={<Typography/>} />
            <Route path="/illustrations" element={<Illustrations/>} />
            {/* Case Studies */}
            <Route path="/fins" element={<Fins/>}/>
            <Route path="/barko" element={<Barko/>}/>
            <Route path="/flowerbar" element={<FlowerBar/>}/>
            <Route path="/medsmart" element={<MedSmart/>}/>
            {/* Product Design Links */}
            <Route path="/widgets" element={<Widgets/>}/>
            <Route path="/thumbs" element={<Thumbs/>}/>
            <Route path="/calcumon" element={<Calcumon/>}/>
            <Route path="/maisfrida" element={<MaisFrida/>}/>
            <Route path="/packagedesign" element={<PackageDesign/>}/>
        </Routes>
    </Router>
    );
}

