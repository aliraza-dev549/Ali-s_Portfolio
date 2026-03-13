import { useEffect, useMemo, useState } from 'react'
import projectOne from '../../assets/project1.PNG'
import projectTwo from '../../assets/project-2.svg'
import projectThree from '../../assets/project-3.svg'
import homeImage from '../../assets/home.png'
import './Projects.css'

const projectGallery = [projectOne, projectTwo, projectThree, homeImage]

const subjectImageSets = {
  ecommerce: [
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  ],
  crm: [
    'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  ],
  delivery: [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80',
  ],
  ui: [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80',
  ],
  monitoring: [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
  ],
  realEstate: [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
  ],
  marketing: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80',
  ],
  healthcare: [
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  ],
  travel: [
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80',
  ],
  education: [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80',
  ],
  fitness: [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=80',
  ],
  grocery: [
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1601599561213-832382fd07ba?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1600&q=80',
  ],
  finance: [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80',
  ],
  productivity: [
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  ],
  messaging: [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1600&q=80',
  ],
  openSource: [
    'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80',
  ],
}

const pickSubjectKey = (topic) => {
  const value = topic.toLowerCase()

  if (value.includes('real estate') || value.includes('property')) return 'realEstate'
  if (value.includes('crm') || value.includes('sales pipeline') || value.includes('support')) return 'crm'
  if (value.includes('ecommerce') || value.includes('checkout') || value.includes('store')) return 'ecommerce'
  if (value.includes('delivery') || value.includes('logistics') || value.includes('dispatch')) return 'delivery'
  if (value.includes('design system') || value.includes('storybook') || value.includes('component')) return 'ui'
  if (value.includes('monitoring') || value.includes('devops') || value.includes('cloud operations')) return 'monitoring'
  if (value.includes('marketing') || value.includes('landing') || value.includes('agency')) return 'marketing'
  if (value.includes('medical') || value.includes('healthcare') || value.includes('doctor')) return 'healthcare'
  if (value.includes('travel') || value.includes('tourism') || value.includes('itinerary')) return 'travel'
  if (value.includes('education') || value.includes('learning') || value.includes('student')) return 'education'
  if (value.includes('fitness') || value.includes('workout')) return 'fitness'
  if (value.includes('grocery') || value.includes('shopping cart')) return 'grocery'
  if (value.includes('finance') || value.includes('wallet') || value.includes('expense')) return 'finance'
  if (value.includes('chat') || value.includes('message') || value.includes('whatsapp')) return 'messaging'
  if (value.includes('project management') || value.includes('team collaboration') || value.includes('kanban')) return 'productivity'
  if (value.includes('open source') || value.includes('developer') || value.includes('documentation') || value.includes('api testing')) {
    return 'openSource'
  }

  return 'ecommerce'
}

const imageFromTopic = (topic, seed) => {
  const subjectKey = pickSubjectKey(topic)
  const subjectImages = subjectImageSets[subjectKey]
  return subjectImages[seed % subjectImages.length]
}

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Projects' },
  { id: 'app', label: 'App Projects' },
]

const projectsByCategory = {
  all: [
    {
      title: 'PlotZo - Real Estate Booking Web Application',
      description:
        'Developed a real estate booking platform where users can discover properties, compare listings, and submit booking requests with confidence. Built advanced filtering, property detail pages, and inquiry workflows to improve lead quality and conversion. Added responsive UI patterns and backend-ready structure to support brokers, agents, and growing listing data.',
      tags: ['React', 'Node.js', 'MongoDB'],
      images: [
        imageFromTopic('real estate website interface', 211),
        imageFromTopic('property listing dashboard', 212),
        imageFromTopic('map search web application', 213),
      ],
    },
    {
      title: 'AliXo - E-Commerce Store',
      description:
        'Built a complete e-commerce storefront with product browsing, category organization, and cart-to-checkout user journeys. Implemented reusable product components, fast UI interactions, and scalable page structure for future growth. Focused on clean shopping experience, visual clarity, and conversion-driven interaction flow across devices.',
      tags: ['React', 'Express', 'MongoDB'],
      images: [
        imageFromTopic('ecommerce dashboard ui', 221),
        imageFromTopic('online store admin panel', 222),
        imageFromTopic('payment checkout web app', 223),
      ],
    },
    {
      title: 'Bunyad - Food Waste Control & Reduction System',
      description:
        'Created a food waste reduction system to monitor surplus inventory, classify edible leftovers, and route redistribution decisions quickly. Designed data views that help organizations reduce waste and improve sustainability planning. Added dashboard-first workflows to support tracking, reporting, and responsible food management operations.',
      tags: ['React', 'Node.js', 'MongoDB'],
      images: [
        imageFromTopic('grocery food waste reduction dashboard', 231),
        imageFromTopic('food inventory management app', 232),
        imageFromTopic('supply chain sustainability analytics', 233),
      ],
    },
    {
      title: 'Edu-Learn - Learning Management System (LMS)',
      description:
        'Developed an LMS platform that organizes courses, lessons, and student progress in a clear and structured interface. Implemented content delivery layouts, enrollment workflows, and dashboard views for learners and instructors. Designed the system for easy scaling, modern UI consistency, and practical academic management needs.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      images: [
        imageFromTopic('learning management ui', 241),
        imageFromTopic('education analytics dashboard', 242),
        imageFromTopic('student performance software', 243),
      ],
    },
    {
      title: 'Task-Flow - Task Management System',
      description:
        'Engineered a task management web system for teams to create tasks, assign ownership, and track status across stages. Added collaboration-focused structures like priorities, due-date context, and workflow visibility. Optimized for productivity, project clarity, and quick decision-making in day-to-day operations.',
      tags: ['React', 'Node.js', 'Socket.io'],
      images: [
        imageFromTopic('project management app dashboard', 251),
        imageFromTopic('team collaboration software', 252),
        imageFromTopic('kanban productivity workflow', 253),
      ],
    },
    {
      title: 'ORIC Department Management System - Air University',
      description:
        'Built an internal department management system tailored for ORIC operations at Air University. Implemented modules for record organization, request tracking, and process visibility across department activities. Focused on secure data handling, structured workflows, and administrative efficiency for institutional use cases.',
      tags: ['React', 'Express', 'MySQL'],
      images: [
        imageFromTopic('education department management dashboard', 261),
        imageFromTopic('university administration portal', 262),
        imageFromTopic('institution workflow software', 263),
      ],
    },
    {
      title: 'Ali Raza Portfolio - Web Showcase',
      description:
        'Designed and developed a personal portfolio website to present services, skills, projects, and contact workflows in a polished one-page experience. Crafted a strong home hero section with performance-focused layout, smooth animations, and mobile-first responsiveness. Structured the project showcase to highlight real client-style work with clear technology storytelling.',
      tags: ['React', 'Vite', 'CSS3'],
      images: ['/Capture.PNG', '/Capture1.PNG', '/Capture2.PNG'],
    },
    {
      title: 'Chit-Chat WhatsApp Clone',
      description:
        'Developed a real-time messaging app inspired by WhatsApp with one-to-one chat, conversation history, and media-ready message flow. Implemented secure authentication, online presence indicators, and responsive chat UI optimized for mobile devices. Added socket-based live updates so users receive messages instantly without page refresh delays.',
      tags: ['React Native', 'Socket.io', 'Firebase Auth', 'Expo'],
      images: [
        imageFromTopic('chat app mobile interface', 311),
        imageFromTopic('messaging application smartphone', 312),
        imageFromTopic('whatsapp style mobile chat', 313),
      ],
    },
    {
      title: 'Smart Expense Manager',
      description:
        'Built a personal finance mobile app to track income, expenses, and category-based spending habits in one place. Added monthly summaries, budget goals, and visual insights that help users understand where money is going. Implemented lightweight data handling and clean dashboards for daily use and long-term financial planning.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Charts'],
      images: [
        imageFromTopic('expense tracking app ui', 321),
        imageFromTopic('finance app dashboard mobile', 322),
        imageFromTopic('wallet analytics mobile app', 323),
      ],
    },
    {
      title: 'FitTrack Pro',
      description:
        'Created an advanced fitness companion app featuring workout plans, daily activity tracking, and progress visualization. Built personalized routines based on user goals and included reminders to improve consistency and adherence. Designed the app to support a smooth coaching experience with clear performance metrics and habit progress.',
      tags: ['React Native', 'Redux Toolkit', 'Node.js API', 'Figma'],
      images: [
        imageFromTopic('fitness app mobile interface', 331),
        imageFromTopic('workout tracking app ui', 332),
        imageFromTopic('health mobile dashboard', 333),
      ],
    },
    {
      title: 'MedixCare Appointment App',
      description:
        'Developed a healthcare booking mobile app where patients can find doctors, schedule appointments, and receive reminders. Added profile-based booking flows, appointment status updates, and clean patient-friendly navigation. Focused on trust, clarity, and accessibility to make daily healthcare coordination simpler for users.',
      tags: ['Flutter', 'Node.js', 'MongoDB', 'Postman'],
      images: [
        imageFromTopic('medical app mobile interface', 341),
        imageFromTopic('doctor patient app ui', 342),
        imageFromTopic('healthcare mobile dashboard', 343),
      ],
    },
  ],
  web: [
    {
      title: 'PlotZo - Real Estate Booking Web Application',
      description:
        'Developed a real estate booking platform where users can discover properties, compare listings, and submit booking requests with confidence. Built advanced filtering, property detail pages, and inquiry workflows to improve lead quality and conversion. Added responsive UI patterns and backend-ready structure to support brokers, agents, and growing listing data.',
      tags: ['React', 'Node.js', 'MongoDB'],
      images: [
        imageFromTopic('real estate website interface', 211),
        imageFromTopic('property listing dashboard', 212),
        imageFromTopic('map search web application', 213),
      ],
    },
    {
      title: 'AliXo - E-Commerce Store',
      description:
        'Built a complete e-commerce storefront with product browsing, category organization, and cart-to-checkout user journeys. Implemented reusable product components, fast UI interactions, and scalable page structure for future growth. Focused on clean shopping experience, visual clarity, and conversion-driven interaction flow across devices.',
      tags: ['React', 'Express', 'MongoDB'],
      images: [
        imageFromTopic('ecommerce dashboard ui', 221),
        imageFromTopic('online store admin panel', 222),
        imageFromTopic('payment checkout web app', 223),
      ],
    },
    {
      title: 'Bunyad - Food Waste Control & Reduction System',
      description:
        'Created a food waste reduction system to monitor surplus inventory, classify edible leftovers, and route redistribution decisions quickly. Designed data views that help organizations reduce waste and improve sustainability planning. Added dashboard-first workflows to support tracking, reporting, and responsible food management operations.',
      tags: ['React', 'Node.js', 'MongoDB'],
      images: [
        imageFromTopic('grocery food waste reduction dashboard', 231),
        imageFromTopic('food inventory management app', 232),
        imageFromTopic('supply chain sustainability analytics', 233),
      ],
    },
    {
      title: 'Edu-Learn - Learning Management System (LMS)',
      description:
        'Developed an LMS platform that organizes courses, lessons, and student progress in a clear and structured interface. Implemented content delivery layouts, enrollment workflows, and dashboard views for learners and instructors. Designed the system for easy scaling, modern UI consistency, and practical academic management needs.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      images: [
        imageFromTopic('learning management ui', 241),
        imageFromTopic('education analytics dashboard', 242),
        imageFromTopic('student performance software', 243),
      ],
    },
    {
      title: 'Task-Flow - Task Management System',
      description:
        'Engineered a task management web system for teams to create tasks, assign ownership, and track status across stages. Added collaboration-focused structures like priorities, due-date context, and workflow visibility. Optimized for productivity, project clarity, and quick decision-making in day-to-day operations.',
      tags: ['React', 'Node.js', 'Socket.io'],
      images: [
        imageFromTopic('project management app dashboard', 251),
        imageFromTopic('team collaboration software', 252),
        imageFromTopic('kanban productivity workflow', 253),
      ],
    },
    {
      title: 'ORIC Department Management System - Air University',
      description:
        'Built an internal department management system tailored for ORIC operations at Air University. Implemented modules for record organization, request tracking, and process visibility across department activities. Focused on secure data handling, structured workflows, and administrative efficiency for institutional use cases.',
      tags: ['React', 'Express', 'MySQL'],
      images: [
        imageFromTopic('education department management dashboard', 261),
        imageFromTopic('university administration portal', 262),
        imageFromTopic('institution workflow software', 263),
      ],
    },
    {
      title: 'Ali Raza Portfolio - Web Showcase',
      description:
        'Designed and developed a personal portfolio website to present services, skills, projects, and contact workflows in a polished one-page experience. Crafted a strong home hero section with performance-focused layout, smooth animations, and mobile-first responsiveness. Structured the project showcase to highlight real client-style work with clear technology storytelling.',
      tags: ['React', 'Vite', 'CSS3'],
      images: ['/Capture.PNG', '/Capture1.PNG', '/Capture2.PNG'],
    },
  ],
  app: [
    {
      title: 'Chit-Chat WhatsApp Clone',
      description:
        'Developed a real-time messaging app inspired by WhatsApp with one-to-one chat, conversation history, and media-ready message flow. Implemented secure authentication, online presence indicators, and responsive chat UI optimized for mobile devices. Added socket-based live updates so users receive messages instantly without page refresh delays.',
      tags: ['React Native', 'Socket.io', 'Firebase Auth', 'Expo'],
      images: [
        imageFromTopic('chat app mobile interface', 311),
        imageFromTopic('messaging application smartphone', 312),
        imageFromTopic('whatsapp style mobile chat', 313),
      ],
    },
    {
      title: 'Smart Expense Manager',
      description:
        'Built a personal finance mobile app to track income, expenses, and category-based spending habits in one place. Added monthly summaries, budget goals, and visual insights that help users understand where money is going. Implemented lightweight data handling and clean dashboards for daily use and long-term financial planning.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Charts'],
      images: [
        imageFromTopic('expense tracking app ui', 321),
        imageFromTopic('finance app dashboard mobile', 322),
        imageFromTopic('wallet analytics mobile app', 323),
      ],
    },
    {
      title: 'FitTrack Pro',
      description:
        'Created an advanced fitness companion app featuring workout plans, daily activity tracking, and progress visualization. Built personalized routines based on user goals and included reminders to improve consistency and adherence. Designed the app to support a smooth coaching experience with clear performance metrics and habit progress.',
      tags: ['React Native', 'Redux Toolkit', 'Node.js API', 'Figma'],
      images: [
        imageFromTopic('fitness app mobile interface', 331),
        imageFromTopic('workout tracking app ui', 332),
        imageFromTopic('health mobile dashboard', 333),
      ],
    },
    {
      title: 'MedixCare Appointment App',
      description:
        'Developed a healthcare booking mobile app where patients can find doctors, schedule appointments, and receive reminders. Added profile-based booking flows, appointment status updates, and clean patient-friendly navigation. Focused on trust, clarity, and accessibility to make daily healthcare coordination simpler for users.',
      tags: ['Flutter', 'Node.js', 'MongoDB', 'Postman'],
      images: [
        imageFromTopic('medical app mobile interface', 341),
        imageFromTopic('doctor patient app ui', 342),
        imageFromTopic('healthcare mobile dashboard', 343),
      ],
    },
  ],
}

function ProjectCard({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % project.images.length)
    }, 1500)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [project.images.length])

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <article className="projects__card">
      <div className="projects__media">
        <img
          src={project.images[activeImageIndex]}
          alt={`${project.title} preview ${activeImageIndex + 1}`}
          className="projects__image"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src =
              projectGallery[(activeImageIndex + project.title.length) % projectGallery.length]
          }}
        />
        <button type="button" className="projects__arrow projects__arrow--left" onClick={handlePrev} aria-label="Previous image">
          ‹
        </button>
        <button type="button" className="projects__arrow projects__arrow--right" onClick={handleNext} aria-label="Next image">
          ›
        </button>
        <div className="projects__dots" aria-hidden="true">
          {project.images.map((_, index) => (
            <button
              type="button"
              key={`${project.title}-dot-${index}`}
              className={index === activeImageIndex ? 'projects__dot projects__dot--active' : 'projects__dot'}
              onClick={() => setActiveImageIndex(index)}
              aria-label={`Show image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="projects__content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="projects__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const [activeTab, setActiveTab] = useState('web')

  const activeProjects = useMemo(() => projectsByCategory[activeTab], [activeTab])

  return (
    <section id="projects" className="projects">
      <div className="section__wrap">
        <h2 className="projects__title">Projects Showcase</h2>
        <p className="projects__subtitle">
          Explore product work by category — each card includes a manual image slider and concise
          implementation highlights.
        </p>

        <div className="projects__tabs" role="tablist" aria-label="Project categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`projects__tab ${activeTab === tab.id ? 'projects__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects__grid" key={activeTab}>
          {activeProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
