import { useState } from 'react'
import Services from './Services'
import FooterBlock from './FooterBlock'

const Navbar = () => {
const [navIsOpened, setNavIsOpened] = useState(false)
const closeNavbar = () => {
setNavIsOpened(false)
}
const toggleNavbar = () => {
setNavIsOpened(navIsOpened => !navIsOpened)
}
return (
<>
  <div aria-hidden={true} onClick={() => {
    closeNavbar()
  }} className={
    `fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`
  } />
  <header  className=" sticky top-0 w-full flex items-center h-20 border-b border-b-gray-200  z-40 bg-white/80  backdrop-filter backdrop-blur-xl">
  <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center courier-prime-regular text-base sm:text-lg">

        
      <div className="flex items-center min-w-max">
        <a href="/" className="relative flex items-center gap-2.5">
          <span aria-hidden={true} className="flex">
            <span className="w-3 h-6 rounded-l-full flex bg-pink-500" />
            <span className="w-3 h-6 rounded-r-full flex bg-rose-500 mt-2" />
          </span>
          <span className="inline-flex text-lg font-bold text-indigo-950 ">
            Make My Resume <span className="bg-indigo-50  inline-block border border-dashed border-indigo-600 h-4 ml-3 text-xs">Beta</span>
          </span>
        </a>
        
      </div>
      
    </nav>
  </header>
</>
)
}
 
const FeatureItem = ({ text }) => {
return (
    <div className="text-gray-700  flex gap-x-3">
        <span className="w-7 h-7 max-h-7 min-w-[1.75rem] bg-emerald-100  text-emerald-600 rounded-md flex items-center justify-center">
            ✓
        </span>
        {text}
    </div>
)
}

const features = [
    {
      id: 1,
      text: (
        <>
          Harvard Standard |{" "}
          <a
            className="text-indigo-900"
            href="https://cdn-careerservices.fas.harvard.edu/wp-content/uploads/sites/161/2023/08/College-resume-and-cover-letter-4.pdf"
          >
            view
          </a>
        </>
      ),
    },
    {
      id: 2,
      text: "ATS Compitable",
    },
    {
      id: 3,
      text: "Easily Customizable",
    },
    {
      id: 4,
      text: "Download in PDF",
    },
  ];
  

 
export default function MainPage() {
return (
    <>
        <div className='bg-gradient-to-tr from-red-50 to-red-200'><Navbar />
        <section className="py-8 courier-prime-regular sm:mt-10 lg:mt-20 mb-28">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-x-6">
                <div className="lg:w-[47%] py-4 lg:py-8 xl:py-12 space-y-7">
                <h1 className="text-black text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-5xl/tight font-semibold text">
            Build Resume with Ease in <span className="bg-rose-700/10  inline-block border border-dashed border-rose-600 px-3">Less Time</span>
          </h1>
                    
                    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6 ">
  {features.map(feature => (
    <FeatureItem key={feature.id} {...feature} />
  ))}
</div>

            <div className=" lg:max-w-sm p-4 rounded-lg  bg-gradient-to-r from-pink-500 to-rose-500  text-3xl font-bold flex items-center justify-center text-white transition duration-300 hover:bg-gradient-to-r hover:from-rose-400 hover:to-red-500">
  <a href="https://makemyresume.netlify.app/edit">Create Now</a>

</div>
<p className='border rounded p-1 text-sm flex border-blue-500 bg-blue-200/50'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24" fill="none" stroke="#4400ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>Prefer Laptop and auto-saving is currently off</p>
                </div>
                
                <div className="flex flex-1 relative lg:h-auto ">
                    <div className="relative h-max lg:absolute left-0 top-0 flex  lg:w-auto mx-3">
                        
                        <img src="https://github.com/Vedant-edu/Resumo/blob/main/src/assets/image.png?raw=true" width={650} height={1200} alt="Resume Photo" className=" lg:pl-36 transform -rotate-20 overflow-hidden" />
                    </div>
                </div>
            </div>
               
  
        </section></div>
        <Services/>
       
        <FooterBlock/>
      
    </>
)
}