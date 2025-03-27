import './styles.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import GallerySection from './components/sections/GallerySection';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
function App() {
  return (
    <>
      <Header />
      <div className='relative'>
        <ScrollToTopButton />

        <GallerySection />
      </div>

      <Footer />
    </>
  );
}

export default App;
