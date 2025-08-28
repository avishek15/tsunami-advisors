import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AppsPage from "./pages/AppsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className="min-h-screen bg-white">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/services"
                                element={<ServicesPage />}
                            />
                            <Route path="/apps" element={<AppsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
