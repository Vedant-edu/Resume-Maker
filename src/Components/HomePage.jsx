
export default function HomePage() {
return (
<>
  <Navbar />
  <main className="w-full courier-prime-regular">
    
    <section className="relative pt-10 xl:pt-14">
      
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
        <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
          <h1 className="text-black text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-5xl/tight font-semibold text">
            Build Resume with Ease in <span className="bg-indigo-50  inline-block border border-dashed border-rose-600 px-3">Less Time</span>
          </h1>
          <p className="mt-10 text-gray-900 ">Harvard Standard | <a className='text-indigo-900' href="https://cdn-careerservices.fas.harvard.edu/wp-content/uploads/sites/161/2023/08/College-resume-and-cover-letter-4.pdf">view resource</a></p>
          <p className="mt-2 text-gray-900 ">ATS Compitable </p>
          <p className="mt-2 text-gray-900 ">Just Edit, Easily Customizable</p>
          <p className="mt-2 text-gray-900 ">Made with 💖 by <a href="vedantmute.netlify.app" className='underline'>Vedant Mute</a>
</p> 
          
        </div>
        <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
        <img src="https://github.com/Vedant-edu/Resumo/blob/main/src/assets/image.png?raw=true" alt="Resume photo"  className="lg:absolute w-full h-96 lg:inset-x-0 object-cover lg:h-full" />

          
        </div>
      </div>
      <div class="mx-auto lg:max-w-9xl w-full bg-gradient-to-r from-pink-500 to-rose-500 h-52 text-7xl font-bold flex items-center justify-center text-white transition duration-300 hover:bg-gradient-to-r hover:from-rose-400 hover:to-red-500">
  <a href="https://makemyresume.netlify.app/edit">Create Now</a>
</div>
<Services/>
<hr />
      <div className='mx-auto lg:max-w-7xl w-full mt-4'>
        &copy; makemyresume 2024 <span className="inline-block border border-dashed">(Beta) | </span> <a href="https://makemyresume.netlify.app/disclaimer">Disclaimer</a><span> | Feedback</span>
      </div>
    </section>
  </main>
</>
)
}