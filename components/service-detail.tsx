// components/service-detail.tsx
import Image from 'next/image';

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition?: 'left' | 'right';
}

export default function ServiceDetail({ 
  title, 
  description, 
  features, 
  image, 
  imagePosition = 'left' 
}: ServiceDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        {/* Image Section */}
        <div className="lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-auto">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="lg:w-1/2 p-4 md:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 md:mb-3">{title}</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">{description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}