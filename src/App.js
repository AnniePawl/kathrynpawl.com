import Header from './Header'
import Home from './Home/Home'
// Graphic Design Links
import Shapes from './GraphicDesign/Shapes';
import Patterns from './GraphicDesign/Patterns';
import Typography from './GraphicDesign/Typography';
import Illustrations from './GraphicDesign/Illustrations';


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";



export default function App() {
    return (
      
    <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shapes" element={<Shapes/>} />
            <Route path="/patterns" element={<Patterns/>} />
            <Route path="/typography" element={<Typography/>} />
            <Route path="/illustrations" element={<Illustrations/>} />
        </Routes>
    </Router>
    );
}

