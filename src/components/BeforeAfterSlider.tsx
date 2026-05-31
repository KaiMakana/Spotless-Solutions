import React, { useState, useRef, useEffect } from "react";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  title,
  beforeLabel = "Before",
  afterLabel = "After"
}: {
  beforeSrc: string;
  afterSrc: string;
  title?: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full">
      {title && (
        <h4 className="text-sm font-semibold text-slate-700 text-center tracking-normal">
          {title}
        </h4>
      )}
      <div
        ref={containerRef}
        id={`slider-${title?.replace(/\s+/g, '-').toLowerCase() || 'default'}`}
        className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize bg-slate-900 border-2 border-white/80"
        onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Background) */}
        <img
          src={afterSrc}
          alt="After cleaning Spotless Solutions"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute right-4 top-4 bg-emerald-600/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-xs shadow-md z-10 select-none">
          {afterLabel}
        </div>

        {/* BEFORE IMAGE (Clipped overlay) */}
        <img
          src={beforeSrc}
          alt="Before cleaning Spotless Solutions"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        />
        <div className="absolute left-4 top-4 bg-slate-900/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-xs shadow-md z-10 select-none">
          {beforeLabel}
        </div>

        {/* SPLIT HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 pointer-events-none z-20 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Draggable knob */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-brand-blue border-4 border-white shadow-2xl flex items-center justify-center text-white pointer-events-none hover:scale-110 active:scale-95 transition-transform duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4 text-white rotate-90"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-center text-[11px] text-slate-500 font-mono tracking-tight mt-1 select-none">
        ← Drag the knob left and right to inspect restoration →
      </p>
    </div>
  );
}
