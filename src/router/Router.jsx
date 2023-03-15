import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bio from "../pages/Bio";
import Discography from "../pages/Discography"
import Tour from "../pages/Tour";
import Error from "../pages/Error";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/biography' element={<Bio />} />
                <Route exact path='/discography' element={<Discography />} />
                <Route exact path='/tour' element={<Tour />} />
                <Route exact path='*' element={<Error />} />
                <Route exact path='/pageError404'element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router