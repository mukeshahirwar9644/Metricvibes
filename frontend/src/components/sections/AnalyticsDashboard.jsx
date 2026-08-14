import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  TrendingUp,
  Target,
  Trophy,
} from 'lucide-react';

/* ───── keyframes injected once ───── */
const keyframes = `
@keyframes mvFloat1 {
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}
@keyframes mvFloat2 {
  0%,100%{transform:translateY(0) translateX(0)}
  50%{transform:translateY(-6px) translateX(3px)}
}
@keyframes mvFloat3 {
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-10px)}
}
@keyframes mvPulse {
  0%,100%{opacity:1;transform:scale(1)}
  50%{opacity:.7;transform:scale(1.15)}
}
@keyframes mvLogoZoom {
  0%, 100% { transform: translate(-50%,-50%) scale(1); }
  50% { transform: translate(-50%,-50%) scale(1.18); }
}
@keyframes mvDotPulse {
  0%,100%{opacity:0; transform:scale(0.5); box-shadow:0 0 0 0 rgba(249,115,22,0)}
  50%{opacity:1; transform:scale(1.2); box-shadow:0 0 0 6px rgba(249,115,22,0.3)}
}
@keyframes mvPillBlink {
  0%,100%{opacity:1; transform:scale(1); box-shadow:0 2px 12px rgba(0,0,0,0.07); border-color: rgba(0,0,0,0.06)}
  50%{opacity:0; transform:scale(0.85); box-shadow:0 2px 24px rgba(99,102,241,0.3), 0 0 0 4px rgba(99,102,241,0.1); border-color: rgba(99,102,241,0.4)}
}
@keyframes mvLineDash {
  from{stroke-dashoffset:0}
  to{stroke-dashoffset:24}
}
@keyframes mvComet {
  0% { stroke-dashoffset: 15; opacity: 0; }
  10% { opacity: 1; }
  80% { opacity: 1; }
  100% { stroke-dashoffset: -100; opacity: 0; }
}
`;

/* ───── dotted world map (simplified SVG points) ───── */
function DottedWorldMap() {
  // Approximated world map dot coordinates (relative 0–100 range)
  const dots = [
    // North America
    [18,22],[20,24],[22,22],[24,24],[26,22],[15,26],[17,28],[19,26],[21,28],[23,26],
    [25,28],[27,26],[14,30],[16,30],[18,30],[20,30],[22,30],[24,30],[26,30],[28,30],
    [16,32],[18,32],[20,32],[22,32],[24,32],[26,32],[18,34],[20,34],[22,34],[24,34],
    [20,36],[22,36],[24,36],[22,38],[24,38],[26,38],[22,40],[24,40],
    // Central America
    [24,42],[26,42],[24,44],[26,44],
    // South America
    [30,48],[32,48],[34,48],[28,50],[30,50],[32,50],[34,50],[36,50],
    [28,52],[30,52],[32,52],[34,52],[36,52],[30,54],[32,54],[34,54],[36,54],
    [30,56],[32,56],[34,56],[32,58],[34,58],[32,60],[34,60],[34,62],
    // Europe
    [44,18],[46,18],[48,18],[50,18],[42,20],[44,20],[46,20],[48,20],[50,20],[52,20],
    [44,22],[46,22],[48,22],[50,22],[52,22],[54,22],[44,24],[46,24],[48,24],[50,24],
    [52,24],[54,24],[46,26],[48,26],[50,26],[52,26],[48,28],[50,28],[52,28],
    // Africa
    [46,32],[48,32],[50,32],[46,34],[48,34],[50,34],[52,34],[46,36],[48,36],[50,36],
    [52,36],[48,38],[50,38],[52,38],[48,40],[50,40],[52,40],[48,42],[50,42],[52,42],
    [50,44],[52,44],[50,46],[52,46],[54,46],
    // Middle East
    [54,28],[56,28],[58,28],[56,30],[58,30],[60,30],[56,32],[58,32],
    // Asia
    [60,20],[62,20],[64,20],[66,20],[68,20],[70,20],[62,22],[64,22],[66,22],[68,22],
    [70,22],[72,22],[64,24],[66,24],[68,24],[70,24],[72,24],[74,24],
    [62,26],[64,26],[66,26],[68,26],[70,26],[72,26],[74,26],
    [64,28],[66,28],[68,28],[70,28],[72,28],[74,28],[76,28],
    [66,30],[68,30],[70,30],[72,30],[74,30],[76,30],
    [68,32],[70,32],[72,32],[74,32],[76,32],[78,32],
    [70,34],[72,34],[74,34],[76,34],[78,34],[80,34],
    // Southeast Asia
    [76,36],[78,36],[80,36],[78,38],[80,38],[82,38],
    [78,40],[80,40],[82,40],[84,40],[80,42],[82,42],[84,42],
    // Australia
    [78,50],[80,50],[82,50],[84,50],[78,52],[80,52],[82,52],[84,52],
    [80,54],[82,54],[84,54],[80,56],[82,56],
  ];

  return (
    <svg
      viewBox="0 0 100 70"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        opacity: 0.55,
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="0.55" fill="#6366f1" opacity="0.4" />
      ))}
    </svg>
  );
}

/* ───── 5 rising vertical growth arrows (Taller & Bolder Scale) ───── */
function MiniSparkline({ color = '#7c3aed' }) {
  const w = 76, h = 34;
  return (
    <svg width={w} height={h} viewBox="0 0 76 34" style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="arrow5Grad1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="arrow5Grad2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="arrow5Grad3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="arrow5Grad4" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="arrow5Grad5" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      {/* Arrow 1 (Smallest) */}
      <g>
        <rect x="3" y="22" width="6" height="12" rx="1.5" fill="url(#arrow5Grad1)" opacity="0.75" />
        <polygon points="6,15 0.5,23 11.5,23" fill="#818cf8" opacity="0.8" />
      </g>

      {/* Arrow 2 */}
      <g>
        <rect x="19" y="17" width="6" height="17" rx="1.5" fill="url(#arrow5Grad2)" opacity="0.85" />
        <polygon points="22,10 16.5,18 27.5,18" fill="#6366f1" opacity="0.88" />
      </g>

      {/* Arrow 3 */}
      <g>
        <rect x="35" y="12" width="6" height="22" rx="1.5" fill="url(#arrow5Grad3)" opacity="0.9" />
        <polygon points="38,5 32.5,13 43.5,13" fill="#7c3aed" opacity="0.92" />
      </g>

      {/* Arrow 4 */}
      <g>
        <rect x="51" y="7" width="6" height="27" rx="1.5" fill="url(#arrow5Grad4)" opacity="0.95" />
        <polygon points="54,0 48.5,8 59.5,8" fill="#8b5cf6" opacity="0.96" />
      </g>

      {/* Arrow 5 (Tallest) */}
      <g>
        <rect x="67" y="2" width="6" height="32" rx="1.5" fill="url(#arrow5Grad5)" />
        <polygon points="70,-5 64.5,3 75.5,3" fill="#a855f7" />
      </g>
    </svg>
  );
}

/* ───── animated counter ───── */
function AnimCount({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const num = parseFloat(String(value).replace(/[^0-9.]/g, ''));
  useEffect(() => {
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(e * num));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [num]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

/* ───── floating notification badge ───── */
function NotifBadge({ children, icon: Icon, bg, color, border, style, delay = 0, anim = 'mvFloat1' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5 + delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '8px 16px',
        borderRadius: '24px',
        fontSize: '0.78rem',
        fontWeight: '600',
        background: bg || '#fff',
        color: color || '#1e293b',
        border: border || '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
        whiteSpace: 'nowrap',
        zIndex: 20,
        animation: `${anim} 3.5s ease-in-out infinite`,
        cursor: 'default',
        ...style,
      }}
    >
      {Icon && <Icon size={15} />}
      {children}
    </motion.div>
  );
}

/* ───── platform pill badge (on the map) ───── */
function PlatformPill({ name, color: dotColor, logo, style, delay = 0, blinkDelay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 + delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '0.68rem',
        fontWeight: '600',
        background: '#fff',
        color: '#334155',
        border: '1px solid rgba(0,0,0,0.06)',
        whiteSpace: 'nowrap',
        zIndex: 15,
        cursor: 'default',
        animation: `mvPillBlink 2.5s ease-in-out ${blinkDelay}s infinite`,
        ...style,
      }}
    >
      {logo ? (
        <span style={{
          width: '18px', height: '18px', borderRadius: '50%',
          background: dotColor || '#6366f1',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.55rem', fontWeight: '800', color: '#fff',
        }}>
          {logo}
        </span>
      ) : (
        <span style={{
          width: '7px', height: '7px', borderRadius: '50%',
          background: dotColor || '#6366f1',
        }} />
      )}
      {name}
    </motion.div>
  );
}

/* ───── SVG connecting lines from center to pills ───── */
function ConnectingLines() {
  const lines = [
    { x2: 28, y2: 28 },
    { x2: 70, y2: 25 },
    { x2: 18, y2: 38 },
    { x2: 35, y2: 55 },
    { x2: 85, y: 42 },
    { x2: 72, y: 62 },
    { x2: 48, y: 70 },
    { x2: 15, y: 65 },
    { x2: 52, y: 30 },
    { x2: 58, y: 72 },
    { x2: 58, y: 48 },
    { x2: 25, y: 65 },
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 11,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <linearGradient id="cometGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
        </linearGradient>
      </defs>
      {lines.map((l, i) => {
        const x1 = 48, y1 = 48;
        const x2 = l.x2, y2 = l.y2;
        // Midpoint
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        // Control point for a gentle curve
        const curveAmount = 0.2; 
        const cx = mx + (y1 - y2) * curveAmount;
        const cy = my + (x2 - x1) * curveAmount;
        const d = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
        
        return (
          <g key={i}>
            {/* Base faint dotted line */}
            <path
              d={d}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="0.1"
              strokeDasharray="1 2"
              strokeOpacity="0.6"
            />
            {/* Shooting star / Comet line */}
            <path
              d={d}
              fill="none"
              stroke="url(#cometGrad)"
              strokeWidth="0.25"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray="15 100"
              style={{ animation: `mvComet ${2 + (i % 3)}s linear ${i * 0.4}s infinite` }}
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ───── orange data point ───── */
function DataPoint({ style, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0 + delay, duration: 0.3 }}
      style={{
        position: 'absolute',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#f97316',
        boxShadow: '0 0 0 3px rgba(249,115,22,0.2)',
        zIndex: 12,
        animation: 'mvDotPulse 2s ease-in-out infinite',
        ...style,
      }}
    />
  );
}

/* ───── bar dots for share-of-search card ───── */
function BarDots() {
  const sizes = [8, 10, 12, 14, 16, 20, 24];
  const colors = ['#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#311e72'];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginTop: '8px' }}>
      {sizes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, width: 0 }}
          animate={{ height: `${s}px`, width: `${s}px` }}
          transition={{ delay: 1.2 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
          style={{
            borderRadius: '50%',
            background: colors[i],
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
/*               MAIN COMPONENT                  */
/* ═══════════════════════════════════════════════ */
export default function AnalyticsDashboard() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <style>{keyframes}</style>

      {/* ── Main container card ── */}
      <motion.div
        className="analytics-dashboard-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          borderRadius: '20px',
          padding: '14px',
          minHeight: '370px',
          overflow: 'hidden',
        }}
      >
        {/* Dotted world map background */}
        <DottedWorldMap />

        {/* Connecting lines from center to pills */}
        <ConnectingLines />

        {/* Central hub dot with Clean MetricVibes Icon (Compact Size) */}
        <div style={{
          position: 'absolute',
          top: '48%',
          left: '48%',
          transform: 'translate(-50%,-50%)',
          zIndex: 14,
          animation: 'mvLogoZoom 2.8s ease-in-out infinite',
        }}>
          <div style={{
            width: '26px', height: '26px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            boxShadow: '0 0 0 4px rgba(124,58,237,0.25), 0 0 0 8px rgba(124,58,237,0.1), 0 4px 14px rgba(124, 58, 237, 0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img src="/favicon-circle-centered.png" alt="MetricVibes" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.12)', borderRadius: '50%' }} />
          </div>
        </div>

        {/* ── Floating notification badges ── */}
        <NotifBadge
          icon={Trophy}
          bg="linear-gradient(135deg, #f5f3ff, #ede9fe)"
          color="#7c3aed"
          border="1px solid rgba(124,58,237,0.18)"
          style={{ top: '3%', left: '26%' }}
          delay={0}
          anim="mvFloat2"
        >
          Your Analytics is Winning
        </NotifBadge>

        <NotifBadge
          icon={Sparkles}
          bg="linear-gradient(135deg, #f5f3ff, #ede9fe)"
          color="#311e72"
          border="1px solid rgba(49,30,114,0.12)"
          style={{ top: '14%', left: '3%' }}
          delay={0.15}
          anim="mvFloat1"
        >
          Accuracy ↑ 38%
        </NotifBadge>

        <NotifBadge
          icon={TrendingUp}
          bg="linear-gradient(135deg, #fff7ed, #ffedd5)"
          color="#ea580c"
          border="1px solid rgba(234,88,12,0.12)"
          style={{ top: '53%', right: '4%' }}
          delay={0.3}
          anim="mvFloat3"
        >
          ROI +24%
        </NotifBadge>

        <NotifBadge
          icon={Target}
          bg="linear-gradient(135deg, #f5f3ff, #ede9fe)"
          color="#311e72"
          border="1px solid rgba(49,30,114,0.12)"
          style={{ bottom: '20.5%', right: '4%', padding: '5px 11px', fontSize: '0.71rem' }}
          delay={0.45}
          anim="mvFloat2"
        >
          Tracking 5+ Countries
        </NotifBadge>

        {/* ── Revenue card (top-right - Compact) ── */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: '3%',
            right: '4%',
            background: '#fff',
            borderRadius: '12px',
            padding: '8px 10px',
            boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.05)',
            zIndex: 18,
            minWidth: '92px',
          }}
        >
          <div style={{ fontSize: '0.48rem', fontWeight: '700', color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1px' }}>
            PROJECTS DELIVERED
          </div>
          <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.03em', marginBottom: '2px' }}>
            <AnimCount value={50} suffix="+" />
          </div>
          <div style={{ transform: 'scale(0.85)', transformOrigin: 'left bottom', marginTop: '4px' }}>
            <MiniSparkline color="#7c3aed" />
          </div>
        </motion.div>

        {/* ── Share-of-Search style card (bottom-left) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '4%',
            left: '3%',
            background: '#fff',
            borderRadius: '10px',
            padding: '7px 9px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.05)',
            zIndex: 18,
            minWidth: '92px',
          }}
        >
          {/* Mac dots */}
          <div style={{ display: 'flex', gap: '3px', marginBottom: '3px' }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e' }} />
          </div>
          <div style={{ fontSize: '0.45rem', fontWeight: '700', color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1px' }}>
            TRACKING ACCURACY
          </div>
          <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.03em' }}>
            99.7%
          </div>
          <div style={{ fontSize: '0.48rem', fontWeight: '600', color: '#22c55e', marginTop: '1px', marginBottom: '3px' }}>
            ▲ +4.2 pts vs LW
          </div>
          <div style={{ transform: 'scale(0.82)', transformOrigin: 'left top' }}>
            <BarDots />
          </div>
        </motion.div>

        {/* ── Platform pills scattered on the map ── */}
        <PlatformPill name="GA4" logo="G" color="#4285f4" style={{ top: '28%', left: '28%' }} delay={0} blinkDelay={0} />
        <PlatformPill name="Adobe" logo="A" color="#ff0000" style={{ top: '25%', right: '30%' }} delay={0.08} blinkDelay={0.4} />
        <PlatformPill name="GTM" logo="G" color="#4285f4" style={{ top: '38%', left: '18%' }} delay={0.16} blinkDelay={0.8} />
        <PlatformPill name="Mixpanel" logo="M" color="#7856ff" style={{ top: '55%', left: '35%' }} delay={0.24} blinkDelay={1.2} />
        <PlatformPill name="BigQuery" logo="B" color="#669df6" style={{ top: '42%', right: '15%' }} delay={0.32} blinkDelay={0.3} />
        <PlatformPill name="Amplitude" logo="A" color="#1c1c84" style={{ top: '62%', right: '28%' }} delay={0.40} blinkDelay={0.7} />
        <PlatformPill name="Looker" logo="L" color="#4285f4" style={{ bottom: '30%', left: '48%' }} delay={0.48} blinkDelay={1.5} />
        <PlatformPill name="Snowflake" logo="S" color="#29b5e8" style={{ top: '50%', left: '14%' }} delay={0.56} blinkDelay={1.0} />
        <PlatformPill name="Firebase" logo="F" color="#f59e0b" style={{ top: '30%', left: '52%' }} delay={0.64} blinkDelay={0.5} />
        <PlatformPill name="Hotjar" logo="H" color="#ef4444" style={{ bottom: '28%', right: '42%' }} delay={0.72} blinkDelay={1.8} />
        <PlatformPill name="Segment" logo="S" color="#22c55e" style={{ top: '48%', left: '58%' }} delay={0.80} blinkDelay={0.6} />
        <PlatformPill name="Tableau" logo="T" color="#e97627" style={{ bottom: '35%', left: '25%' }} delay={0.88} blinkDelay={1.3} />

        {/* ── Orange data point dots ── */}
        <DataPoint style={{ top: '35%', left: '38%' }} delay={0} />
        <DataPoint style={{ top: '45%', left: '55%' }} delay={0.1} />
        <DataPoint style={{ top: '30%', right: '38%' }} delay={0.2} />
        <DataPoint style={{ top: '58%', left: '42%' }} delay={0.3} />
        <DataPoint style={{ top: '50%', right: '32%' }} delay={0.4} />
        <DataPoint style={{ bottom: '35%', left: '45%' }} delay={0.5} />
        <DataPoint style={{ top: '40%', left: '25%' }} delay={0.6} />
        <DataPoint style={{ top: '55%', right: '20%' }} delay={0.7} />

        {/* ── Floating Stats on Bottom Right (No Box, Just Text) ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '3.5%',
            right: '6%',
            display: 'flex',
            gap: '32px',
            zIndex: 20,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.03em' }}>
              <AnimCount value={50} suffix="+" />
            </div>
            <div style={{ fontSize: '0.6rem', fontWeight: '700', color: '#94a3b8', letterSpacing: '0.08em', marginTop: '2px' }}>
              IMPLEMENTATIONS
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.03em' }}>
              <AnimCount value={5} suffix="+" />
            </div>
            <div style={{ fontSize: '0.6rem', fontWeight: '700', color: '#94a3b8', letterSpacing: '0.08em', marginTop: '2px' }}>
              COUNTRIES
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
