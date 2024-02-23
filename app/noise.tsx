import React, { useEffect, useRef } from 'react';

const TVNoise: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const resize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = (window.innerWidth * window.devicePixelRatio) / 1;
        canvas.height = (window.innerHeight * window.devicePixelRatio) / 1;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
      }
    };

    const noise = (context: CanvasRenderingContext2D) => {
      const w = context.canvas.width;
      const h = context.canvas.height;
      const iData = context.createImageData(w, h);
      const buffer32 = new Uint32Array(iData.data.buffer);
      const len = buffer32.length;
      let i = 1;

      for (; i < len; i++) if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

      context.putImageData(iData, 0, 0);
    };

    const loop = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          noise(ctx);
          animationFrameId = requestAnimationFrame(loop);
        }
      }
    };

    resize();
    window.addEventListener('resize', resize);
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default TVNoise;