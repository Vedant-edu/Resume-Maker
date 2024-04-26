
     
    const ServiceCard = ({ title, description, num }) => {
    return (
        <div className="p-5 sm:p-6  lg:p-8 rounded-3xl border border-gray-200  relative overflow-hidden">
            <div className="rounded-xl bg-gray-500/20   p-3 text-gray-900  w-8 relative">
                {num}
            </div>
            <div className="mt-6 space-y-4 relative">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 ">
                    {title}
                </h2>
                <p className="text-gray-700 ">
                    {description}
                </p>
            </div>
            <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-rose-500 rounded-full" />
            <span className="absolute w-36 aspect-square -bottom-16 -right-16 bg-rose-600/70 rounded-full" />
        </div>
    )
    }
     
    const services = [
    {
        id: 1,
        title: "Easily Customizable",
        description: "Our resume template is easily customizable with standard templates, allowing for seamless customization to fit your specific needs.",
        num: "1"
    },
    {
        id: 2,
        title: "Standard Template",
        description: "Harvard standard resume template from our collection tailored to various industries and career levels",
        num: "2"
    },
    {
        id: 3,
        title: "PDF Downloadable",
        description: "Download in PDF format with our convenient Download button ready for printing or digital sharing",
        num: "3"
    },
   
    ]
    const Services = () => {
    return (
        <section className="courier-prime-regular">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 mb-10 xl:gap-14">
                <div className=" max-w-3xl mx-auto space-y-4">
                    <h1 className="text-gray-900  font-semibold  text-4xl">
                        Our Special Features
                    </h1>
                
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {
                        services.map(service => (
                            <ServiceCard key={service.id} {...service} />
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
    }
     
    export default Services