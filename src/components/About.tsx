export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>

      <p className="max-w-2xl mx-auto text-gray-700 mb-8">
        Je suis une développeuse web passionnée, curieuse et créative.
        J’aime concevoir des interfaces modernes et travailler sur des projets concrets.
        Mon objectif est de devenir une référence dans le développement web et l’innovation numérique.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/images/CV_Jeanne.pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Télécharger mon CV
        </a>

        <a
          href="#projects"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
        >
          Voir mes projets
        </a>
      </div>

    </section>
  );
}
