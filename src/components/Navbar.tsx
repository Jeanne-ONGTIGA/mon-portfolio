export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">MonPortfolio</h1>
      <ul className="flex gap-6 text-gray-700">
        <li><a href="#hero" className="hover:text-blue-600">Accueil</a></li>
        <li><a href="#about" className="hover:text-blue-600">À propos</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projets</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        <li><a href="/images/CV_Jeanne.pdf" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                CV
            </a>
        </li>
      </ul>
    </nav>
  );
}
