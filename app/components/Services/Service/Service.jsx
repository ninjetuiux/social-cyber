// Service.js
import Image from "next/legacy/image";

function Service({ services }) { // Destructure the 'services' prop
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 font-sans">
      {services.map((service, index) => (
        <div key={index} className="rounded-lg flex-col w-full items-center ring-2 shadow-[#C3FA42] p-4">
            <div className="w-full flex justify-center">
              <div className='w-[300px] h-[300px]'>
                <Image 
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                />
              </div>
            </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Service;
