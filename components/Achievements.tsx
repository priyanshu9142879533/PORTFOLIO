'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import { Trophy, Star, Flame, Code2 } from 'lucide-react';

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function: easeOutExpo
        const easeOutPercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
        
        setCount(Math.floor(easeOutPercentage * end));
        
        if (progress < duration) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const achievements = [
  { icon: <Code2 className="text-blue-400 w-8 h-8" />, count: 150, suffix: "+", label: "Coding Problems Solved" },
  { icon: <Star className="text-yellow-400 w-8 h-8" />, count: 5, suffix: "-Star", label: "LeetCode Rating" },
  { icon: <Flame className="text-orange-400 w-8 h-8" />, count: 100, suffix: "+", label: "Daily Problem Solving Streak" },
  { icon: <Trophy className="text-primary w-8 h-8" />, count: 100, suffix: "%", label: "Competitive Programming Focus" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 z-10">
        <SectionHeading title="Achievements" subtitle="Milestones in competitive programming" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center group hover:border-primary/30 transition-colors"
            >
              <div className="p-4 bg-white/5 rounded-full mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                <Counter end={item.count} suffix={item.suffix} />
              </h3>
              <p className="text-gray-400 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
