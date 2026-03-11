import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Profile from './components/sections/Profile';
import Expertise from './components/sections/Expertise';
import Contributions from './components/sections/Contributions';
import Projects from './components/sections/Projects';

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
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
