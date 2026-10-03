import React from 'react';

interface DunyalandExactLogoProps {
  className?: string;
  size?: number | string;
  withText?: boolean;
}

export const DunyalandExactLogo: React.FC<DunyalandExactLogoProps> = ({
  className = '',
  size = 48,
  withText = true
}) => {
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {/* Exact Circular Corporate Emblem SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
      >
        <defs>
          <clipPath id="globeClip">
            <circle cx="250" cy="250" r="162" />
          </clipPath>
        </defs>

        {/* --- 1. OUTER THREE-SEGMENT ARROW RING --- */}
        {/* Navy Segment (Top, Clockwise) */}
        {/* Arc from ~9:30 o'clock to 2 o'clock with arrowhead */}
        <path
          d="M 125 142 
             L 115 118 
             A 210 210 0 0 1 405 148 
             L 418 205 
             L 378 188 
             A 170 170 0 0 0 148 152 
             Z"
          fill="#0C2B5B"
        />

        {/* Cognac / Brown Segment (Right / Bottom-Right, Clockwise) */}
        {/* Arc from ~2 o'clock to 5:30 o'clock with arrowhead */}
        <path
          d="M 405 170 
             L 428 178 
             A 210 210 0 0 1 292 452 
             L 242 422 
             L 278 402 
             A 170 170 0 0 0 382 208 
             Z"
          fill="#9E5719"
        />

        {/* Slate Grey Segment (Bottom-Left / Left, Clockwise) */}
        {/* Arc from ~5:30 o'clock to 9:30 o'clock with arrowhead */}
        <path
          d="M 270 442 
             L 262 468 
             A 210 210 0 0 1 92 152 
             L 142 165 
             L 122 195 
             A 170 170 0 0 0 252 418 
             Z"
          fill="#63676E"
        />

        {/* Crisp Chevron Separator Lines (ensuring razor-sharp arrowheads) */}
        {/* Gap between Grey & Navy (Upper Left) */}
        <polygon points="115,118 142,165 125,142" fill="white" />
        {/* Gap between Navy & Brown (Upper Right) */}
        <polygon points="405,148 378,188 418,205" fill="white" />
        {/* Gap between Brown & Grey (Bottom) */}
        <polygon points="292,452 278,402 242,422" fill="white" />

        {/* --- 2. INNER WHITE GLOBE DISC WITH WORLD MAP SILHOUETTE --- */}
        <circle cx="250" cy="250" r="162" fill="#FFFFFF" />

        {/* World Map Silhouette clipped to the inner globe */}
        <g clipPath="url(#globeClip)" fill="#C0C5CA">
          {/* North America */}
          <path d="M 125 150 C 135 130 160 120 185 135 C 195 142 205 140 215 150 C 210 165 195 170 185 185 C 175 195 160 200 150 190 C 138 180 125 168 125 150 Z" />
          {/* Greenland */}
          <path d="M 215 110 C 225 105 240 108 245 118 C 240 128 225 130 218 125 Z" />
          {/* South America */}
          <path d="M 155 235 C 170 230 185 245 188 265 C 190 290 178 325 165 350 C 158 355 152 340 155 315 C 158 290 150 260 155 235 Z" />
          {/* Europe */}
          <path d="M 245 140 C 255 132 275 130 285 142 C 280 152 268 158 258 165 C 248 160 245 148 245 140 Z" />
          {/* Africa */}
          <path d="M 240 185 C 260 175 285 180 295 205 C 300 235 295 280 278 315 C 265 338 250 330 248 300 C 245 270 235 235 238 200 Z" />
          {/* Asia */}
          <path d="M 285 130 C 320 120 370 130 385 160 C 390 185 365 210 345 220 C 330 210 320 195 305 185 C 295 170 288 150 285 130 Z" />
          {/* South Asia & Middle East */}
          <path d="M 285 190 C 305 185 325 195 330 215 C 320 230 305 235 290 220 Z" />
          {/* Australia & Oceania */}
          <path d="M 355 285 C 375 280 395 295 390 320 C 375 335 355 330 350 310 Z" />
        </g>

        {/* --- 3. THE EMBLEM'S CENTRAL MONOGRAM & SWOOSH --- */}
        {/* Navy Letter "D" */}
        <path
          d="M 185 175 
             L 242 175 
             C 272 175 300 195 300 235 
             C 300 272 272 295 240 295 
             L 175 295 
             L 175 282 
             L 190 282 
             L 190 188 
             L 175 188 
             L 175 175 
             Z 
             M 203 188 
             L 203 282 
             L 235 282 
             C 258 282 278 268 278 235 
             C 278 202 258 188 235 188 
             Z"
          fill="#0C2B5B"
        />

        {/* Interlocking Cognac/Brown Letter "L" */}
        <path
          d="M 238 200 
             L 253 200 
             L 253 278 
             L 305 278 
             L 305 295 
             L 230 295 
             L 230 282 
             L 238 282 
             Z"
          fill="#9E5719"
        />

        {/* Lower Curved Horizon Swoosh (Dual Tone) */}
        {/* Navy Left Wing */}
        <path
          d="M 125 318 
             C 175 290 235 280 250 280 
             L 250 298 
             C 230 298 178 305 125 318 
             Z"
          fill="#0C2B5B"
        />

        {/* Cognac/Brown Right Wing */}
        <path
          d="M 250 280 
             C 275 280 325 292 355 318 
             C 325 305 275 298 250 298 
             Z"
          fill="#9E5719"
        />
      </svg>

      {/* Typography Lockup */}
      {withText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-bold tracking-[0.24em] text-lg sm:text-xl text-white leading-none">
            DUNYALAND
          </span>
          <span className="text-[9px] uppercase tracking-[0.32em] text-[#C9A86C] font-semibold mt-1">
            Real Estate & Marketing
          </span>
        </div>
      )}
    </div>
  );
};
