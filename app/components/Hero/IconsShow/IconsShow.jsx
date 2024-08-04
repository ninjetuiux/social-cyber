'use client'
import Image from 'next/image'

const logoItems = [
  {
    id: 1,
    src: '/social-logos/facebook.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 2,
    src: '/social-logos/instagram.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 3,
    src: '/social-logos/whatsapp.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 4,
    src: '/social-logos/google.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 5,
    src: '/social-logos/x.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 6,
    src: '/social-logos/twitch.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 7,
    src: '/social-logos/pinterest.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 8,
    src: '/social-logos/reddit.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 9,
    src: '/social-logos/youtube.png',
    alt: 'social-media-companies-logo.png',
  },
  {
    id: 10,
    src: '/social-logos/dribble.png',
    alt: 'social-media-companies-logo.png',
  },
];
export default function IconsShow() {

    return (
      <div className='slider-container max-x-max overflow-hidden bg-[#FB5958] bg-gradient-to-r from-[#FB5958] to-[#F89B29]'>
        <div className='slider bg-transparent'>
          {logoItems.map((logoItem, index) => (
            <div key={index} className='logo-item bg-transparent'>
              <Image src={logoItem.src} alt={logoItem.alt} width={180} height={180} />
            </div>
          ))}
          {logoItems.map((logoItem, index) => (
            <div key={index + logoItems.length} className='logo-item bg-transparent'>
              <Image src={logoItem.src} alt={logoItem.alt} width={180} height={180} />
            </div>
          ))}
        </div>
      </div>
    );
}
