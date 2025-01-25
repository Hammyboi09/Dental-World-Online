import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhotoUpload } from './PhotoUpload';
import { formOptions } from './formOptions';
import type { FormData, AnalysisResult } from './types';
import { AnalysisResults } from './AnalysisResults';

const initialFormData: FormData = {
  primaryConcerns: [],
  dentalHistory: [],
  oralHygiene: '',
  lifestyleFactors: [],
  images: [],
};

const steps = [
  {
    id: 1,
    title: 'Primary Concerns',
    description: 'Select your main dental concerns',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-40 mx-auto'
  },
  {
    id: 2,
    title: 'Dental History',
    description: 'Tell us about your past treatments',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-44 mx-auto'
  },
  {
    id: 3,
    title: 'Oral Hygiene',
    description: 'Your daily dental care routine',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-44 mx-auto'
  },
  {
    id: 4,
    title: 'Lifestyle Factors',
    description: 'Habits that affect dental health',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-44 mx-auto'
  },
  {
    id: 5,
    title: 'Photos',
    description: 'Upload dental photos',
    titleClass: 'text-center',
    descriptionClass: 'text-center w-32 mx-auto'
  },
];

export function ConsultationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null
  );
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

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

  const handleImageUpload = (files: FileList) => {
    const newImages = Array.from(files);
    const totalImages = formData.images.length + newImages.length;

    if (totalImages > 3) {
      alert('You can only upload a maximum of 3 photos.');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));

    // Create preview URLs for the new images
    const newPreviewUrls = newImages.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
  };

  const handleImageRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));

    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
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
      case 5:
        return formData.images.length === 3; // Require exactly 3 photos
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

  const handleSubmit = async () => {
    if (formData.images.length !== 3) {
      alert('Please provide exactly 3 photos for accurate analysis.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with a delay
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        toothCondition: Math.floor(Math.random() * 30) + 70,
        gumHealth: Math.floor(Math.random() * 30) + 70,
        alignment: Math.floor(Math.random() * 30) + 70,
        hygieneScore: Math.floor(Math.random() * 30) + 70,
        concerns: [
          'Minor plaque buildup detected',
          'Slight gum inflammation observed',
          'Early signs of misalignment noted',
        ],
        recommendations: [
          'Schedule professional cleaning',
          'Consider orthodontic consultation',
          'Improve flossing technique',
          'Use fluoride toothpaste',
        ],
      };

      setAnalysisResult(mockResult);
      setIsSubmitting(false);
    }, 2000);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData(initialFormData);
    setIsSubmitting(false);
    setAnalysisResult(null);
    // Cleanup preview URLs
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls([]);
  };

  if (analysisResult) {
    return (
      <AnalysisResults
        result={analysisResult}
        images={previewUrls}
        onStartAgain={resetForm}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-12 relative">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-black-800">
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
                    w-10 h-10 rounded-full flex items-center justify-center
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
                      className="w-6 h-6 text-white"
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
                      text-sm font-medium
                      ${isCurrent ? 'text-green-100' : 'text-gray-100'}
                    `}
                    >
                      {step.id}
                    </span>
                  )}
                </div>

                <h4
                  className={`
                  mt-4 text-sm font-medium transition-colors duration-300
                  ${isCurrent ? 'text-black-100' : 'text-black-100'}
                  ${step.titleClass}
                `}
                >
                  {step.title}
                </h4>

                <p
                  className={`
                  text-xs transition-colors duration-300
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

        {currentStep === 5 && (
          <PhotoUpload
            previewUrls={previewUrls}
            onImageUpload={handleImageUpload}
            onImageRemove={handleImageRemove}
          />
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!isStepComplete() || isSubmitting}
            className="px-6 py-3 rounded-lg
                     bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                     text-white font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:shadow-lg hover:shadow-[#FF6F3C]/20
                     transition-all duration-300
                     relative overflow-hidden"
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