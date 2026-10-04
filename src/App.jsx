import Profile from "./components/Profile";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="relative overflow-hidden bg-[#080808] text-white">
      {/* Global subtle background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[250px] h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[130px]" />

        <div className="absolute right-[-180px] top-[80px] h-[500px] w-[500px] rounded-full bg-white/[0.018] blur-[150px]" />
      </div>

      <Profile />
      <About />
      <Works />
      <Contact />
    </main>
  );
}

export default App;