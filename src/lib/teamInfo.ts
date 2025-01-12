const doctorProfiles = {
  'deepak nakra': `Dr. Deepak Nakra is the Director of Dental World. He holds a BDS from Rama Dental College, Kanpur, and a Certificate of Implantology from Spain. He is a Fellow of the International College of Oral Implantologists and a member of leading implantology societies in India.

Dr. Nakra established the first Dental World clinic in Rajouri Garden, New Delhi, in 2000 and played a key role in expanding the practice. He also founded a charitable clinic in Inderlok in memory of his parents, which has been operational since 2004. Specializing in implant dentistry, Dr. Nakra has undergone extensive training both in India and abroad, handling complex dental surgeries with ease and precision.`,

  'harveen nakra': `Dr. Harveen Nakra is the Clinical Head at Dental World and a Gold Medalist in BDS from Rama Dental College, Kanpur. She also holds a Certificate in Endodontics from the USA and previously served as a resident at RDC Hospital.

Dr. Harveen has directed Malhotra Dental Hospital and heads the Punjabi Bagh clinic since joining Dental World in 2001. Her expertise spans implant and cosmetic dentistry, and she has a strong interest in orthodontics, having completed additional studies to expand her treatment offerings. Patients commend her for her precision and dedication to delivering top-tier dental care.`,

  'tavleen kaur': `Dr. Tavleen Kaur is an Associate Dental Consultant at Dental World. She completed her BDS from Rajasthan Dental College and Hospital in 2010 and has been an integral part of our Rajouri Garden branch for over five years.

Dr. Kaur's comprehensive approach to dentistry ensures deep knowledge and understanding of various dental procedures. Her gentle approach and attention to detail have earned her high praise from patients.`,

  'akshay sur': `Dr. Akshay Sur serves as the Practice Principle at Dental World. He completed his BDS from Government Dental College, Indore, graduating in 1989. He began private practice in Vasant Vihar and later pursued advanced studies in the USA from 1993 to 1996.

Dr. Sur's expertise in oral facial pain, oral medicine, and TMD has made him a sought-after specialist. His commitment to excellence and patient care continues to set high standards in dental practice.`,

  'sameer gupta': `Dr. Sameer Gupta is our expert Orthodontist, having completed both his BDS and MDS from KVG Dental College, Mangalore. He specializes in treating complex malocclusion cases and stays updated with the latest orthodontic techniques.

Dr. Gupta combines cutting-edge technology with years of expertise to create beautiful, healthy smiles. His dedication to orthodontics ensures optimal outcomes for patients seeking teeth alignment solutions.`,

  'raman kamboj': `Dr. Raman Kamboj is our specialist Endodontist, with a BDS from Rama Dental College, Kanpur, and MDS in Endodontics and Conservative Dentistry from Darshan Dental College, Udaipur.

Dr. Kamboj excels in root canal treatments, rotary endodontics, re-treatments, apicectomy, and surgical endodontic procedures. His expertise ensures precise and effective care for patients requiring endodontic treatment.`,

  'pratik aggarwal': `Dr. Pratik Aggarwal is our consulting Orthodontist, having completed both his BDS and MDS from Subharti Dental College. He serves as a consultant at several prestigious hospitals in New Delhi.

Dr. Aggarwal regularly attends national and international conferences to stay current with the latest developments in orthodontics. His expertise helps patients achieve their desired smile transformations effectively.`
};

export const teamInfo = {
  getTeamList: () => `
Our Team of Specialists:

1. Dr. Deepak Nakra (Director)
2. Dr. Harveen Nakra (Clinical Head)
3. Dr. Tavleen Kaur (Associate Dental Consultant)
4. Dr. Akshay Sur (Practice Principle)
5. Dr. Sameer Gupta (Orthodontist)
6. Dr. Raman Kamboj (Endodontist)
7. Dr. Pratik Aggarwal (Orthodontist)

To learn more about a specific doctor, use the command:
/doctor [name]

For example: /doctor deepak nakra
  `,

  getDoctorInfo: (name: string) => {
    const key = name.toLowerCase();
    return doctorProfiles[key] || 
      'Doctor not found. Please use /team to see the list of our doctors and ensure you spell the name correctly.';
  }
};