import React from 'react';
import { motion } from 'framer-motion';
import type { AnalysisResult } from './types';

interface AnalysisResultsProps {
  result: AnalysisResult;
  images: string[];
  onStartAgain: () => void;
}

export function AnalysisResults({ result, images, onStartAgain }: AnalysisResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-6">AI Analysis Results</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ScoreCard label="Tooth Condition" score={result.toothCondition} />
          <ScoreCard label="Gum Health" score={result.gumHealth} />
          <ScoreCard label="Alignment" score={result.alignment} />
          <ScoreCard label="Hygiene Score" score={result.hygieneScore} />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Areas of Concern</h4>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              {result.concerns.map((concern, index) => (
                <li key={index}>{concern}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-3">Recommendations</h4>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              {result.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Analyzed Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((url, index) => (
            <div key={index} className="relative aspect-square">
              <img
                src={url}
                alt={`Analysis ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Start Again Button */}
      <motion.button
        onClick={onStartAgain}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-xl
                 bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                 text-white text-lg font-semibold
                 transform transition-all duration-300
                 hover:shadow-lg hover:shadow-[#FF6F3C]/20
                 relative overflow-hidden
                 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                     opacity-0 group-hover:opacity-100 
                     -translate-x-full group-hover:translate-x-full 
                     transition-all duration-700 ease-out" />
        <span className="relative z-10">Start New Consultation</span>
      </motion.button>
    </motion.div>
  );
}

function ScoreCard({ label, score }: { label: string; score: number }) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white/5 rounded-lg p-4">
      <div className="text-sm text-white/80 mb-2">{label}</div>
      <div className="text-2xl font-bold text-white">{score}%</div>
      <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${getScoreColor(score)} transition-all duration-1000`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}