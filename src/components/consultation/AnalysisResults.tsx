import React from 'react';
import { motion } from 'framer-motion';
import type { AnalysisResult } from './types';
import { Check } from 'lucide-react';

interface AnalysisResultsProps {
  result: AnalysisResult;
  onStartAgain: () => void;
}

export function AnalysisResults({
  result,
  onStartAgain,
}: AnalysisResultsProps) {
  // Calculate overall health score based on multiple factors
  const calculateOverallHealth = () => {
    const weights = {
      toothCondition: 0.3,
      gumHealth: 0.3,
      alignment: 0.2,
      hygieneScore: 0.2
    };

    const weightedScore = 
      (result.toothCondition * weights.toothCondition) +
      (result.gumHealth * weights.gumHealth) +
      (result.alignment * weights.alignment) +
      (result.hygieneScore * weights.hygieneScore);

    return Math.round(weightedScore);
  };

  const overallHealth = calculateOverallHealth();

  // Get health status text and color
  const getHealthStatus = (score: number) => {
    if (score >= 90) return { text: 'Perfect', color: 'emerald' };
    if (score >= 75) return { text: 'Good', color: 'green' };
    if (score >= 60) return { text: 'Okay', color: 'yellow' };
    if (score >= 40) return { text: 'Needs Attention', color: 'orange' };
    return { text: 'Immediate Action Required', color: 'red' };
  };

  const healthStatus = getHealthStatus(overallHealth);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* AI Analysis Results Container */}
      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-6">
          AI Analysis Results
        </h3>

        {/* Overall Health Status */}
        <div className="mb-8 bg-black/20 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-medium text-white">Overall Dental Health</h4>
            <div className={`px-3 py-1 rounded-full text-sm font-medium
                         bg-${healthStatus.color}-500/20 text-${healthStatus.color}-400
                         border border-${healthStatus.color}-500/30`}>
              {healthStatus.text}
            </div>
          </div>
          
          {/* Modern Health Bar */}
          <div className="relative h-4 bg-black/30 rounded-full overflow-hidden">
            {/* Vibrant Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallHealth}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`absolute h-full rounded-full bg-${healthStatus.color}-500 shadow-md`}
            />
            {/* Score Label */}
            <div className="absolute inset-0 flex items-center justify-end pr-2">
              <span className="text-xs font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {overallHealth}%
              </span>
            </div>
          </div>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ScoreCard label="Tooth Condition" score={result.toothCondition} />
          <ScoreCard label="Gum Health" score={result.gumHealth} />
          <ScoreCard label="Alignment" score={result.alignment} />
          <ScoreCard label="Hygiene Score" score={result.hygieneScore} />
        </div>

        <div className="space-y-6">
          {/* Areas of Concern */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">
              Areas of Concern
            </h4>
            <ul className="space-y-2">
              {result.concerns.map((concern, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span className="text-white/90">{concern}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">
              Recommendations
            </h4>
            <ul className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Book Appointment Button */}
        <motion.a
          href="https://forms.gle/1jXTixNucSd2sxEQ7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-1/2 py-4 rounded-xl
                   bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                   text-white text-lg font-semibold text-center
                   transform transition-all duration-300
                   hover:shadow-lg hover:shadow-[#FF6F3C]/20
                   relative overflow-hidden
                   group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                       opacity-0 group-hover:opacity-100 
                       -translate-x-full group-hover:translate-x-full 
                       transition-all duration-700 ease-out" />
          <span className="relative z-10">Book Appointment</span>
        </motion.a>

        {/* Start New Consultation Button */}
        <motion.button
          onClick={onStartAgain}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-1/2 py-4 rounded-xl
                   bg-black/50 backdrop-blur-sm
                   text-white text-lg font-semibold
                   transform transition-all duration-300
                   hover:bg-white/50
                   border border-black/20
                   relative overflow-hidden
                   group"
        >
          <span className="relative z-10">Start New Consultation</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

function ScoreCard({ label, score }: { label: string; score: number }) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'emerald';
    if (score >= 60) return 'yellow';
    return 'red';
  };

  const color = getScoreColor(score);

  return (
    <div className="bg-white/5 rounded-lg p-4">
      <div className="text-sm text-white/80 mb-2">{label}</div>
      <div className="text-2xl font-bold text-white">{score}%</div>
      <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full bg-${color}-500 transition-all duration-1000`}
        />
      </div>
    </div>
  );
}
