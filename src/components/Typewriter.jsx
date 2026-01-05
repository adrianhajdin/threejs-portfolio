import { useEffect, useState } from 'react';

const Typewriter = ({ text, texts, delay = 100, className = '' }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Handle both string and array of texts
  const displayTexts = texts || [text || ''];
  const currentDisplayText = displayTexts[currentTextIndex % displayTexts.length];

  useEffect(() => {
    if (currentIndex === currentDisplayText.length && !isDeleting) {
      // Pause at the end of the text
      const pauseTimeout = setTimeout(() => {
        setIsPaused(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, 1000);
      }, 1000);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      // Move to next text when done deleting
      setCurrentTextIndex(prev => (prev + 1) % displayTexts.length);
      return;
    }

    if (!isPaused) {
      const timeout = setTimeout(() => {
        if (isDeleting) {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setCurrentText(currentDisplayText.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }
      }, isDeleting ? delay / 2 : delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, isDeleting, isPaused, currentDisplayText, displayTexts.length]);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
