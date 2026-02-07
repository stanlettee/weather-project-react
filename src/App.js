import './App.css';
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Hero } from "./components/Hero"
// import { Modal } from "./components/Modal"
import { News } from "./components/News"
import { Weather } from "./components/Weather"

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <Hero />
        <Weather />
        <News />
        <Gallery />
      </main> 
      <Footer />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
