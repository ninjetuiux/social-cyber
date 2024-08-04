import Image from 'next/image'
import React, { useEffect, useRef } from 'react'


const logoItems = [{
    logo1: {
    src: '/social-logos/facebook.png',
    alt: 'social-media-companies-logo.png',
    },
    logo2: {
    src: '/social-logos/instagram.png',
    alt: 'social-media-companies-logo.png',
    },
    logo3: {
    src: '/social-logos/whatsapp.png',
    alt: 'social-media-companies-logo.png',
    },
    logo4: {
    src: '/social-logos/google.png',
    alt: 'social-media-companies-logo.png',
    },
    logo5: {
    src: '/social-logos/x.png',
    // alt: 'social-media-companies-logo.png',
    },
    logo6: {
    src: '/social-logos/twitch.png',
    alt: 'social-media-companies-logo.png',
    },
    logo7: {
    src: '/social-logos/pinterest.png',
    alt: 'social-media-companies-logo.png',
    },
    logo8: {
    src: '/social-logos/reddit.png',
    alt: 'social-media-companies-logo.png',
    },
    logo9: {
    src: '/social-logos/youtube.png',
    alt: 'social-media-companies-logo.png',
    },
    logo10: {
    src: '/social-logos/dribble.png',
    alt: 'social-media-companies-logo.png',
    },
}]
export default function IconsShow() {
    const duplicatedLogoItems = [...Object.values(logoItems[0]), ...Object.values(logoItems[0])];

    const containerRef = useRef(null);
  
    useEffect(() => {
      if (containerRef.current) {
        const totalWidth = Array.from(containerRef.current.children).reduce((acc, child) => {
          return acc + child.offsetWidth;
        }, 0);
        containerRef.current.style.width = `${totalWidth}px`;
      }
    }, []);
  return (
    <div className="animate-infinite-scroll whitespace-nowrap flex absolute w-full max-w-max overflow-hidden bottom-0 items-center" ref={containerRef}>
    {duplicatedLogoItems.map((logo, index) => (
        <Image
            key={index} // Add a unique key for each image
            layout='fixed'
            alt={logo.alt}
            width={150}
            height={150}
            {...logo} 
            className='inline-block flex-shrink-0 max-w-max'
            style={{
              '--delay': `${(index * (30 / duplicatedLogoItems.length))}s`,
              '--translate': `${-(index * (100 / duplicatedLogoItems.length))}%`,
              animationDelay: `var(--delay)`,
              transform: `translateX(var(--translate))`,
              maxWidth: `max-content`
            }}
        />
    ))}
</div>
  )
}
