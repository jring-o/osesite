
import React, { useRef, useLayoutEffect, useState } from "react";

const CELL_SIZE = 25;

const GridBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function updateDims() {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: Math.ceil(width),
          height: Math.ceil(height),
        });
      }
    }
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  const GRID_COLS = Math.ceil(dimensions.width / CELL_SIZE);
  const GRID_ROWS = Math.ceil(dimensions.height / CELL_SIZE);

  const mask = `
    linear-gradient(
      to right,
      transparent 0%,
      black 20vw,
      black calc(50vw - 600px),
      black calc(50vw + 600px),
      black 80vw,
      transparent 100%
    )
  `;

  return (
    <div
      className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden"
      ref={containerRef}
      style={{ minHeight: "100%" }}
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <div
          className="grid w-full h-full"
          style={{
            gridTemplateColumns: `repeat(${GRID_COLS}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, ${CELL_SIZE}px)`
          }}
        >
          {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => (
            <div
              key={i}
              className="border-[0.5px] border-brand-blue/5 dark:border-brand-green/5"
              style={{
                minWidth: 0,
                minHeight: 0,
                width: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
                aspectRatio: "1 / 1"
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-green/10" />
    </div>
  );
};

export default GridBackground;
