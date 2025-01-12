import React from 'react';

export function IdeologyContent() {
  return (
    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mb-16
                    border border-white/20 shadow-lg text-white">
      <div className="prose prose-lg max-w-none prose-invert">
        <p className="mb-6">
          Dental World is a chain of dental clinics established in Punjabi Bagh, Rajouri Garden, Vasant Vihar, and Inderlok in New Delhi, offering modern, hygienic, and ethical dentistry. We are a family of four dentists and employ specialists in various fields of dentistry to provide patients with the best possible solutions for their dental problems.
        </p>
        
        <p className="mb-6">
          We have set up a charity clinic at Inderlok, where we organize free dental treatment during four annual dental camps held on the 8th of May, 14th of June, 29th of June, and 2nd of November. On all other days, the clinic offers free or greatly subsidized treatment to anyone in need.
        </p>
        
        <p className="mb-6">
          Two full-time dentists (B.D.S.) are available at this clinic at all times. The clinic at Vasant Vihar has been operational for the past 25 years. It was established by Dr. Balraj Sur after his retirement from government service.
        </p>
        
        <p className="mb-6">
          Another charitable clinic was set up in 1996 at Sainik Farms, New Delhi, where each one of us has worked for at least one year.
        </p>
        
        <p className="mb-6">
          The clinic at Punjabi Bagh has been running since 2001, and we take pride in promoting it as one of the best dental clinics in West Delhi.
        </p>
        
        <p className="mb-6">
          We are proud to announce the opening of our new venture, The Specialists Clinic.
        </p>
        
        <p className="mb-6">
          We have brought together an excellent team of experienced and skilled doctors under one roof for our dedicated patients. In addition to addressing dental problems, we now offer services from a gynecologist, an ENT specialist, a skin specialist, a child specialist, a bone & joint specialist, a clinical psychologist, an expert dietitian, and a Botox and hair specialist.
        </p>
        
        <p>
          For more information, visit our website:{' '}
          <a 
            href="https://thespecialistsclinic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            www.thespecialistsclinic.in
          </a>
        </p>
      </div>
    </div>
  );
}