"use client";
import { useState, useEffect } from "react";

interface CountdownItemProps {
  value: number;
  label: string;
}

function CountdownItem({ value, label }: CountdownItemProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border-2 border-gray-20 p-3 shadow-sm">
      <span className="text-4xl font-bold text-dark-500">{value}</span>
      <span className="font-medium text-primary-600">{label}</span>
    </div>
  );
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
}

function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft: TimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient || !timeLeft) {
    return null; // or return a loading placeholder
  }

  return (
    <div className="mb-12 flex gap-3 md:gap-6 flex-wrap justify-center sm:flex-nowrap">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <CountdownItem
          key={interval}
          value={value}
          label={interval.charAt(0).toUpperCase() + interval.slice(1)}
        />
      ))}
    </div>
  );
}

export default Countdown;
