import Image from "next/image";
export default function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between py-24 px-8 mt-16">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Salut 👋, je suis Jeanne</h1>
        <p className="text-gray-600 mb-6">
          Développeuse passionnée par la technologie et la créativité. Voici mon univers !
        </p>
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Voir mes projets
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image src="/images/profil.jpg" alt="profil" width={200} height={200} className="rounded-full shadow-lg" />
      </div>
    </section>
  );
}
