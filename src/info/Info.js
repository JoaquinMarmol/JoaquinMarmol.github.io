import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import cv from "../img/CVJoaquinMarmol.pdf"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Joaquin",
    lastName: "Marmol",
    initials: "JM", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
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
            text: "certified Professional Developer from Digital House"
        },
        {
            emoji: "📚",
            text: "actually Student from Conquer Blocks"
        },
        {
            emoji: "📧",
            text: "joaquinmarmolnecochea@gmail.com"
        }
    ],
    socials: [
        {
        link: "https://gitlab.ctd.academy/JoaquinMarmol",
        icon: 'fa fa-gitlab',
        label: 'instagram'
        },
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
            link: "joaquinmarmolnecoceha@gmail.com",
            icon: "fa fa-envelope",
            label: 'twitter'
        },
        {
            link: cv,
            icon: "fa fa-download",
            label: 'download'
        }


    ],
    bio: "Hello! I'm Joaquin. I'm a certified Professional Developer from Digital House and actually a student from Conquer Blocks. I enjoy to spend time with my family and friends, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Java', 'Git', 'Github', 'Bootstrap', 'Html', 'Css'],
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
            title: "Project 1",
            live: "https://medioambienteyseguridad.com.ar/", 
            source: "https://github.com/AlvarezBautista/PaginaMas", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "http://vintagecar.sytes.net/",
            source: "https://gitlab.ctd.academy/ctd/proyecto-integrador-1022/0222-ft-c1/grupo-07",
            image: mock2
        },
    ]
}