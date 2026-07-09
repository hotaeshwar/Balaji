'use client';

import { useState, useEffect } from 'react';

export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2000,
  loop = true,
}) {
  const [currentText, setCurrentText] = useState(words[0] || '');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !words || words.length === 0) return;

    let timer;
    const currentWord = words[wordIndex] || '';

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === currentWord) {
        if (loop) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetween);
        }
      } else {
        if (!currentWord.startsWith(currentText)) {
          timer = setTimeout(() => {
            setCurrentText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        } else {
          timer = setTimeout(() => {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          }, typingSpeed);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetween, mounted, loop]);

  const renderFormattedText = (text) => {
    const markers = [' &', ', ', ' Customers', ' Balaji', ' Elite', ' EV', ' Care', ' Diagnostics', ' Oils', ' Video', ' Gallery'];
    
    for (const marker of markers) {
      const idx = text.indexOf(marker);
      if (idx !== -1) {
        const part1 = text.slice(0, idx);
        const part2 = text.slice(idx);
        return (
          <>
            <span className="text-slate-500">{part1}</span>
            <span className="text-gold-600">{part2}</span>
          </>
        );
      }
    }
    
    return <span className="text-slate-500">{text}</span>;
  };

  if (!mounted) {
    return renderFormattedText(words[0] || '');
  }

  return (
    <span className="inline-block min-h-[1.2em]">
      {renderFormattedText(currentText)}
      <span className="typewriter-cursor ml-1 text-gold-600 font-normal" />
    </span>
  );
}
