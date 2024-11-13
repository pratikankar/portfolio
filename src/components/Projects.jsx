const Projects = () => {
  return (
    <section id="projects" className="section">
            <div className="container">
                <h2 className="headline-2">
                    Projects I worked on
                </h2>
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <div className="experience">
                        <h3 className="text-neutral-50 mb-2 md:mb-6 md:text-xl md:max-w-[60ch]">AR Workflow</h3>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        AR Workflow is an accounts receivable automation application where a business can register and handles the billing and payments of the customers along with the communication through SMS, Calls and Emails.
                        </p>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        Technologies used: Angular, Angular Material, Bootstrap
                        </p>
                    </div>
                    <hr />
                    <div className="experience">
                    <h3 className="text-neutral-50 mt-4 mb-2 md:mb-6 md:text-xl md:max-w-[60ch]">Patient Engagement Solution</h3>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        This is healthcare application to engage patients and consumers which captures data for creating marketing campaigns, getting insights of the patients, and analysis of all the campaign data.
                        </p>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        Technologies used: Angular, Bootstrap, JavaScript, Node.js, Express, Elasticsearch, AWS services
                        </p>
                    </div>
                    <hr />
                    <div className="experience">
                        <h3 className="text-neutral-50 mt-4 mb-2 md:mb-6 md:text-xl md:max-w-[60ch]">Medevantage CRM</h3>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        This project provides end to end solution for Hospital call center department like creating call encounters, request medication refills, getting test results, fill form records, ask medical questions, etc.
                        </p>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        Technologies used: Node.js, NestJS, Angular 13
                        </p>
                    </div>
                    <hr />
                    <div className="experience">
                        <h3 className="text-neutral-50 mt-4 mb-2 md:mb-6 md:text-xl md:max-w-[60ch]">PatientConnect360</h3>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        This is a web platform where user manages day to day life and health care as per plans subscribed. 
                        </p>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        Technologies used: Drupal
                        </p>
                    </div>
                    <hr />
                    <div className="experience">
                        <h3 className="text-neutral-50 mt-4 mb-2 md:mb-6 md:text-xl md:max-w-[60ch]">Tennis Wizard</h3>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        This is a web platform where information regarding Tennis is given along with plans for physical fitness, mental preparation, etc. for the players.
                        </p>
                        <p className="text-neutral-50 mb-2 md:mb-6 md:text-xl">
                        Technologies used: Drupal
                        </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Projects