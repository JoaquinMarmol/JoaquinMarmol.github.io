import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import cv from "../img/CVJoaquinMarmol.pdf"



export let colors = ["#ff0000", "#ffff00"];

export let color = ["#ff9100"]

export const info = {
    firstName: "Joaquin",
    lastName: "Marmol",
    initials: "JM", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: color,
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Argentina'
        },
        {
            emoji: "👨‍🎓",
            text: "Professional Developer from Digital House"
        },
        {
            emoji: "📚",
            text: "student from Conquer Blocks"
        },
        {
            emoji: "📧",
            text: "joaquinmarmolnecochea@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/joaquin.marmol/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/JoaquinMarmol",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/joaquin-m%C3%A1rmol-ba6b10240/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:joaquinmarmolnecochea@gmail.com",
            icon: "fa fa-envelope",
            label: 'gmail'
        },
        {
            link: cv,
            icon: "fa fa-download",
            label: 'download'
        }


    ],
    bio: "I'm Joaquín, a Certified Professional Developer from Digital House expanding my skills in Blockchain programming at Conquer Blocks. I'm passionate about learning and staying up-to-date with the latest software development trends. My goal is to help companies create innovative solutions using my experience in developing web and mobile applications with various technologies and programming languages. I'm excited about the potential of artificial intelligence to change our world, and I'm a responsible and committed individual who is always seeking opportunities to improve my skills",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Java', 'Git', 'Github', 'Bootstrap', 'HTML', 'CSS','MySQL' ],
            exposedTo: [ 'Python', 'Solidity', 'Rust' ]
        }
    ,
    hobbies: [
        {
            label: 'play videogames',
            emoji: '🎮'
        },
        {
            label: 'football',
            emoji: '⚽'
        },
        {
            label: 'padel',
            emoji: '🎾'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'coding',
            emoji: '💻'
        }

    ],
    portfolio: [ 
        {
            title: "M.A.S",
            live: "https://medioambienteyseguridad.com.ar/", 
            source: "https://github.com/AlvarezBautista/PaginaMas", 
            image: mock1
        },
        {
            title: "Aramaio Tecnologia Informatica",
            live: "https://aramaio-cursos.com/",
            source: "https://github.com/JoaquinMarmol/CampusAramaio",
            image: mock2
        },
        {
            title: "Vintage Cars",
            live: "http://vintagecar.sytes.net/",
            source: "https://gitlab.ctd.academy/ctd/proyecto-integrador-1022/0222-ft-c1/grupo-07",
            image: mock3
        },
    ]
}