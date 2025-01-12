export interface FormData {
  primaryConcerns: string[];
  dentalHistory: string[];
  oralHygiene: string;
  lifestyleFactors: string[];
  images: File[];
}

export interface AnalysisResult {
  toothCondition: number;
  gumHealth: number;
  alignment: number;
  hygieneScore: number;
  concerns: string[];
  recommendations: string[];
}