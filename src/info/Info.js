import self from '../img/self.png'
import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import cv from '../img/CVJoaquinMarmol.pdf'

export let colors = ['#ff0000', '#ffff00']

export let color = ['#ff9100']

export const info = {
  firstName: 'Joaquin',
  lastName: 'Marmol',
  initials: 'JM',
  position: 'a Full Stack Developer',
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
      emoji: '👨‍🎓',
      text: 'Professional Developer from Digital House'
    },
    {
      emoji: '📚',
      text: 'student from Conquer Blocks'
    },
    {
      emoji: '📧',
      text: 'joaquinmarmolnecochea@gmail.com'
    }
  ],
  socials: [
    {
      link: 'https://www.instagram.com/joaquin.marmol/',
      icon: 'fa fa-instagram',
      label: 'instagram'
    },
    {
      link: 'https://github.com/JoaquinMarmol',
      icon: 'fa fa-github',
      label: 'github'
    },
    {
      link: 'https://www.linkedin.com/in/joaquin-m%C3%A1rmol-ba6b10240/',
      icon: 'fa fa-linkedin',
      label: 'linkedin'
    },
    {
      link: 'mailto:joaquinmarmolnecochea@gmail.com',
      icon: 'fa fa-envelope',
      label: 'gmail'
    },
    {
      link: cv,
      icon: 'fa fa-download',
      label: 'download'
    }
  ],
  bio: "I'm Joaquín, a Certified Professional Developer from Digital House, actively developing my skills in Blockchain programming at Conquer Blocks. My main objective is to empower companies by staying abreast of emerging technologies and equipping them with web 3 capabilities. By leveraging my expertise in diverse technologies and programming languages for web application development, I aim to create innovative solutions. The incredible transformative power of artificial intelligence excites me, and I'm fully committed to personal growth, continuously seeking opportunities to enhance my skills.",
  skills: {
    proficientWith: [
      'Javascript',
      'React',
      'Java',
      'Git',
      'Github',
      'Bootstrap',
      'HTML',
      'CSS',
      'MySQL'
    ],
    exposedTo: ['Python', 'Solidity', 'Rust']
  },
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
      title: 'M.A.S',
      live: 'https://medioambienteyseguridad.com.ar/',
      source: 'https://github.com/AlvarezBautista/PaginaMas',
      image: mock1
    },
    {
      title: 'Aramaio Tecnologia Informatica',
      live: 'https://aramaio-cursos.ar',
      source: 'https://github.com/JoaquinMarmol/CampusAramaio',
      image: mock2
    },
    {
      title: 'Vintage Cars',
      live: 'http://vintagecar.sytes.net/',
      source:
        'https://gitlab.ctd.academy/ctd/proyecto-integrador-1022/0222-ft-c1/grupo-07',
      image: mock3
    },
    {
      title: 'Crysis Studio',
      live: 'https://crysistudio.tech/',
      source: 'https://github.com/facucarrion/crysis-studio',
      image: mock4
    }
  ]
}
