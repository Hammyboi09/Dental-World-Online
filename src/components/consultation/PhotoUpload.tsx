import React from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PhotoUploadProps {
  previewUrls: string[];
  onImageUpload: (files: FileList) => void;
  onImageRemove: (index: number) => void;
}

export function PhotoUpload({ previewUrls, onImageUpload, onImageRemove }: PhotoUploadProps) {
  return (
    <div className="space-y-4">
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Photo Upload</h3>
        <p className="text-white/80 mb-4">
          Please upload clear photos of your teeth from these angles:
          <br />- Front view with teeth together
          <br />- Upper teeth view
          <br />- Lower teeth view
        </p>
        
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center justify-center w-32 h-32 rounded-xl
                         bg-white/5 border-2 border-dashed border-white/20
                         hover:border-white/30 hover:bg-white/10
                         transition-all duration-300 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => e.target.files && onImageUpload(e.target.files)}
            />
            <Camera className="w-8 h-8 text-white/60" />
          </label>

          <label className="flex items-center justify-center w-32 h-32 rounded-xl
                         bg-white/5 border-2 border-dashed border-white/20
                         hover:border-white/30 hover:bg-white/10
                         transition-all duration-300 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => e.target.files && onImageUpload(e.target.files)}
            />
            <Upload className="w-8 h-8 text-white/60" />
          </label>

          {previewUrls.map((url, index) => (
            <div key={index} className="relative w-32 h-32">
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
              <button
                onClick={() => onImageRemove(index)}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-red-500/90
                         hover:bg-red-500 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}