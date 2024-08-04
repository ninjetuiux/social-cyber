// app/components/Navbar/Navbar.jsx (Server Component)
import dynamic from 'next/dynamic';

const NavLinks = dynamic(() => import('./NavLinks'), { ssr: false }); // Client Component

export default function Navbar() {

  return (
    <div 
      className='sticky top-0 z-50 shadow-sm m-0 p-0 max-x-max items-center flex'>
      <div className="max-x-max flex shadow-gray-100 items-center flex-1">
        {/* Client Component for navigation links and hamburger menu */}
        <NavLinks />
      </div>
    </div>
  );
}
