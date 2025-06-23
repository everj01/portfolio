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

      <footer className="mt-auto w-full bg-white dark:bg-gray-800 py-6">
        <p className="text-center text-gray-600 dark:text-gray-300">
          Ever Montero&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;2025
        </p>
      </footer>
    </div>

      
    </>
  );
}

export default App;
