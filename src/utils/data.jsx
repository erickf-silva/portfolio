import FrontendIcon from "../assets/frontend-icon.png"
import BackendIcon from "../assets/backend-icon.png"
import ToolsIcon from "../assets/tools-icon.png"
import SoftSkillsIcon from "../assets/soft-skills.png"

import PokedexGif from "../assets/pokedex.gif"
import GithubApiGif from "../assets/github-api.gif"
import InteractiveRatingComponentGif from "../assets/interactive-rating-component.gif"

export const SKILLS = [
    {
        title: "Frontend",
        icon: FrontendIcon,
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3", percentage: "80%" },
            { skill: "JavaScript", percentage: "65%" },
            { skill: "React.js", percentage: "70%" },
        ],
    },
    {
        title: "Backend",
        icon: BackendIcon,
        skills: [
            { skill: "Node.js (Vou aprender)", percentage: "0%" },
            { skill: "Express.js (Vou aprender)", percentage: "0%" },
        ],
    },
    {
        title: "Tools",
        icon: ToolsIcon,
        skills: [
            { skill: "Git & GitHub", percentage: "75%" },
            { skill: "Visual Studio Code", percentage: "80%" },
            { skill: "Figma", percentage: "80%" },
            { skill: "Design Responsivo", percentage: "75%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: SoftSkillsIcon,
        skills: [
            { skill: "Resolução de problemas", percentage: "75%" },
            { skill: "Trabalho em equipe", percentage: "80%" },
            { skill: "Organização", percentage: "80%" },
            { skill: "Atenção aos detalhes", percentage: "70%" },
        ],
    },
];

export const PROJECTS = [
    {
        title: "Pokédex",
        languages: "HTML, JavaScript, React",
        description: "O projeto tem como finalidade testar os aprendizados do módulo de React Avançado, simulando um teste técnico. O projeto inicia com uma listagem inicial de 10 Pokémons, e um botão que ao usuário clicar adiciona mais 10 à lista.",
        image: PokedexGif,
        repository: "https://github.com/erickf-silva/pokedex?tab=readme-ov-file",
        link: "https://pokedex-7ti0g1gg4-ericks-projects-a3de9c6f.vercel.app/"
    },
    {
        title: "GitHub API",
        languages: "HTML, CSS, JavaScript",
        description: "Esse projeto é uma desafio do curso DevQuest. Seu objetivo principal é simular novas solicitações feitas pelo gerente de projeto, que incluem: número de seguidores, últimos eventos do usuário, e informações dos repositórios.",
        image: GithubApiGif,
        repository: "https://github.com/erickf-silva/quest-desafio-api-github",
        link: "https://erickf-silva.github.io/quest-desafio-api-github/"
    },
    {
        title: "Interactive rating component",
        languages: "HTML, CSS, JavaScript",
        description: "Este projeto é uma página de classificação interativa, onde o usuário pode escolher entre 1 e 5. Ao escolher uma classificação ele é redirecionado para uma página de agradecimento.",
        image: InteractiveRatingComponentGif,
        repository: "https://github.com/erickf-silva/interactive-rating-component",
        link: "https://erickf-silva.github.io/interactive-rating-component/"
    }
];