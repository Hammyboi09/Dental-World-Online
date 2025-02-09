import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formOptions } from './formOptions';
import type { FormData, AnalysisResult } from './types';
import { AnalysisResults } from './AnalysisResults';

const initialFormData: FormData = {
  primaryConcerns: [],
  dentalHistory: [],
  oralHygiene: '',
  lifestyleFactors: [],
};

const steps = [
  {
    id: 1,
    title: 'Primary Concerns',
    description: 'Select your main dental concerns',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-40 mx-auto',
  },
  {
    id: 2,
    title: 'Dental History',
    description: 'Tell us about your past treatments',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-44 mx-auto',
  },
  {
    id: 3,
    title: 'Oral Hygiene',
    description: 'Your daily dental care routine',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-44 mx-auto',
  },
  {
    id: 4,
    title: 'Lifestyle Factors',
    description: 'Habits that affect dental health',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-44 mx-auto',
  },
];

export function ConsultationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleOptionToggle = (field: keyof FormData, option: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? (prev[field] as string[]).includes(option)
          ? (prev[field] as string[]).filter((item) => item !== option)
          : [...(prev[field] as string[]), option]
        : option,
    }));
  };

  const handleUnselectAll = (field: keyof FormData) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Array.isArray(prev[field]) ? [] : '',
    }));
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return formData.primaryConcerns.length > 0;
      case 2:
        return formData.dentalHistory.length > 0;
      case 3:
        return formData.oralHygiene !== '';
      case 4:
        return formData.lifestyleFactors.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const analyzeFormData = (data: FormData): AnalysisResult => {
    // Base scores
    let toothCondition = 85;
    let gumHealth = 85;
    let alignment = 85;
    let hygieneScore = 85;
    const concerns: string[] = [];
    const recommendations: string[] = [];

    // Analyze Primary Concerns
    data.primaryConcerns.forEach(concern => {
      switch (concern) {
        case 'Tooth Pain':
          toothCondition -= 15;
          concerns.push('Active tooth pain indicates possible decay or infection');
          recommendations.push('Immediate dental examination recommended for pain assessment');
          break;
        case 'Bleeding Gums':
          gumHealth -= 20;
          concerns.push('Bleeding gums suggest active gum inflammation');
          recommendations.push('Professional cleaning and gum assessment needed');
          break;
        case 'Bad Breath':
          hygieneScore -= 10;
          gumHealth -= 5;
          concerns.push('Persistent bad breath may indicate oral bacteria buildup');
          recommendations.push('Enhanced oral hygiene routine with tongue cleaning');
          break;
        case 'Teeth Sensitivity':
          toothCondition -= 10;
          concerns.push('Tooth sensitivity may indicate enamel wear or gum recession');
          recommendations.push('Use of sensitivity toothpaste and fluoride treatments');
          break;
        case 'Crooked Teeth':
          alignment -= 25;
          concerns.push('Misaligned teeth can affect bite and oral health');
          recommendations.push('Orthodontic consultation for alignment options');
          break;
        case 'Discolored Teeth':
          hygieneScore -= 5;
          recommendations.push('Professional teeth whitening or cosmetic consultation');
          break;
        case 'Missing Teeth':
          toothCondition -= 20;
          alignment -= 15;
          concerns.push('Missing teeth can affect bite and remaining teeth alignment');
          recommendations.push('Dental implant or bridge consultation recommended');
          break;
        case 'Jaw Pain':
          alignment -= 10;
          concerns.push('Jaw pain may indicate TMJ issues or bite problems');
          recommendations.push('TMJ assessment and bite evaluation needed');
          break;
      }
    });

    // Analyze Dental History
    data.dentalHistory.forEach(history => {
      if (history === 'Previous Root Canal') {
        toothCondition -= 5;
        recommendations.push('Regular monitoring of treated teeth');
      }
      if (history === 'Gum Disease Treatment') {
        gumHealth -= 10;
        recommendations.push('Continued periodontal maintenance recommended');
      }
      if (history === 'Regular Cleanings') {
        hygieneScore += 10;
        gumHealth += 5;
      }
    });

    // Analyze Oral Hygiene
    switch (data.oralHygiene) {
      case 'After Every Meal':
        hygieneScore = 95;
        break;
      case 'Twice Daily':
        hygieneScore = 85;
        break;
      case 'Once Daily':
        hygieneScore = 70;
        concerns.push('Once daily brushing may be insufficient for optimal oral health');
        recommendations.push('Increase brushing frequency to twice daily');
        break;
      case 'Irregular':
        hygieneScore = 50;
        concerns.push('Irregular brushing significantly increases risk of dental problems');
        recommendations.push('Establish consistent twice-daily brushing routine');
        break;
    }

    // Analyze Lifestyle Factors
    data.lifestyleFactors.forEach(factor => {
      switch (factor) {
        case 'Smoking':
          gumHealth -= 20;
          toothCondition -= 10;
          concerns.push('Smoking significantly increases risk of gum disease and oral cancer');
          recommendations.push('Smoking cessation advised for oral health improvement');
          break;
        case 'Frequent Coffee/Tea':
          hygieneScore -= 5;
          recommendations.push('Consider reducing staining beverages or rinsing after consumption');
          break;
        case 'Sugary Foods':
          toothCondition -= 15;
          concerns.push('High sugar intake increases cavity risk');
          recommendations.push('Reduce sugary food consumption and rinse after sweets');
          break;
        case 'Teeth Grinding':
          toothCondition -= 10;
          alignment -= 5;
          concerns.push('Teeth grinding can cause wear and jaw problems');
          recommendations.push('Night guard recommended for grinding protection');
          break;
        case 'Contact Sports':
          recommendations.push('Use of sports mouthguard during activities');
          break;
        case 'Acidic Foods':
          toothCondition -= 5;
          recommendations.push('Limit acidic foods and wait 30 minutes before brushing');
          break;
      }
    });

    // Ensure scores stay within 0-100 range
    const normalizeScore = (score: number) => Math.max(0, Math.min(100, score));

    return {
      toothCondition: normalizeScore(toothCondition),
      gumHealth: normalizeScore(gumHealth),
      alignment: normalizeScore(alignment),
      hygieneScore: normalizeScore(hygieneScore),
      concerns: concerns.filter((v, i, a) => a.indexOf(v) === i), // Remove duplicates
      recommendations: recommendations.filter((v, i, a) => a.indexOf(v) === i), // Remove duplicates
    };
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      const result = analyzeFormData(formData);
      setAnalysisResult(result);
      setIsSubmitting(false);
    }, 2000);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData(initialFormData);
    setIsSubmitting(false);
    setAnalysisResult(null);
  };

  if (analysisResult) {
    return <AnalysisResults result={analysisResult} onStartAgain={resetForm} />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-12 relative">
        <div className="absolute top-3 sm:top-5 left-0 right-0 h-0.5 bg-black-800">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        <div className="relative flex justify-between">
          {steps.map((step) => {
            const isComplete = currentStep > step.id;
            const isCurrent = currentStep === step.id;

            return (
              <div
                key={step.id}
                className={`
                  flex flex-col items-center
                  ${step.id === 1 ? 'text-left' : ''}
                  ${step.id === steps.length ? 'text-right' : ''}
                `}
              >
                <div
                  className={`
                    w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                    border-2 transition-all duration-500
                    ${
                      isComplete
                        ? 'bg-green-500 border-green-500'
                        : isCurrent
                        ? 'bg-green-500 border-green-500'
                        : 'bg-red-800 border-red-700'
                    }
                  `}
                >
                  {isComplete ? (
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span
                      className={`
                      text-xs sm:text-sm font-medium
                      ${isCurrent ? 'text-green-100' : 'text-gray-100'}
                    `}
                    >
                      {step.id}
                    </span>
                  )}
                </div>

                <h4
                  className={`
                  mt-2 sm:mt-4 text-xs sm:text-sm font-medium transition-colors duration-300
                  ${isCurrent ? 'text-black-100' : 'text-black-100'}
                  ${step.titleClass}
                `}
                >
                  {step.title}
                </h4>

                <p
                  className={`
                  hidden sm:block text-xs transition-colors duration-300
                  ${isCurrent ? 'text-black-100' : 'text-black-100'}
                  ${step.descriptionClass}
                `}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div
        className="bg-black/40 backdrop-blur-md rounded-2xl p-8 mb-8
                    border border-white/20 shadow-lg"
      >
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">
                What are your primary dental concerns?
              </h3>
              <button
                onClick={() => handleUnselectAll('primaryConcerns')}
                className="px-4 py-2 text-sm text-white hover:text-white
                         bg-red-500/70 hover:bg-red-500
                         rounded-lg transition-colors"
              >
                Unselect All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formOptions.primaryConcerns.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionToggle('primaryConcerns', option)}
                  className={`
                    p-4 rounded-xl text-left transition-all duration-300
                    ${
                      formData.primaryConcerns.includes(option)
                        ? 'bg-green-500/20 border-green-500'
                        : 'bg-white/5 border-white/20'
                    }
                    border hover:border-green-500/50
                  `}
                >
                  <span className="text-white">{option}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">
                Select your previous dental treatments:
              </h3>
              <button
                onClick={() => handleUnselectAll('dentalHistory')}
                className="px-4 py-2 text-sm text-white hover:text-white
                         bg-red-500/70 hover:bg-red-500
                         rounded-lg transition-colors"
              >
                Unselect All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formOptions.dentalHistory.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionToggle('dentalHistory', option)}
                  className={`
                    p-4 rounded-xl text-left transition-all duration-300
                    ${
                      formData.dentalHistory.includes(option)
                        ? 'bg-green-500/20 border-green-500'
                        : 'bg-white/5 border-white/20'
                    }
                    border hover:border-green-500/50
                  `}
                >
                  <span className="text-white">{option}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              How often do you brush your teeth?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formOptions.oralHygiene.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionToggle('oralHygiene', option)}
                  className={`
                    p-4 rounded-xl text-left transition-all duration-300
                    ${
                      formData.oralHygiene === option
                        ? 'bg-green-500/20 border-green-500'
                        : 'bg-white/5 border-white/20'
                    }
                    border hover:border-green-500/50
                  `}
                >
                  <span className="text-white">{option}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">
                Select any applicable lifestyle factors:
              </h3>
              <button
                onClick={() => handleUnselectAll('lifestyleFactors')}
                className="px-4 py-2 text-sm text-white hover:text-white
                         bg-red-500/70 hover:bg-red-500
                         rounded-lg transition-colors"
              >
                Unselect All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formOptions.lifestyleFactors.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionToggle('lifestyleFactors', option)}
                  className={`
                    p-4 rounded-xl text-left transition-all duration-300
                    ${
                      formData.lifestyleFactors.includes(option)
                        ? 'bg-green-500/20 border-green-500'
                        : 'bg-white/5 border-white/20'
                    }
                    border hover:border-green-500/50
                  `}
                >
                  <span className="text-white">{option}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between space-x-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBack}
          disabled={currentStep === 1}
          className="px-6 py-3 rounded-lg bg-black/40 text-white
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-white/40 hover:text-black transition-all duration-300"
        >
          Back
        </motion.button>

        {currentStep < steps.length ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            disabled={!isStepComplete()}
            className="px-6 py-3 rounded-lg
                     bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                     text-white font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:shadow-lg hover:shadow-[#FF6F3C]/20
                     transition-all duration-300"
          >
            Next
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!isStepComplete() || isSubmitting}
            className="px-6 py-3 rounded-lg
                     bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                     text-white font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:shadow-lg hover:shadow-[#FF6F3C]/20
                     transition-all duration-300
                     relative overflow-hidden
                     hover:bg-white/10 backdrop-blur-sm"
          >
            {isSubmitting ? 'Analyzing...' : 'Get AI Analysis'}
            {isSubmitting && (
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                           animate-[shimmer_2s_infinite]"
              />
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}