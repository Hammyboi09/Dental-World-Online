import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import type { ServiceSlide } from '../types';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceSlide | null;
}

const serviceDetails = {
  "Basal Implants": {
    description: "Revolutionary dental implant solution utilizing the dense basal bone structure for immediate loading and enhanced stability.",
    benefits: [
      "Immediate loading possible - get teeth in days",
      "Suitable for patients with low bone density",
      "No bone grafting required in most cases",
      "Minimally invasive procedure",
      "Quick recovery time",
      "High success rate"
    ],
    procedure: [
      "Initial consultation and 3D imaging",
      "Treatment planning using advanced software",
      "Single-day surgical procedure",
      "Immediate provisional restoration",
      "Final prosthetic placement within days"
    ],
    ideal_for: [
      "Patients with bone loss",
      "Those seeking immediate results",
      "Cases unsuitable for conventional implants",
      "Patients wanting to avoid bone grafting",
      "Full mouth rehabilitation cases"
    ],
    aftercare: [
      "Minimal post-operative care needed",
      "Regular check-ups scheduled",
      "Oral hygiene instructions provided",
      "Dietary guidelines for initial days",
      "24/7 support for any concerns"
    ]
  },
  "Restoring Missing Teeth": {
    description: "Comprehensive solutions for replacing missing teeth using advanced techniques and premium materials for natural-looking results.",
    benefits: [
      "Natural-looking results",
      "Improved bite function",
      "Enhanced facial aesthetics",
      "Prevents bone loss",
      "Boosts confidence",
      "Long-lasting solutions"
    ],
    procedure: [
      "Detailed oral examination",
      "Digital smile design planning",
      "Custom treatment plan creation",
      "Precise restoration fitting",
      "Final adjustments and polishing"
    ],
    ideal_for: [
      "Single or multiple missing teeth",
      "Complete tooth loss cases",
      "Aesthetic improvements",
      "Functional restoration needs",
      "Preventive care"
    ],
    aftercare: [
      "Regular cleaning routine",
      "Periodic check-ups",
      "Maintenance instructions",
      "Dietary recommendations",
      "Long-term care guidance"
    ]
  },
  "Dental Implants": {
    description: "State-of-the-art implant solutions using premium titanium or zirconia posts for permanent tooth replacement with natural functionality.",
    benefits: [
      "Permanent solution for missing teeth",
      "Natural look and feel",
      "Preserves jaw bone structure",
      "Improves speech and eating",
      "No impact on adjacent teeth",
      "Lifetime durability"
    ],
    procedure: [
      "Comprehensive evaluation",
      "3D imaging and planning",
      "Guided implant placement",
      "Healing period management",
      "Custom crown placement"
    ],
    ideal_for: [
      "Single tooth replacement",
      "Multiple teeth replacement",
      "Full arch restoration",
      "Bridge support",
      "Denture stabilization"
    ],
    aftercare: [
      "Detailed hygiene instructions",
      "Regular follow-up schedule",
      "Professional cleaning routine",
      "Maintenance guidelines",
      "Long-term monitoring"
    ]
  },
  "Microscopic Dentistry": {
    description: "Advanced precision dentistry using high-powered microscopes for enhanced visualization and superior treatment outcomes.",
    benefits: [
      "Enhanced precision in treatment",
      "Better identification of issues",
      "Minimally invasive procedures",
      "Improved success rates",
      "Better preservation of tooth structure",
      "Reduced recovery time"
    ],
    procedure: [
      "Microscopic examination",
      "Detailed problem identification",
      "Precise treatment execution",
      "Real-time magnified visualization",
      "Documentation of procedure"
    ],
    ideal_for: [
      "Complex root canal treatments",
      "Microsurgery procedures",
      "Crack detection",
      "Conservative restorations",
      "Detailed examinations"
    ],
    aftercare: [
      "Specific post-procedure care",
      "Follow-up examinations",
      "Monitoring healing progress",
      "Preventive measures",
      "Long-term maintenance"
    ]
  },
  "Root Canal Treatment": {
    description: "Modern endodontic therapy using advanced techniques and equipment to save natural teeth and eliminate pain.",
    benefits: [
      "Saves natural tooth",
      "Eliminates pain and infection",
      "Preserves normal bite force",
      "Maintains natural appearance",
      "Prevents tooth extraction",
      "Efficient chewing function"
    ],
    procedure: [
      "Digital X-ray analysis",
      "Local anesthesia administration",
      "Infection removal",
      "Canal cleaning and shaping",
      "Permanent sealing"
    ],
    ideal_for: [
      "Severe tooth decay",
      "Cracked or damaged teeth",
      "Deep cavities",
      "Repeated dental procedures",
      "Tooth infection or abscess"
    ],
    aftercare: [
      "Temporary diet restrictions",
      "Oral hygiene instructions",
      "Pain management guidance",
      "Crown protection advice",
      "Regular check-ups"
    ]
  },
  "Pediatric Dentistry": {
    description: "Specialized dental care for children in a friendly, comfortable environment focusing on prevention and education.",
    benefits: [
      "Child-friendly environment",
      "Preventive care focus",
      "Early problem detection",
      "Positive dental experience",
      "Education for parents",
      "Growth monitoring"
    ],
    procedure: [
      "Gentle examination",
      "Preventive treatments",
      "Fluoride application",
      "Sealant placement",
      "Educational sessions"
    ],
    ideal_for: [
      "Children of all ages",
      "Preventive care",
      "Early orthodontic needs",
      "Dental anxiety cases",
      "Special needs patients"
    ],
    aftercare: [
      "Home care instructions",
      "Diet recommendations",
      "Regular check-up schedule",
      "Emergency care guidance",
      "Oral hygiene education"
    ]
  },
  "Cosmetic Dentistry": {
    description: "Advanced aesthetic dental procedures to enhance your smile using cutting-edge techniques and premium materials.",
    benefits: [
      "Enhanced smile aesthetics",
      "Improved confidence",
      "Natural-looking results",
      "Long-lasting solutions",
      "Personalized treatment",
      "Quick visible results"
    ],
    procedure: [
      "Smile analysis",
      "Digital smile design",
      "Treatment simulation",
      "Custom procedure plan",
      "Artistic implementation"
    ],
    ideal_for: [
      "Smile makeovers",
      "Teeth whitening",
      "Veneers",
      "Composite bonding",
      "Aesthetic corrections"
    ],
    aftercare: [
      "Maintenance instructions",
      "Color stability guidance",
      "Regular polish and clean",
      "Protection guidelines",
      "Touch-up schedules"
    ]
  }
};

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  const details = serviceDetails[service.title];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-2xl 
                     overflow-hidden mx-auto z-50 border border-white/20 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 
                       transition-colors z-10 backdrop-blur-md"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Section */}
              <div className="h-64 md:h-full relative">
                <video
                  src={service.image}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {service.title}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 bg-black/40 backdrop-blur-md">
                <div className="space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                    <p className="text-white/90 leading-relaxed">
                      {details.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {details.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/90">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Procedure */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Procedure Steps</h3>
                    <ul className="space-y-2">
                      {details.procedure.map((step, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-violet-400 text-sm">{index + 1}</span>
                          </div>
                          <span className="text-white/90">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Ideal For</h3>
                    <ul className="space-y-2">
                      {details.ideal_for.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                          <span className="text-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Aftercare */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Aftercare</h3>
                    <ul className="space-y-2">
                      {details.aftercare.map((care, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                          <span className="text-white/90">{care}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full py-3 rounded-lg
                           bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                           text-white font-medium
                           transform transition-all duration-300
                           hover:shadow-lg hover:shadow-[#FF6F3C]/20
                           relative overflow-hidden
                           group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                               opacity-0 group-hover:opacity-100 
                               -translate-x-full group-hover:translate-x-full 
                               transition-all duration-700 ease-out" />
                  <span className="relative z-10">Close</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}