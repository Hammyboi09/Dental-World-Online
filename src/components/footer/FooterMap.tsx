import React from 'react';

export function FooterMap() {
  return (
    <div className="w-full h-[300px] rounded-2xl overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4279126120446!2d77.12017747563739!3d28.646903383427684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036bbfffffff%3A0x190db336d0e20662!2sDental%20World%20-%20Best%20Dental%20Clinic%20in%20Delhi%20%7C%20Teeth%20Whitening%20%26%20RCT%20Treatment%20in%20Delhi%20%7C%20Dentist%20in%20Delhi!5e0!3m2!1sen!2sin!4v1735489065460!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
      />
    </div>
  );
}