import AboutMe from "./pages/AboutMe";
import Navbar from "./components/Navbar";
import ProjectsMe from "./pages/ProjectsMe";
import SkillsMe from "./pages/SkillsMe";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white dark:bg-gray-900 dark:text-white/90">
        <section id="aboutme"><AboutMe /></section>
        <section id="projectsme"><ProjectsMe /></section>
        <section id="skillsme"><SkillsMe /></section>
        <section id="contactme"><ContactMe /></section>
        
      </main>

      <footer className="mt-auto w-full bg-gray-100 dark:bg-gray-800 py-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 tracking-wide">
          © 2025 · Hecho con React/Vite por <span className="font-semibold text-gray-800 dark:text-white">Ever Montero</span>
        </p>
      </footer>
    </div>
    </>
  );
}

export default App;
