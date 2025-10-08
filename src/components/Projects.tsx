import Image from "next/image";

const projets = [
  { titre: "My vite-project", image: "/images/projet1.JPEG", lien: "https://github.com/Jeanne-ONGTIGA/vite-project" },
  { titre: "Test 00", image: "/images/projet2.JPEG", lien: "https://github.com/Jeanne-ONGTIGA/P0-git-init" },
  { titre: "Test 01", image: "/images/projet3.JPEG", lien: "https://github.com/Jeanne-ONGTIGA/g06-github-eval-01" },
  { titre: "Test 01", image: "/images/projet4.JPEG", lien: "https://github.com/Jeanne-ONGTIGA/-g06-github-eval-02" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Mes Projets</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projets.map((p, i) => (
          <div key={i} className="border rounded-lg shadow p-4">
            <Image src={p.image} alt={p.titre} width={600} height={100} className="rounded-lg" />
            <h3 className="font-semibold mt-4">{p.titre}</h3>
            <a href={p.lien} target="_blank" className="text-blue-600 underline mt-2 inline-block">
              Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

