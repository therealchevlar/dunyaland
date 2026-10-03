import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'compact';
  customLogoUrl?: string | null;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  customLogoUrl,
  size = 44
}) => {
  if (customLogoUrl) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src={customLogoUrl}
          alt="DUNYALAND Real Estate & Marketing"
          className="h-11 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(201,168,108,0.3)]"
        />
        {variant !== 'mark' && (
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-[0.22em] text-lg text-white leading-none">
              DUNYALAND
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#C9A86C] font-semibold mt-1">
              Real Estate & Marketing
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 group ${className}`}>
      {/* The EXACT D L Global Emblem Logo */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
        >
          <defs>
            <clipPath id="globeMask">
              <circle cx="250" cy="250" r="162" />
            </clipPath>
          </defs>

          {/* --- 1. OUTER THREE-SEGMENT ARROW RING --- */}
          {/* Top Navy Blue Segment (Clockwise, arrow pointing into right segment) */}
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

          {/* Right Cognac / Golden-Brown Segment (Clockwise, arrow pointing towards bottom) */}
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

          {/* Bottom-Left Slate Grey Segment (Clockwise, arrow pointing upwards to left) */}
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

          {/* Crisp White Arrowhead Gaps */}
          <polygon points="115,118 142,165 125,142" fill="#0A0A0B" />
          <polygon points="405,148 378,188 418,205" fill="#0A0A0B" />
          <polygon points="292,452 278,402 242,422" fill="#0A0A0B" />

          {/* --- 2. INNER WHITE GLOBE DISC WITH WORLD MAP CONTINENTS --- */}
          <circle cx="250" cy="250" r="162" fill="#FFFFFF" />

          {/* World Map Silhouette clipped to circular globe */}
          <g clipPath="url(#globeMask)" fill="#BFC5CB">
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
            {/* South Asia & Pakistan */}
            <path d="M 285 190 C 305 185 325 195 330 215 C 320 230 305 235 290 220 Z" />
            {/* Australia */}
            <path d="M 355 285 C 375 280 395 295 390 320 C 375 335 355 330 350 310 Z" />
          </g>

          {/* --- 3. MONOGRAM: NAVY "D", COGNAC "L", AND HORIZON SWOOSH --- */}
          {/* Classic Navy Serif "D" */}
          <path
            d="M 185 172 
               L 242 172 
               C 275 172 302 195 302 235 
               C 302 274 275 296 240 296 
               L 175 296 
               L 175 282 
               L 190 282 
               L 190 186 
               L 175 186 
               L 175 172 
               Z 
               M 205 186 
               L 205 282 
               L 235 282 
               C 258 282 280 268 280 235 
               C 280 202 258 186 235 186 
               Z"
            fill="#0C2B5B"
          />

          {/* Classic Cognac/Brown Serif "L" Intersecting D */}
          <path
            d="M 238 200 
               L 254 200 
               L 254 278 
               L 305 278 
               L 305 296 
               L 230 296 
               L 230 282 
               L 238 282 
               Z"
            fill="#9E5719"
          />

          {/* Horizon Swoosh - Left Navy Wing */}
          <path
            d="M 125 318 
               C 175 290 235 280 250 280 
               L 250 298 
               C 230 298 178 305 125 318 
               Z"
            fill="#0C2B5B"
          />

          {/* Horizon Swoosh - Right Cognac Wing */}
          <path
            d="M 250 280 
               C 275 280 325 292 355 318 
               C 325 305 275 298 250 298 
               Z"
            fill="#9E5719"
          />
        </svg>
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold tracking-[0.22em] text-lg sm:text-xl text-white group-hover:text-[#F3E7C4] transition-colors leading-none">
              DUNYALAND
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.28em] text-[#C9A86C] font-semibold mt-1">
            Real Estate & Marketing
          </span>
        </div>
      )}
    </div>
  );
};
