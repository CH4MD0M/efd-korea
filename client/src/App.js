import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import MainContents from "./components/Main/MainContents";

function App() {
    return (
        <div className="app">
            {/* Admin Header */}
            <Header />
            {/* Header Navigation */}
            <Navigation />
            {/* Image Slider */}
            <ImageSlider />
            {/* Main Contents */}
            <MainContents />
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
