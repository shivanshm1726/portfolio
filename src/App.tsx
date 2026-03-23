import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Profile from './components/sections/Profile';
import Expertise from './components/sections/Expertise';
import Contributions from './components/sections/Contributions';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Biography from './components/sections/Biography';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 pb-20">
        <Navbar />

        <main>
          <Profile />
          <Expertise />
          <Contributions />
          <Projects />
          <Certifications />
          <Education />
          <Biography />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
