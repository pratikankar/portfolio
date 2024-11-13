
const aboutItems = [
    {
      label: 'Corporate Projects',
      number: 5
    },
    {
        label: 'Practice Project',
        number: 20
    },
    {
      label: 'Years of experience',
      number: 2.9
    }
  ];

const About = () => {

  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-neutral-50 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I am Pratik Ankar, <br />
                I am a professional front-end developer, experienced in designing and developing applications using technologies like Angular, React, Bootstrap, Angular Material, etc. I have been part of teams who had created highly scalable applications. <br />
                I am always eager to learn and always explore the new technologies.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl"> {number}</span>
                                    <span className="text-sky-400 font-semibold md-text-3xl">+</span>
                                </div>

                                <p className="text-sm text-neutral-100">{label}</p>
                            </div>
                        ))
                    }

                    <img src="/images/favicon.svg" alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h=[40px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About