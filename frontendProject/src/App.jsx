import { About, AboutPage, Careers, Contact, Header, Navbar, Services } from './components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App=()=>{
return (
    <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<>
                        <Header />
                        <About />
                        <Services />
                        <Careers />
                        <Contact />
                    </>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/aboutpage" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App

