import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Upload, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { formOptions } from './formOptions';
import { PhotoUpload } from './PhotoUpload';
import { AnalysisResults } from './AnalysisResults';
import type { FormData, AnalysisResult } from './types';
import { getChatResponse } from '../../lib/gemini';
import { StepIndicator } from './StepIndicator';

const initialFormData: FormData = {
  primaryConcerns: [],
  dentalHistory: [],
  oralHygiene: '',
  lifestyleFactors: [],
  images: []
};

const steps = [
  { id: 1, title: 'Primary Concerns', description: 'Share your dental concerns' },
  { id: 2, title: 'Dental History', description: 'Previous treatments & procedures' },
  { id: 3, title: 'Oral Hygiene', description: 'Your daily dental care habits' },
  { id: 4, title: 'Lifestyle', description: 'Factors affecting your dental health' },
  { id: 5, title: 'Photos', description: 'Upload clear dental images' }
];

export function ConsultationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
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
        return formData.images.length > 0;
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepComplete() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Simulate AI analysis - replace with actual API call
      const result: AnalysisResult = {
        toothCondition: 85,
        gumHealth: 90,
        alignment: 75,
        hygieneScore: 88,
        concerns: [
          "Minor plaque buildup detected",
          "Slight misalignment in lower teeth",
          "Early signs of enamel wear"
        ],
        recommendations: [
          "Schedule professional cleaning",
          "Consider orthodontic consultation",
          "Use enamel-strengthening toothpaste",
          "Maintain current oral hygiene routine"
        ]
      };
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing dental condition:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (analysisResult) {
    return <AnalysisResults result={analysisResult} images={formData.images.map(file => URL.createObjectURL(file))} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} steps={steps} />

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="mt-12">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                What dental concerns bring you here today?
              </h3>
              <p className="text-white/90 mb-6">
                Select all that apply to receive a personalized analysis
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formOptions.primaryConcerns.map((concern) => (
                  <label
                    key={concern}
                    className={`
                      flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
                      ${formData.primaryConcerns.includes(concern)
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-white/10 hover:border-white/30'
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      checked={formData.primaryConcerns.includes(concern)}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          primaryConcerns: e.target.checked
                            ? [...prev.primaryConcerns, concern]
                            : prev.primaryConcerns.filter(c => c !== concern)
                        }));
                      }}
                      className="sr-only"
                    />
                    <Check 
                      className={`
                        w-5 h-5 mr-3 transition-all duration-300
                        ${formData.primaryConcerns.includes(concern)
                          ? 'text-violet-500 scale-100'
                          : 'text-white/30 scale-75'
                        }
                      `}
                    />
                    <span className="text-white">{concern}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Previous Dental History
              </h3>
              <p className="text-white/90 mb-6">
                Select any previous dental treatments you've had
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formOptions.dentalHistory.map((item) => (
                  <label
                    key={item}
                    className={`
                      flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
                      ${formData.dentalHistory.includes(item)
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-white/10 hover:border-white/30'
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      checked={formData.dentalHistory.includes(item)}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          dentalHistory: e.target.checked
                            ? [...prev.dentalHistory, item]
                            : prev.dentalHistory.filter(h => h !== item)
                        }));
                      }}
                      className="sr-only"
                    />
                    <Check 
                      className={`
                        w-5 h-5 mr-3 transition-all duration-300
                        ${formData.dentalHistory.includes(item)
                          ? 'text-violet-500 scale-100'
                          : 'text-white/30 scale-75'
                        }
                      `}
                    />
                    <span className="text-white">{item}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Oral Hygiene Habits
              </h3>
              <p className="text-white/90 mb-6">
                How often do you brush your teeth?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formOptions.oralHygiene.map((frequency) => (
                  <label
                    key={frequency}
                    className={`
                      flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
                      ${formData.oralHygiene === frequency
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-white/10 hover:border-white/30'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="oralHygiene"
                      value={frequency}
                      checked={formData.oralHygiene === frequency}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          oralHygiene: e.target.value
                        }));
                      }}
                      className="sr-only"
                    />
                    <Check 
                      className={`
                        w-5 h-5 mr-3 transition-all duration-300
                        ${formData.oralHygiene === frequency
                          ? 'text-violet-500 scale-100'
                          : 'text-white/30 scale-75'
                        }
                      `}
                    />
                    <span className="text-white">{frequency}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Lifestyle Factors
              </h3>
              <p className="text-white/90 mb-6">
                Select any factors that apply to you
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formOptions.lifestyleFactors.map((factor) => (
                  <label
                    key={factor}
                    className={`
                      flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
                      ${formData.lifestyleFactors.includes(factor)
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-white/10 hover:border-white/30'
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      checked={formData.lifestyleFactors.includes(factor)}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          lifestyleFactors: e.target.checked
                            ? [...prev.lifestyleFactors, factor]
                            : prev.lifestyleFactors.filter(f => f !== factor)
                        }));
                      }}
                      className="sr-only"
                    />
                    <Check 
                      className={`
                        w-5 h-5 mr-3 transition-all duration-300
                        ${formData.lifestyleFactors.includes(factor)
                          ? 'text-violet-500 scale-100'
                          : 'text-white/30 scale-75'
                        }
                      `}
                    />
                    <span className="text-white">{factor}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PhotoUpload
                previewUrls={formData.images.map(file => URL.createObjectURL(file))}
                onImageUpload={(files) => {
                  setFormData(prev => ({
                    ...prev,
                    images: [...prev.images, ...Array.from(files)]
                  }));
                }}
                onImageRemove={(index) => {
                  setFormData(prev => ({
                    ...prev,
                    images: prev.images.filter((_, i) => i !== index)
                  }));
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            type="button"
            onClick={handleBack}
            className={`
              flex items-center px-6 py-3 rounded-xl
              text-white font-medium
              transition-all duration-300
              ${currentStep === 1
                ? 'opacity-50 cursor-not-allowed bg-gray-500'
                : 'bg-gray-700 hover:bg-gray-600'
              }
            `}
            disabled={currentStep === 1}
            whileHover={currentStep !== 1 ? { scale: 1.02 } : undefined}
            whileTap={currentStep !== 1 ? { scale: 0.98 } : undefined}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </motion.button>

          {currentStep < steps.length ? (
            <motion.button
              type="button"
              onClick={handleNext}
              className={`
                flex items-center px-6 py-3 rounded-xl
                text-white font-medium
                transition-all duration-300
                ${isStepComplete()
                  ? 'bg-violet-600 hover:bg-violet-500'
                  : 'opacity-50 cursor-not-allowed bg-violet-800'
                }
              `}
              disabled={!isStepComplete()}
              whileHover={isStepComplete() ? { scale: 1.02 } : undefined}
              whileTap={isStepComplete() ? { scale: 0.98 } : undefined}
            >
              Next
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`
                flex items-center px-8 py-3 rounded-xl
                bg-gradient-to-r from-violet-600 to-indigo-600
                text-white font-medium
                transition-all duration-300
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-violet-500 hover:to-indigo-500'}
              `}
              whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
              whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
            >
              {isSubmitting ? 'Analyzing...' : 'Get AI Analysis'}
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
}