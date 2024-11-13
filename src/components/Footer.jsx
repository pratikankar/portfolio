import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Experience',
      href: '#experience'
    },
    {
      label: 'Skills',
      href: '#skills'
    },
    {
      label: 'Projects',
      href: '#projects'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/pratikankar'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pratik-ankar-80b4a630'
    },
    // {
    //   label: 'Twitter X',
    //   href: 'https://x.com/codewithsadee_'
    // },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/wayfarer_prat'
    },
  ];

const Footer = () => {
  return (
    <footer className="section footer bg-slate-600 text-neutral-50">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">Sitemap</p>
                        <ul>
                            {sitemap.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} className="block text-sm text-neutral-50 py-1 transition-colors hover:text-sky-500">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">Socials</p>
                        <ul>
                            {socials.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} target="_blank" className="block text-sm text-neutral-50 py-1 transition-colors hover:text-sky-500">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <a href="" className="">
                    <img src="/images/favicon.svg" width={40} height={40} alt="logo" />
                </a>
                <p className="text-sky-500 text-sm">&copy; 2024 <span className="text-sky-500">Pratik Ankar</span> </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer