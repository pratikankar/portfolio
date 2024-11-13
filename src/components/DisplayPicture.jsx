import { ButtonPrimary, ButtonOutline } from "./Button"

const DisplayPicture = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                    </div>
                    <figure className="ing-box w-9 h-9 rounded-lg">
                        <img src="/images/photo.jpg" alt="display picture" width={40} height={40} className="img-cover" />
                    </figure>

                    
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Pratik Ankar <br />
                    Front-end Developer
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        label="Download CV"
                        icon="download"
                        href="/assets/CV-Pratik_Ankar.pdf"
                    />

                    {/* <ButtonOutline
                        href="#about"
                        label="Scroll down"
                        icon="arrow_downward"
                    /> */}
                </div>
            </div>
            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden">
                    <img src="/images/banner.png" alt="display picture" width={656} height={800} className="w-full"/>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default DisplayPicture