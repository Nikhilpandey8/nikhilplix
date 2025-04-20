import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: 'FAQ', href: '#' },
    { title: 'Help Center', href: '#' },
    { title: 'Account', href: '#' },
    { title: 'Media Center', href: '#' },
    { title: 'Investor Relations', href: '#' },
    { title: 'Jobs', href: '#' },
    { title: 'Ways to Watch', href: '#' },
    { title: 'Terms of Use', href: '#' },
    { title: 'Privacy', href: '#' },
    { title: 'Cookie Preferences', href: '#' },
    { title: 'Corporate Information', href: '#' },
    { title: 'Contact Us', href: '#' },
    { title: 'Speed Test', href: '#' },
    { title: 'Legal Notices', href: '#' },
    { title: 'Only on Netflix', href: '#' },
  ];

  return (
    <footer className="bg-black text-gray-500 py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-sm">Questions? Call 1-800-NETFLIX</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-xs hover:underline">
              {link.title}
            </a>
          ))}
        </div>
        
        <div className="mb-4">
          <select className="bg-black text-white border border-gray-700 py-1 px-2 rounded text-sm">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        
        <div className="text-xs">
          <p>Netflix India</p>
          <p>© 1997-{currentYear} Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;