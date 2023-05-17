import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bio from "../pages/Bio";
import Discography from "../pages/Discography"
import Tour from "../pages/Tour";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";


function Router() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/biography' element={<Bio />} />
                <Route exact path='/discography' element={<Discography />} />
                <Route exact path='/tour' element={<Tour />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='*' element={<Error />} />
                <Route exact path='/pageError404'element={<Error />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default Router