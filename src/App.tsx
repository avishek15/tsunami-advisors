import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { CONFIG } from "./config/constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AppsPage from "./pages/AppsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <HelmetProvider>
            <GoogleReCaptchaProvider
                reCaptchaKey={CONFIG.RECAPTCHA_SITE_KEY}
                scriptProps={{
                    async: false,
                    defer: false,
                    appendTo: "head",
                    nonce: undefined,
                }}
            >
                <Router>
                    <ScrollToTop />
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
                                <Route
                                    path="/contact"
                                    element={<ContactPage />}
                                />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </GoogleReCaptchaProvider>
        </HelmetProvider>
    );
}

export default App;
