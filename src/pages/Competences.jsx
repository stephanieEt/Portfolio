const skillsData = [
  {
    src: "./assets/images/HTML.webp",
    alt: "logo de langage de balisage HTML",
    title: "HTML",
  },
  { src: "./assets/images/CSS.webp", alt: "logo des styles CSS", title: "CSS" },
  {
    src: "./assets/images/Javascript.webp",
    alt: "logo du langage Javascript",
    title: "JavaScript",
  },
  {
    src: "./assets/images/React.webp",
    alt: "logo bibliothèque React",
    title: "React",
  },
  {
    src: "./assets/images/SASS.webp",
    alt: "logo préprocesseur pour la gestion des styles",
    title: "SASS",
  },
  {
    src: "./assets/images/Redux.webp",
    alt: "logo du gestionnaire d'état redux",
    title: "Redux",
  },
  {
    src: "./assets/images/GitHub.webp",
    alt: "logo de GitHub, plateforme open source de gestion de versions",
    title: "GitHub",
  },
  {
    src: "./assets/images/Figma.webp",
    alt: "logo de Figma, outil de design graphique",
    title: "Figma",
  },
  {
    src: "./assets/images/seo.webp",
    alt: "logo pour l'optimisation des moteurs de recherche",
    title: "SEO",
  },
];

const Competences = () => {
  return (
    <div className="skills container-page">
      {skillsData.map((skill, index) => (
        <div className="skill-item" key={index}>
          <img src={skill.src} alt={skill.alt} />
          <div className="skill-title">{skill.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Competences;
