import React, { useRef } from 'react';
import { Logo } from './Logo';
import { X, Upload, RotateCcw, Check, Sparkles } from 'lucide-react';

interface LogoCustomizerModalProps {
  customLogoUrl: string | null;
  onUpdateLogo: (url: string | null) => void;
  onClose: () => void;
}

export const LogoCustomizerModal: React.FC<LogoCustomizerModalProps> = ({
  customLogoUrl,
  onUpdateLogo,
  onClose
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onUpdateLogo(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#121217] border border-[#C9A86C]/30 rounded-2xl p-6 sm:p-8 text-[#EDEDED] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#9E9EA8] hover:text-white bg-[#22222C] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A86C] font-semibold mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Brand Identity & Logo Configuration</span>
        </div>

        <h3 className="font-serif text-2xl text-white">
          DUNYALAND Logo & Emblems
        </h3>
        <p className="text-xs text-[#8E8E9A] mt-1 leading-relaxed">
          Currently displaying the exact circular D L Global Emblem with the tripartite Navy, Cognac, and Slate circular arrow ring around the world globe. You can also upload any alternate file anytime.
        </p>

        {/* Live Preview Box */}
        <div className="my-6 p-6 bg-[#0A0A0C] border border-[#262633] rounded-xl flex flex-col items-center justify-center min-h-[120px]">
          <span className="text-[10px] uppercase tracking-wider text-[#666675] mb-3">
            Current Header Brand Rendering
          </span>
          <Logo customLogoUrl={customLogoUrl} />
        </div>

        {/* Action Controls */}
        <div className="space-y-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#DFBF7A] via-[#C9A86C] to-[#B38944] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Your Exact Logo File</span>
          </button>

          {customLogoUrl && (
            <button
              onClick={() => onUpdateLogo(null)}
              className="w-full py-2.5 px-4 bg-[#1C1C24] hover:bg-[#252530] text-xs text-[#C5C5D1] rounded flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Dunyaland Luxury Crest</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 border border-[#2D2D38] hover:border-[#3D3D48] text-xs text-white rounded transition-colors flex items-center justify-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5 text-[#3DD68C]" />
            <span>Confirm & Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
