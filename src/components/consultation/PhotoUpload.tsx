import React, { useRef, useState, useEffect } from 'react';
import { Camera, Upload, X, SwitchCamera as FlipCamera2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface PhotoUploadProps {
  previewUrls: string[];
  onImageUpload: (files: FileList) => void;
  onImageRemove: (index: number) => void;
}

const requiredViews = [
  'Front view with teeth together',
  'Upper teeth view',
  'Lower teeth view',
];

export function PhotoUpload({
  previewUrls,
  onImageUpload,
  onImageRemove,
}: PhotoUploadProps) {
  const [hasCamera, setHasCamera] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const [showCameraUI, setShowCameraUI] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const cameraInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Check if device has camera
  useEffect(() => {
    const checkCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasVideoDevice = devices.some(
          (device) => device.kind === 'videoinput'
        );
        setHasCamera(hasVideoDevice);
      } catch (error) {
        console.error('Error checking camera:', error);
        setHasCamera(false);
      }
    };

    checkCamera();
  }, []);

  // Handle camera stream cleanup
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraStream]);

  const startCamera = async () => {
    try {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: false,
      });

      setCameraStream(stream);
      setShowCameraUI(true);
      setPermissionDenied(false);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        // Apply CSS transform for front camera to fix mirroring
        if (facingMode === 'user') {
          videoRef.current.style.transform = 'scaleX(-1)';
        } else {
          videoRef.current.style.transform = 'none';
        }
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setPermissionDenied(true);
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
    setShowCameraUI(false);
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
    if (showCameraUI) {
      startCamera(); // Restart camera with new facing mode
    }
  };

  const capturePhoto = () => {
    // Check if we already have 3 photos
    if (previewUrls.length >= 3) {
      alert(
        'You have already captured 3 photos. Please remove one to capture a new photo.'
      );
      stopCamera();
      return;
    }

    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext('2d');
      if (context) {
        // Apply horizontal flip for front camera when capturing
        if (facingMode === 'user') {
          context.scale(-1, 1);
          context.translate(-canvas.width, 0);
        }
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], `camera-photo-${Date.now()}.jpg`, {
              type: 'image/jpeg',
            });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            onImageUpload(dataTransfer.files);
          }
        }, 'image/jpeg');
      }
    }
    stopCamera();
  };

  const handleCameraClick = () => {
    // Check if we already have 3 photos
    if (previewUrls.length >= 3) {
      alert(
        'You have already captured 3 photos. Please remove one to capture a new photo.'
      );
      return;
    }

    if (!showCameraUI) {
      startCamera();
    }
  };

  const handleFileClick = () => {
    // Check if we already have 3 photos
    if (previewUrls.length >= 3) {
      alert(
        'You have already uploaded 3 photos. Please remove one to upload a new photo.'
      );
      return;
    }

    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Check if adding new files would exceed 3 photos
      if (previewUrls.length + e.target.files.length > 3) {
        alert(
          'You can only upload a maximum of 3 photos. Please remove some photos first.'
        );
        return;
      }

      onImageUpload(e.target.files);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">
          Required Photos
        </h3>
        <div className="space-y-4 mb-6">
          {requiredViews.map((view, index) => (
            <div key={view} className="flex items-center justify-between">
              <span className="text-white/90">
                {index + 1}. {view}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Camera UI */}
          {showCameraUI && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <div className="relative w-full max-w-2xl">
                {/* Camera Mode Indicator */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white">
                  {facingMode === 'user' ? 'Front Camera' : 'Back Camera'}
                </div>

                {/* Camera Preview */}
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full rounded-xl"
                />
                <canvas ref={canvasRef} className="hidden" />

                {/* Camera Controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  {/* Camera Flip Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleCamera}
                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm"
                  >
                    <FlipCamera2 className="w-6 h-6 text-white" />
                  </motion.button>

                  {/* Capture Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={capturePhoto}
                    className="p-4 rounded-full bg-white shadow-lg"
                  >
                    <Camera className="w-6 h-6 text-black" />
                  </motion.button>
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={stopCamera}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>
          )}

          {/* Camera Button */}
          {hasCamera && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCameraClick}
              className="flex items-center justify-center w-32 h-32 rounded-xl
                       bg-white/5 border-2 border-dashed border-white/20
                       hover:border-white/30 hover:bg-white/10
                       transition-all duration-300 cursor-pointer
                       relative"
              disabled={showCameraUI}
            >
              <Camera className="w-8 h-8 text-white/60" />
              {permissionDenied && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-2 text-center">
                  <p className="text-xs text-red-400">
                    Camera permission denied. Please enable it in your browser
                    settings.
                  </p>
                </div>
              )}
            </motion.button>
          )}

          {/* File Upload Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFileClick}
            className="flex items-center justify-center w-32 h-32 rounded-xl
                     bg-white/5 border-2 border-dashed border-white/20
                     hover:border-white/30 hover:bg-white/10
                     transition-all duration-300 cursor-pointer"
          >
            <Upload className="w-8 h-8 text-white/60" />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
          </motion.button>

          {/* Image Previews */}
          {previewUrls.map((url, index) => (
            <div key={index} className="relative w-32 h-32">
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onImageRemove(index)}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-red-500/90
                         hover:bg-red-500 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          ))}
        </div>

        {/* Required Photos Warning */}
        {previewUrls.length < 3 && (
          <p className="mt-4 text-red-500 text-sm">
            Please take all 3 required photos to proceed. You have{' '}
            {3 - previewUrls.length} photo
            {3 - previewUrls.length !== 1 ? 's' : ''} remaining.
          </p>
        )}
      </div>
    </div>
  );
}