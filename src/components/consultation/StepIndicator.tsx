import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface StepIndicatorProps {
  currentStep: number;
  steps: Step[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-800/50">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 to-sky-500 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Steps */}
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
              {/* Step Circle */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  border-2 transition-all duration-500
                  ${isComplete
                    ? 'bg-sky-500 border-sky-500'
                    : isCurrent
                      ? 'bg-sky-500/20 border-sky-500'
                      : 'bg-gray-800/50 border-gray-700'
                  }
                `}
              >
                {isComplete ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <span className={`
                    text-sm font-medium
                    ${isCurrent ? 'text-sky-400' : 'text-gray-400'}
                  `}>
                    {step.id}
                  </span>
                )}
              </div>

              {/* Step Title */}
              <h4 className={`
                mt-4 text-sm font-medium transition-colors duration-300
                ${isCurrent ? 'text-gray-800' : 'text-gray-600'}
              `}>
                {step.title}
              </h4>

              {/* Step Description */}
              <p className={`
                text-xs transition-colors duration-300
                ${isCurrent ? 'text-gray-600' : 'text-gray-500'}
              `}>
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}