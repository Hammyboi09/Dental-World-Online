import { 
  Syringe, CircleDot, Stethoscope, Microscope, Shield, 
  Baby, Sparkles, Scissors, Heart, Activity, 
  AlertCircle, Search, RotateCcw, Move, RefreshCw
} from 'lucide-react';
import type { Service } from './types';

export const services: Service[] = [
  {
    id: 1,
    title: "Basal Implants",
    description: "Revolutionary implant solution utilizing dense basal bone for immediate loading.",
    icon: Syringe,
    image: "public/elements/services/1.png",
    about: "Basal implants are an innovative solution for patients with missing teeth, designed to utilize the dense basal bone. They provide immediate loading, meaning teeth can be fixed within a few days. This technique is especially beneficial for patients with insufficient bone density or those who wish to avoid bone grafting procedures."
  },
  {
    id: 2,
    title: "Restoring Missing Teeth",
    description: "Customized solutions to rebuild your smile and restore oral functionality.",
    icon: CircleDot,
    image: "public/elements/services/2.png",
    about: "Missing teeth can affect your appearance, confidence, and oral health. We offer customized restorative solutions such as dental implants, bridges, and dentures to rebuild your smile and restore chewing and speaking abilities, ensuring a natural and functional result."
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Long-lasting titanium or zirconia posts for natural-looking tooth replacement.",
    icon: Stethoscope,
    image: "public/elements/services/3.png",
    about: "Dental implants are the gold standard for replacing missing teeth. These titanium or zirconia posts are surgically placed into the jawbone, mimicking natural tooth roots. They provide long-lasting stability and are completed with natural-looking crowns for seamless aesthetics and functionality."
  },
  {
    id: 4,
    title: "Microscopic Dentistry",
    description: "Advanced magnification technology for precise, minimally invasive procedures.",
    icon: Microscope,
    image: "public/elements/services/4.png",
    about: "Microscopic dentistry revolutionizes precision care by using advanced magnification technology. This approach enhances visibility, enabling dentists to perform minimally invasive procedures with greater accuracy, reducing recovery time and improving outcomes."
  },
  {
    id: 5,
    title: "Root Canal Treatment",
    description: "Effective procedure to save decayed or infected teeth.",
    icon: Shield,
    image: "public/elements/services/5.png",
    about: "A root canal treatment is a highly effective procedure to save a decayed or infected tooth. By removing the infected pulp, cleaning the canal, and sealing it, we eliminate pain and restore the tooth's health and functionality, helping you maintain your natural smile."
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    description: "Child-friendly dental care focused on prevention and education.",
    icon: Baby,
    image: "public/elements/services/6.png",
    about: "Pediatric dentistry focuses on creating a positive dental experience for children. We provide preventive care, early cavity treatment, and guidance on oral hygiene habits to promote healthy teeth and gums, ensuring your child's oral health for life."
  },
  {
    id: 7,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with advanced aesthetic treatments.",
    icon: Sparkles,
    image: "public/elements/services/7.png",
    about: "Transform your smile with advanced cosmetic dentistry solutions. Whether you're looking to whiten your teeth, correct imperfections with veneers, or enhance symmetry, our treatments are tailored to give you a radiant and confident smile."
  },
  {
    id: 8,
    title: "Oral Surgery",
    description: "Expert surgical procedures for complex dental issues.",
    icon: Scissors,
    image: "public/elements/services/8.png",
    about: "Our oral surgery services address complex dental issues, from wisdom teeth removal to jaw corrections. Performed by experienced professionals, these procedures ensure comfort and precision, helping you achieve long-term oral health and relief from discomfort."
  },
  {
    id: 9,
    title: "General Treatments",
    description: "Comprehensive routine care for maintaining oral health.",
    icon: Heart,
    image: "public/elements/services/9.png",
    about: "General dental treatments form the foundation of oral care, including routine cleanings, cavity fillings, and preventive services. We focus on maintaining your dental health, catching issues early, and providing tailored care to meet your needs."
  },
  {
    id: 10,
    title: "Periodontics/Gums Treatments",
    description: "Specialized care for gum health and disease prevention.",
    icon: Activity,
    image: "public/elements/services/10.png",
    about: "Healthy gums are essential for a strong smile. Our periodontic treatments address gum diseases such as gingivitis and periodontitis, providing deep cleanings, scaling, and root planing to restore gum health and prevent tooth loss."
  },
  {
    id: 11,
    title: "Oral Concerns",
    description: "Comprehensive diagnosis and treatment of various oral issues.",
    icon: AlertCircle,
    image: "public/elements/services/11.png",
    about: "From tooth sensitivity to jaw pain and bad breath, we diagnose and treat a variety of oral concerns. Our comprehensive care addresses the root causes, ensuring a healthy and comfortable smile."
  },
  {
    id: 12,
    title: "Microscope-Assisted Root Canals",
    description: "High-precision root canal treatments using advanced magnification.",
    icon: Search,
    image: "public/elements/services/12.png",
    about: "For complex cases, microscope-assisted root canals provide exceptional precision. Using high magnification, we locate and treat hidden or intricate root canal systems, ensuring complete disinfection and a successful outcome."
  },
  {
    id: 13,
    title: "Re-Root Canal Procedure",
    description: "Expert treatment for previously treated teeth with new complications.",
    icon: RotateCcw,
    image: "public/elements/services/13.png",
    about: "Re-root canal treatment is performed when a previously treated tooth develops new infection or complications. We carefully remove the old filling, clean and disinfect the canals, and reseal them to restore your tooth's health and functionality."
  },
  {
    id: 14,
    title: "Orthodontic/Braces Treatment",
    description: "Comprehensive solutions for teeth alignment and bite correction.",
    icon: Move,
    image: "public/elements/services/14.png",
    about: "Orthodontic treatments align teeth and correct bite issues to enhance both functionality and aesthetics. From traditional braces to modern clear aligners, our solutions are tailored to suit your lifestyle and deliver a straight, beautiful smile."
  },
  {
    id: 15,
    title: "Full Mouth Rehabilitation",
    description: "Complete restoration of oral health and functionality.",
    icon: RefreshCw,
    image: "public/elements/services/15.png",
    about: "Full mouth rehabilitation combines multiple dental procedures to restore the aesthetics, health, and functionality of your smile. This comprehensive approach is ideal for patients with extensive dental issues, offering a tailored plan to achieve complete oral restoration."
  }
];