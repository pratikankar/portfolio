import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/angular.svg',
      label: 'Angular',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/typescript.svg',
      label: 'TypeScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/html5.svg',
      label: 'HTML 5',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/bootstrap.svg',
      label: 'Bootstrap',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
  ];

const Skills = () => {
  return (
    <section className="section" id="skills">
        <div className="container">
            <h2 className="headline-2">
                Technologies I Worked On
            </h2>
            <p className="text-zinc-600 mt-0 mb-8 max-w-[50ch]">
            Following are the powerful tools and technologies I use to create high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label}, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills