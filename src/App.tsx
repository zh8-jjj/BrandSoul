import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { questions, resultsData, Band } from './data/questions';
import { RotateCcw, ArrowLeft, Disc3 } from 'lucide-react';

import spotifyIcon from '@/assets/icon/spotify.png';
import appleIcon from '@/assets/icon/applemusic.png';
import wangyiyunIcon from '@/assets/icon/wangyiyyun.png';

// Helper to get robust image URLs
const getImageUrl = (path: string) => {
  if (!path) return '';
  // If it's already a processed asset URL (from import), return it
  return path;
};

type Step = 'landing' | 'question' | 'calculating' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('landing');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Band[]>([]);
  const [resultBand, setResultBand] = useState<Band | null>(null);
  
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1500], [0, 360]);

  const handleStart = () => {
    setStep('question');
    setCurrentQ(0);
    setAnswers([]);
  };

  const handleOptionClick = (band: Band) => {
    const newAnswers = [...answers, band];
    setAnswers(newAnswers);
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setAnswers(answers.slice(0, -1));
      setCurrentQ(currentQ - 1);
    }
  };

  const calculateResult = (finalAnswers: Band[]) => {
    setStep('calculating');
    
    setTimeout(() => {
      const counts = finalAnswers.reduce((acc, band) => {
        acc[band] = (acc[band] || 0) + 1;
        return acc;
      }, {} as Record<Band, number>);
      
      let maxScore = -1;
      let topBand: Band = 'Radiohead';
      
      Object.entries(counts).forEach(([band, score]) => {
        if (score > maxScore) {
          maxScore = score;
          topBand = band as Band;
        }
      });
      
      setResultBand(topBand);
      setStep('result');
      window.scrollTo(0, 0);
    }, 2500);
  };

  return (
    <div className={`min-h-screen w-full bg-bg text-text-primary font-serif overflow-x-hidden relative flex flex-col items-center ${step === 'result' ? '' : 'justify-center p-4 md:p-12'}`}>
      <div className="noise-overlay"></div>
      
      {/* --- GLOBAL SVG FILTERS FOR REALISM --- */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="torn-edge" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
          </filter>
          <filter id="rough-ink" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="paper-texture" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 0.98 0 0 0  0 0.94 0 0 0  0 0 0 0.1 0" in="noise" result="coloredNoise" />
            <feBlend in="SourceGraphic" in2="coloredNoise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      <AnimatePresence mode="wait">
        {step === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-full bg-[#f8f8f8] flex flex-col items-center justify-center z-50 overflow-hidden"
          >
            {/* --- REBELLIOUS COLLAGE ELEMENTS --- */}
            
            {/* 1. Large Torn Sheet Music (Right) */}
            <motion.div 
              initial={{ x: 50, opacity: 0, rotate: 15 }}
              animate={{ x: 0, opacity: 1, rotate: 8 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute top-[10%] right-[5%] md:right-[15%] w-[280px] md:w-[400px] h-[200px] md:h-[280px] bg-[#e8e1cf] flex flex-col justify-center py-8"
              style={{ 
                filter: 'url(#torn-edge) url(#paper-texture)',
                clipPath: 'polygon(2% 4%, 25% 1%, 48% 3%, 75% 0%, 98% 4%, 100% 25%, 97% 50%, 99% 75%, 96% 98%, 75% 96%, 50% 100%, 25% 97%, 4% 99%, 1% 75%, 3% 50%, 0% 25%)'
              }}
            >
              <div className="w-full h-full flex flex-col justify-around px-4 opacity-60" style={{ filter: 'url(#rough-ink)' }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full flex flex-col gap-[6px] md:gap-[8px]">
                    <div className="w-full h-[1.5px] bg-[#222]"></div>
                    <div className="w-full h-[1.5px] bg-[#222]"></div>
                    <div className="w-full h-[1.5px] bg-[#222]"></div>
                    <div className="w-full h-[1.5px] bg-[#222]"></div>
                    <div className="w-full h-[1.5px] bg-[#222]"></div>
                  </div>
                ))}
              </div>
              <span className="absolute top-10 left-8 text-5xl md:text-7xl text-[#111] font-serif rotate-[-15deg]" style={{ filter: 'url(#rough-ink)' }}>𝄞</span>
              <span className="absolute bottom-12 right-10 text-4xl md:text-6xl text-[#111] font-serif rotate-[20deg]" style={{ filter: 'url(#rough-ink)' }}>♫</span>
            </motion.div>

            {/* 2. Torn Vinyl Record (Left) */}
            <motion.div 
              initial={{ x: -50, opacity: 0, rotate: -30 }}
              animate={{ x: 0, opacity: 1, rotate: -12 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[15%] md:top-[20%] left-[-5%] md:left-[10%] w-[200px] md:w-[280px] h-[200px] md:h-[280px] bg-[#dcd7c9] flex items-center justify-center"
              style={{ 
                filter: 'url(#torn-edge) url(#paper-texture)',
                clipPath: 'polygon(5% 10%, 20% 4%, 40% 6%, 60% 2%, 80% 8%, 95% 20%, 97% 40%, 93% 60%, 98% 80%, 85% 95%, 60% 97%, 40% 93%, 20% 98%, 5% 85%, 2% 60%, 6% 40%, 2% 20%)'
              }}
            >
              <div className="w-[85%] h-[85%] rounded-full bg-[#1a1a1a] flex items-center justify-center relative shadow-inner">
                 {/* Grooves */}
                 <div className="absolute inset-[12%] rounded-full border border-white/10"></div>
                 <div className="absolute inset-[24%] rounded-full border border-white/10"></div>
                 <div className="absolute inset-[36%] rounded-full border border-white/10"></div>
                 {/* Center Label */}
                 <div className="w-[35%] h-[35%] rounded-full bg-[#b5ad98] flex items-center justify-center" style={{ filter: 'url(#paper-texture)' }}>
                   <div className="w-[12%] h-[12%] rounded-full bg-[#dcd7c9]"></div>
                 </div>
              </div>
            </motion.div>

            {/* 3. Sketchy Headphones (Bottom Right) */}
            <motion.div 
              initial={{ y: 50, opacity: 0, rotate: 25 }}
              animate={{ y: 0, opacity: 1, rotate: 15 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-[5%] md:bottom-[10%] right-[5%] md:right-[15%] w-[150px] md:w-[220px] h-[150px] md:h-[220px]"
              style={{ filter: 'url(#rough-ink)' }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#111] fill-none" strokeLinecap="round" strokeLinejoin="round">
                {/* Messy Headband */}
                <path d="M40,100 C40,20 160,20 160,100" strokeWidth="6" />
                <path d="M38,100 C38,15 162,15 162,100" strokeWidth="3" />
                <path d="M42,100 C42,25 158,25 158,100" strokeWidth="2" />
                <path d="M35,100 C35,10 165,10 165,100" strokeWidth="1" />
                {/* Messy Earcups */}
                <path d="M30,85 C15,85 15,145 30,145 C45,145 45,85 30,85 Z" fill="#111" />
                <path d="M170,85 C155,85 155,145 170,145 C185,145 185,85 170,85 Z" fill="#111" />
                <path d="M25,80 C10,80 10,150 25,150" strokeWidth="4" />
                <path d="M175,80 C190,80 190,150 175,150" strokeWidth="4" />
                <path d="M28,82 C13,82 13,148 28,148" strokeWidth="2" />
                <path d="M172,82 C187,82 187,148 172,148" strokeWidth="2" />
                {/* Messy Wire */}
                <path d="M35,140 C35,180 80,150 90,190 C100,230 150,170 180,200" strokeWidth="4" />
                <path d="M33,140 C33,182 78,152 88,192 C98,232 148,172 178,202" strokeWidth="2" />
                <path d="M37,140 C37,178 82,148 92,188 C102,228 152,168 182,198" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* 4. Piano Keys Cutout (Bottom Left) */}
            <motion.div 
              initial={{ y: 30, x: -30, opacity: 0, rotate: -20 }}
              animate={{ y: 0, x: 0, opacity: 1, rotate: -10 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-[15%] md:bottom-[20%] left-[5%] md:left-[10%] w-[200px] md:w-[280px] h-[50px] md:h-[70px] bg-[#f0ebd8] border-[3px] md:border-[4px] border-[#222] flex p-1"
              style={{ 
                filter: 'url(#torn-edge) url(#paper-texture)',
                clipPath: 'polygon(1% 4%, 98% 2%, 99% 97%, 2% 98%)' 
              }}
            >
              {Array.from({length: 14}).map((_, i) => (
                <div key={i} className="flex-1 border-r-[2px] md:border-r-[3px] border-[#222] relative bg-transparent">
                  {![2, 6, 9, 13].includes(i) && i !== 13 && (
                    <div className="absolute top-0 right-[-60%] w-[120%] h-[60%] bg-[#222] z-10 border-b-[2px] border-l-[2px] border-r-[2px] border-[#222]" style={{ filter: 'url(#rough-ink)' }}></div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* 5. Sketchy Ink Notes (Center Bottom) */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: 15 }}
              animate={{ scale: 1, opacity: 1, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-[25%] md:bottom-[30%] left-[40%] md:left-[45%] w-[60px] md:w-[90px] h-[60px] md:h-[90px]"
              style={{ filter: 'url(#rough-ink)' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#111] fill-none" strokeLinecap="round" strokeLinejoin="round">
                {/* Note 1 */}
                <ellipse cx="30" cy="80" rx="14" ry="10" fill="#111" transform="rotate(-20 30 80)" />
                <ellipse cx="30" cy="80" rx="12" ry="8" stroke="white" strokeWidth="2" transform="rotate(-20 30 80)" />
                <ellipse cx="30" cy="80" rx="16" ry="12" strokeWidth="2" transform="rotate(-20 30 80)" />
                <path d="M42,80 L42,20 L82,30 L82,70" strokeWidth="8" />
                <path d="M40,80 L40,20 L80,30 L80,70" strokeWidth="4" stroke="white" />
                <path d="M44,80 L44,20 L84,30 L84,70" strokeWidth="2" />
                <path d="M42,35 L82,45" strokeWidth="10" />
                <path d="M42,35 L82,45" strokeWidth="4" stroke="white" />
                {/* Note 2 */}
                <ellipse cx="70" cy="70" rx="14" ry="10" fill="#111" transform="rotate(-20 70 70)" />
                <ellipse cx="70" cy="70" rx="12" ry="8" stroke="white" strokeWidth="2" transform="rotate(-20 70 70)" />
                <ellipse cx="70" cy="70" rx="16" ry="12" strokeWidth="2" transform="rotate(-20 70 70)" />
              </svg>
            </motion.div>

            {/* 6. Polka Dot Clef (Top Center) */}
            <motion.div 
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 15 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[5%] md:top-[10%] left-[40%] md:left-[45%] z-0"
              style={{ filter: 'url(#rough-ink)' }}
            >
              <span className="text-[100px] md:text-[160px] font-serif leading-none text-black" style={{
                backgroundImage: 'radial-gradient(#111 30%, transparent 30%)',
                backgroundSize: '10px 10px',
                backgroundPosition: '0 0',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextStroke: '3px #111'
              }}>
                𝄞
              </span>
            </motion.div>

            {/* 7. Small Torn Sheet Music (Top Left) */}
            <motion.div 
              initial={{ y: -30, opacity: 0, rotate: -40 }}
              animate={{ y: 0, opacity: 1, rotate: -25 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-[10%] left-[10%] md:left-[20%] w-[50px] md:w-[80px] h-[40px] md:h-[60px] bg-[#e8e1cf] flex flex-col justify-center py-2 px-1"
              style={{ 
                filter: 'url(#torn-edge) url(#paper-texture)',
                clipPath: 'polygon(5% 10%, 94% 6%, 91% 94%, 9% 91%)' 
              }}
            >
              <div className="w-full h-[1.5px] bg-[#222] mb-1 md:mb-2" style={{ filter: 'url(#rough-ink)' }}></div>
              <div className="w-full h-[1.5px] bg-[#222] mb-1 md:mb-2" style={{ filter: 'url(#rough-ink)' }}></div>
              <div className="w-full h-[1.5px] bg-[#222] mb-1 md:mb-2" style={{ filter: 'url(#rough-ink)' }}></div>
              <div className="w-full h-[1.5px] bg-[#222] mb-1 md:mb-2" style={{ filter: 'url(#rough-ink)' }}></div>
              <div className="w-full h-[1.5px] bg-[#222]" style={{ filter: 'url(#rough-ink)' }}></div>
              <span className="absolute top-1 left-2 text-2xl md:text-4xl text-[#111] font-serif" style={{ filter: 'url(#rough-ink)' }}>♪</span>
            </motion.div>

            {/* --- BRUTALIST TYPOGRAPHY --- */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
              <motion.h1 
                initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="font-serif text-[22vw] md:text-[16vw] leading-[0.85] tracking-tighter font-black text-[#111] text-center"
                style={{ 
                  filter: 'url(#rough-ink)',
                  WebkitTextStroke: '2px #f8f8f8',
                  textShadow: '5px 5px 0px #f8f8f8, -5px -5px 0px #f8f8f8, 5px -5px 0px #f8f8f8, -5px 5px 0px #f8f8f8'
                }}
              >
                Band soul
              </motion.h1>
            </div>

            {/* --- START BUTTON --- */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              onClick={handleStart}
              className="absolute bottom-12 md:bottom-20 z-20 font-mono text-[18px] md:text-[24px] font-bold uppercase tracking-[0.3em] text-[#111] hover:opacity-60 transition-opacity"
            >
              <span className="border-b-2 border-[#111] pb-1" style={{ filter: 'url(#rough-ink)' }}>Start</span>
            </motion.button>
          </motion.div>
        )}

        {step === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[1200px] min-h-[70vh] flex flex-col relative z-10 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center p-8 md:px-12 bg-bg">
              <button 
                onClick={handlePrev}
                disabled={currentQ === 0}
                className={`font-mono flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] transition-opacity ${currentQ === 0 ? 'opacity-0 pointer-events-none' : 'opacity-60 hover:opacity-100'}`}
              >
                <ArrowLeft size={14} /> 回溯
              </button>
              <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-text-secondary">
                Track {String(currentQ + 1).padStart(2, '0')} / {questions.length}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col p-6 md:px-10 md:py-12"
              >
                <h2 className="font-serif text-3xl md:text-4xl leading-[1.5] mb-8 text-accent max-w-5xl">
                  {questions[currentQ]?.text}
                </h2>
                
                <div className="flex flex-col mt-auto gap-4">
                  {questions[currentQ]?.options?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option.band)}
                      className="group flex flex-row items-center p-2 md:p-3 hover:bg-bg active:bg-white/20 active:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.8)] transition-all text-left rounded-lg border border-transparent hover:border-line/20"
                    >
                      <span className="font-mono text-[12px] text-text-secondary w-12 group-hover:text-accent transition-colors shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-[16px] md:text-[20px] leading-relaxed text-text-primary group-hover:text-accent transition-colors">
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {step === 'calculating' && (
          <motion.div
            key="calculating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center text-center relative z-10"
          >
            <div className="w-12 h-12 border border-line border-t-text-primary rounded-full animate-spin mb-8"></div>
            <p className="font-mono text-[12px] uppercase tracking-[0.4em] text-text-secondary animate-pulse">
              正在调频...
            </p>
          </motion.div>
        )}

        {step === 'result' && resultBand && (
          <>
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full bg-card-bg flex flex-col relative z-10 overflow-hidden"
            >
            {/* Hero Section */}
            <div className="w-full min-h-[80vh] relative flex flex-col items-center justify-center text-center px-8 overflow-hidden">
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={getImageUrl(resultsData[resultBand].introImageUrl)} 
                  alt="Background" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => console.error('Failed to load background image:', e.currentTarget.src)}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Gradient fade to match the next section's background (bg) */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent"></div>
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col items-center w-full mt-20">
                <span className="font-mono text-[13px] uppercase tracking-[0.4em] text-white/70 mb-8 block drop-shadow-md">
                  Your Soul Band Is
                </span>
                
                <h2 className="font-serif text-6xl md:text-[100px] leading-[1] font-normal italic mb-6 text-white drop-shadow-2xl">
                  {resultsData[resultBand].name}
                </h2>
                <p className="font-serif text-white/90 text-[16px] md:text-[18px] max-w-xl mb-10 drop-shadow-lg">
                  {resultsData[resultBand].shortIntro}
                </p>
                <div className="w-full flex justify-center gap-3 flex-wrap max-w-2xl">
                  {resultsData[resultBand].tags.map((tag, idx) => (
                    <span key={idx} className="font-mono border border-white/30 text-white/90 text-[12px] uppercase tracking-[0.2em] px-5 py-2 backdrop-blur-md bg-white/10 rounded-full shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Masthead / Quote */}
            <div className="w-full py-16 px-8 flex items-center justify-center text-center bg-bg">
              <p className="font-serif text-2xl md:text-3xl italic text-accent leading-relaxed max-w-4xl">
                {resultsData[resultBand].quote}
              </p>
            </div>

            {/* Disc & Info Section */}
            <div className="w-full flex justify-center bg-bg px-4 md:px-8 pb-16">
              <div className="w-full max-w-[1080px] flex flex-col md:flex-row items-center gap-8 md:gap-16">
                {/* Left: Spinning Disc & Controls */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center overflow-hidden relative">
                <div className="relative w-full max-w-[240px] aspect-square flex items-center justify-center mb-2">
                  {/* The Record */}
                  <motion.div 
                    style={{ rotate }}
                    className="w-full aspect-square rounded-full bg-[#050505] flex items-center justify-center relative border-[8px] border-[#050505] ring-1 ring-white/5 overflow-hidden"
                  >
                    {/* Realistic Vinyl Grooves on the black edge */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_0_3px_rgba(0,0,0,0.8),inset_0_0_0_4px_rgba(255,255,255,0.02),inset_0_0_0_6px_rgba(0,0,0,0.9),inset_0_0_0_7px_rgba(255,255,255,0.03),inset_0_0_0_10px_rgba(0,0,0,0.7)] pointer-events-none z-10"></div>
                    
                    {/* Vinyl Light Reflection */}
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_105deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_45deg,transparent_90deg,transparent_180deg,rgba(255,255,255,0.05)_225deg,transparent_270deg)] pointer-events-none z-10"></div>

                    {/* Album Cover taking up the whole disc */}
                    <img 
                      src={getImageUrl(resultsData[resultBand].coverUrl)} 
                      alt="Album Cover" 
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => console.error('Failed to load cover image:', e.currentTarget.src)}
                    />
                    
                    {/* Center Spindle Hole */}
                    <div className="absolute w-[12px] h-[12px] bg-white rounded-full z-20 shadow-inner border border-black/10"></div>
                    <div className="absolute w-[4px] h-[4px] bg-black/20 rounded-full z-30"></div>
                    
                    {/* Subtle paper texture overlay */}
                    <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" style={{ filter: 'url(#paper-texture)' }}></div>
                  </motion.div>
                </div>
              </div>

                {/* Right: Biographies & Vibe (White Rectangular Card) */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center gap-10 bg-white border border-line/10 shadow-sm">
                  <div>
                    <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-text-secondary mb-5 block">
                      Biography
                    </span>
                    <div className="font-serif text-text-primary text-[15px] md:text-[16px] leading-[2] text-justify space-y-4">
                      {resultsData[resultBand].description.split('。').filter(Boolean).map((sentence, i) => {
                        const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
                        return (
                          <div key={i} className="relative pl-5">
                            <span className="absolute left-0 top-0 text-accent font-serif font-bold italic">{romanNumerals[i] || '•'}.</span>
                            <p className="indent-2 m-0">{sentence}。</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="h-[1px] w-full bg-line"></div>
                  
                  <div className="flex flex-col items-center text-center">
                    <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-text-secondary mb-5 block">
                      Recommended Tracks
                    </span>
                    <div className="flex flex-col items-center gap-3 font-serif text-[18px] italic text-accent">
                      {resultsData[resultBand].tracks?.map((track, idx) => (
                        <span key={idx}>{track}</span>
                      )) || (
                        <span>{resultsData[resultBand].track}</span>
                      )}
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-line"></div>

                  <div className="flex flex-col items-center text-center">
                    <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-text-secondary mb-5 block">
                      Aesthetic Vibe
                    </span>
                    <p className="font-serif text-[15px] text-text-primary leading-relaxed indent-8">
                      {resultsData[resultBand].vibe}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Listen CTA */}
            <div className="w-full py-16 px-8 flex flex-col items-center text-center bg-bg">
              <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-text-secondary mb-10 block">
                Listen On
              </span>
              <div className="flex items-center justify-center gap-12 mb-16">
                <img src={spotifyIcon} alt="Spotify" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src={appleIcon} alt="Apple Music" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src={wangyiyunIcon} alt="Wangyiyun" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
              
              <button 
                onClick={handleStart}
                className="font-mono flex items-center gap-3 text-[13px] uppercase tracking-[0.2em] text-text-secondary hover:text-accent transition-colors mb-12"
              >
                <RotateCcw size={16} /> 重新调频
              </button>

              <div className="font-mono text-[10px] tracking-[0.3em] text-text-secondary/40 uppercase">
                Developed by <span className="text-text-secondary/60">BlackHouseNewSofa</span>
              </div>
            </div>
            
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
