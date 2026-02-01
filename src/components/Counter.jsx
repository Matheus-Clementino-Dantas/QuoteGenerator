import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000, threshold, className }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const animateCount = () => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const timeFraction = Math.min((currentTime - startTime) / duration, 1);

        const progress = 1 - Math.pow(1 - timeFraction, 4);

        setCount(Math.floor(progress * end));

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: threshold },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, threshold, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}+
    </span>
  );
}
export default Counter;
