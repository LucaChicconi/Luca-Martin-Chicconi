/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  MoveRight, 
  Code, 
  ArrowUpRight, 
  Palette, 
  Terminal, 
  BarChart3, 
  Settings, 
  UserCircle, 
  Blocks, 
  Mail, 
  Send, 
  Shield, 
  Flower, 
  Flower2,
  Menu
} from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "proyectos", "herramientas", "contacto"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm shadow-violet-900/5 transition-colors duration-500">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
      <span className="text-2xl font-bold font-noto-serif text-violet-800">Luca Martín Chicconi</span>
      <div className="hidden md:flex gap-8 items-center">
        <a className={`font-semibold font-noto-serif italic text-lg tracking-tight transition-all duration-300 ${isActive("inicio") ? "text-violet-900 border-b-2 border-green-200 pb-1" : "text-slate-600 hover:text-violet-600 hover:bg-violet-50/50 rounded-lg px-3 py-1"}`} href="#inicio">Inicio</a>
        <a className={`font-semibold font-noto-serif italic text-lg tracking-tight transition-all duration-300 ${isActive("proyectos") ? "text-violet-900 border-b-2 border-green-200 pb-1" : "text-slate-600 hover:text-violet-600 hover:bg-violet-50/50 rounded-lg px-3 py-1"}`} href="#proyectos">Proyectos</a>
        <a className={`font-semibold font-noto-serif italic text-lg tracking-tight transition-all duration-300 ${isActive("herramientas") ? "text-violet-900 border-b-2 border-green-200 pb-1" : "text-slate-600 hover:text-violet-600 hover:bg-violet-50/50 rounded-lg px-3 py-1"}`} href="#herramientas">Herramientas</a>
        <a className={`font-semibold font-noto-serif italic text-lg tracking-tight transition-all duration-300 ${isActive("contacto") ? "text-violet-900 border-b-2 border-green-200 pb-1" : "text-slate-600 hover:text-violet-600 hover:bg-violet-50/50 rounded-lg px-3 py-1"}`} href="#contacto">Contacto</a>
      </div>
      <button className="md:hidden text-primary">
        <Menu size={24} />
      </button>
    </div>
  </nav>
  );
};

const Hero = () => (
  <section className="relative px-8 py-20 lg:py-32 overflow-hidden" id="inicio">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-6 z-10"
      >
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tight mb-6 italic">
          Hola, soy <span className="text-primary">Luca</span>.
        </h1>
        <p className="font-headline text-2xl md:text-3xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
          Desarrollador full stack, construyo proyectos eficientes y escalables.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20" href="#proyectos">
            Explorar Archivo
            <ArrowRight size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-6 relative"
      >
        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-20 transform rotate-2">
          <img 
            alt="Luca's Profile Photo" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uj58txL4mHyrOiyg2oDqhw-uLvP0vrqmpMHHF27H3z15fRC9UaMMCzanz2QLBSA0nxJv8Q_LUUdalCM82yXxgrW1P-qeP-nNT8M6uSZyNjsV5-axymp4H73HKH-kiEiCtmiPfwNcNfEJ9mAzYmAW16O4w5e4S7CFUWVdG64sqNM9tOsCR33ikwGeEwdIRnsr0T3NMJjWiQlWv9ZQ668EbuK_eDZ42V0vBg5FogaelL2kGCFH6WnmBvI-nc19ACUYkccpSu0tAN0OFU" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-primary-container rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
        
        <div className="absolute bottom-12 -left-8 z-30 bg-surface-container-lowest p-6 rounded-xl shadow-xl flex items-center gap-4 border border-outline-variant/10">
          <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-container">
            <Flower2 size={24} />
          </div>
          <div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-32 px-8 max-w-7xl mx-auto" id="proyectos">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
      <div className="max-w-xl">
        <h2 className="font-headline text-4xl mb-4">Proyectos Destacados</h2>
        <p className="text-on-surface-variant leading-relaxed">Una selección de proyectos que fui recolectando a lo largo de mi aprendizaje.</p>
      </div>
      <a className="text-primary font-bold flex items-center gap-2 group" href="#">
        Ver Galería Completa 
        <MoveRight className="transition-transform group-hover:translate-x-1" size={24} />
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Project Card 1: uColorPalette */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <a className="block" href="https://ucolorpalette.netlify.app/" target="_blank">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-surface-container-high transition-transform duration-500 group-hover:-translate-y-2">
            <img 
              alt="uColorPalette" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uhQYN5w5kzx7lle9XjZpPK63oik6f8lny7aAzybxHfkiL6pP9qZnv6CUzVZW5x72CpOHwcRTRT_Q9h1qpjYNzjJjss50srUWTgmEf81fSZGRXD4GGnPAOqS-mrf6gTt2stEHvW3hDiun1uI63icuErtg0Eee45pvxb9XS5UGZWIjdMF3Cd7Ceus4z1dkva3bruoKe9BuRlR5zXldq9AVB9g-midCeIqCngVbi75ISO36xW2iwukDDGvT0zvPBPpy75uzTFeRsSlNg0" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </a>
        <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 block">Herramienta de Diseño</span>
        <a className="block hover:text-primary transition-colors" href="https://ucolorpalette.netlify.app/" target="_blank">
          <h3 className="font-headline text-2xl mb-2">uColorPalette</h3>
        </a>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          Un generador de paletas de colores minimalista con diseño responsive. Dado un color en formato RGB, HSL, o Hexadecimal devuelve una paleta de colores monocromática, análoga, complementaria, de tríada y más. Copia el código hexadecimal en un Click.
        </p>
        <a className="mt-4 flex items-center gap-2 text-sm font-bold text-primary hover:opacity-80 transition-all group/link" href="https://github.com/LucaChicconi/Color-Palette" target="_blank">
          <Code size={18} />
          Ver en GitHub
          <ArrowUpRight className="transition-transform group-hover/link:translate-x-1" size={12} />
        </a>
      </motion.div>

      {/* Project Card 2: Oasis Violeta */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="group mt-12 md:mt-0 lg:mt-24"
      >
        <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-surface-container-high transition-transform duration-500 group-hover:-translate-y-2">
          <img 
            alt="Oasis Violeta" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3f3rFQiItAuHCPJePUcCW9pn3speH5EHxrN2QPrZ9YnnC1kQfASHMCoaZh2cXjrQ4Q_oDhwVNbXdCUGSmTDFLovNawJ2gJ9TZ3eT5T7JEv0AVd96kS46tHkOdyjaY_n3oZVgtenPL13T7mS1azQkmiBKF6NGscXYFXHR9HpqFkPaD7qXG6RDUufqdILcpH6C1a7mnznwWT_jneFp7SygABW_UykrZH9516gLj7C3mJ4VrKPT5A1rNH3R5PhRQ97GOpyrumN0qRJr8" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 block">Identidad Visual</span>
        <h3 className="font-headline text-2xl mb-2">Oasis Violeta</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">Sistema de marca para un santuario de meditación y bienestar holístico.</p>
      </motion.div>

      {/* Project Card 3: Sinfonía Verde */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="group"
      >
        <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-surface-container-high transition-transform duration-500 group-hover:-translate-y-2">
          <img 
            alt="Sinfonía Verde" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnqDRz9UGCIYpifoNymeSc3Xn1SgUw-VCLu5KVZTPvIy9I4Ij_Hsxnc8OHwW4rDyG3ZrDLBpxryShSeWLRfhvVFr9_yY7BDh3xmHz4A1eLwesGdLTkldPdXqXpxqjWrWHLxOE_5opSbdsSdLIKilA11Rw9FYBNICGn0YGECA4lat9xvKncAoX8YDBQXdT-KAdiEDwcXfBUAkqSM69nOAAhQVdfR1rQR8lMcYFyw9StItRxGy_litLGFRdLdQ4vLoeIvhmWYIK4kPpa" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 block">Desarrollo Web</span>
        <h3 className="font-headline text-2xl mb-2">Sinfonía Verde</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">Exploración de interfaces fluidas inspiradas en el crecimiento de las enredaderas.</p>
      </motion.div>
    </div>
  </section>
);

const Tools = () => (
  <section className="py-32 px-8 overflow-hidden bg-surface-container-low/30" id="herramientas">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="font-headline text-4xl md:text-6xl text-on-surface italic">Mis herramientas</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Tech Column 1: Diseño */}
        <div className="relative group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Palette className="text-secondary" size={24} />
            </div>
            <h3 className="font-headline text-2xl">Diseño</h3>
          </div>
          <div className="flex flex-wrap gap-2 relative z-10">
            {["Figma", "Adobe Illustrator", "Photoshop", "Lightroom", "Patrones de Diseño"].map(tool => (
              <span key={tool} className="px-4 py-2 rounded-xl bg-secondary-container/30 text-on-secondary-container border border-secondary/10 hover:bg-secondary/10 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
        {/* Tech Column 2: Frontend */}
        <div className="relative group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Terminal className="text-primary" size={24} />
            </div>
            <h3 className="font-headline text-2xl">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2 relative z-10">
            {["JavaScript", "HTML", "CSS", "Tailwind", "React"].map(tool => (
              <span key={tool} className="px-4 py-2 rounded-xl bg-primary-container/30 text-on-primary-container border border-primary/10 hover:bg-primary/10 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
        {/* Tech Column 3: Backend */}
        <div className="relative group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center">
              <Code className="text-tertiary" size={24} />
            </div>
            <h3 className="font-headline text-2xl">Backend & Programación</h3>
          </div>
          <div className="flex flex-wrap gap-2 relative z-10">
            {["Node.js", "MongoDB", "Python", "Django", "C++", "Java"].map(tool => (
              <span key={tool} className="px-4 py-2 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed-variant border border-tertiary/10 hover:bg-tertiary/10 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
        {/* Tech Column 4: Data */}
        <div className="relative group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <BarChart3 className="text-secondary" size={24} />
            </div>
            <h3 className="font-headline text-2xl">Análisis de Datos</h3>
          </div>
          <div className="flex flex-wrap gap-2 relative z-10">
            {["Pandas", "Seaborn", "MatPlotLib"].map(tool => (
              <span key={tool} className="px-4 py-2 rounded-xl bg-secondary-container/30 text-on-secondary-container border border-secondary/10 hover:bg-secondary/10 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
        {/* Tech Column 5: Systems */}
        <div className="relative group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Settings className="text-primary" size={24} />
            </div>
            <h3 className="font-headline text-2xl">Sistemas y Control</h3>
          </div>
          <div className="flex flex-wrap gap-2 relative z-10">
            {["Git (GitHub, GitLab)", "Windows", "Linux"].map(tool => (
              <span key={tool} className="px-4 py-2 rounded-xl bg-primary-container/30 text-on-primary-container border border-primary/10 hover:bg-primary/10 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 px-8 relative overflow-hidden" id="contacto">
    <div className="max-w-5xl mx-auto bg-primary text-on-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 organic-shape-1 -mr-20 -mt-20 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 organic-shape-2 -ml-20 -mb-20 blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl italic mb-6">Contacto</h2>
          <p className="text-on-primary/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Estoy disponible para trabajo, proyectos freelance y colaboraciones. No dudes en escribirme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <form className="space-y-4 bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-primary/60 mb-1">Nombre</label>
                <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/30 focus:border-transparent outline-none transition-all" placeholder="Tu nombre" type="text" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-primary/60 mb-1">Email</label>
                <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/30 focus:border-transparent outline-none transition-all" placeholder="hola@ejemplo.com" type="email" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-primary/60 mb-1">Mensaje</label>
              <textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/30 focus:border-transparent outline-none resize-none transition-all" placeholder="Cuéntame sobre tu proyecto..." rows={3}></textarea>
            </div>
            <button className="w-full bg-white text-primary font-bold py-4 rounded-full hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2" type="submit">
              Comenzar Conversación
              <Send size={14} />
            </button>
          </form>

          <div className="flex flex-col gap-6 lg:justify-center h-full">
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-on-primary/50">Redes y Canales</h4>
              <div className="flex flex-col gap-4">
                <a className="flex items-center gap-4 group hover:translate-x-2 transition-transform" href="https://www.linkedin.com/in/luca-chicconi/" target="_blank">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <UserCircle size={24} />
                  </div>
                  <div>
                    <span className="block text-xs text-on-primary/60 uppercase font-bold tracking-widest">LinkedIn</span>
                    <span className="text-lg">Conectar profesionalmente</span>
                  </div>
                </a>
                <a className="flex items-center gap-4 group hover:translate-x-2 transition-transform" href="https://github.com/LucaChicconi" target="_blank">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <Blocks size={24} />
                  </div>
                  <div>
                    <span className="block text-xs text-on-primary/60 uppercase font-bold tracking-widest">GitHub</span>
                    <span className="text-lg">Explorar repositorios</span>
                  </div>
                </a>
                <a className="flex items-center gap-4 group hover:translate-x-2 transition-transform" href="mailto:lucachicconi1@gmail.com">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-xs text-on-primary/60 uppercase font-bold tracking-widest">Email</span>
                    <span className="text-lg">lucachicconi1@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full relative overflow-hidden bg-emerald-50/30">
    <div className="flex flex-col items-center gap-6 py-12 px-4 text-center relative z-10">
      <div className="flex gap-10 mb-4">
        <a className="text-emerald-700/70 hover:text-violet-600 transition-all duration-500 transform hover:translate-y-[-2px]" href="#">
          <Shield size={24} />
        </a>
        <a className="text-emerald-700/70 hover:text-violet-600 transition-all duration-500 transform hover:translate-y-[-2px]" href="#">
          <Flower size={24} />
        </a>
        <a className="text-emerald-700/70 hover:text-violet-600 transition-all duration-500 transform hover:translate-y-[-2px]" href="#">
          <Flower2 size={24} />
        </a>
      </div>
      <p className="font-manrope text-sm tracking-wide uppercase text-emerald-800">
        © 2024 The Botanical Atelier. Designed with Harmony.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Projects />
        <Tools />
        <Contact />
        <section className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-secondary-container/20 to-emerald-50/30"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <Flower size={320} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
