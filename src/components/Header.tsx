import React from 'react';
import { Calendar, Phone, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-white shadow-sm">
      <div className="bg-sky-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Fri: 8am-6pm</span>
            </div>
          </div>
          <Button variant="secondary" size="sm" className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Book Appointment
          </Button>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-sky-900">BrightSmile Dental</h1>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#team">Our Team</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-gray-600 hover:text-sky-900 transition-colors"
    >
      {children}
    </a>
  );
}