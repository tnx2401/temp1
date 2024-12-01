import { useState, useRef, useEffect } from "react";

export default function useVisibleSections(sectionClassNames) {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = sectionClassNames.reduce((acc, className) => {
    acc[className] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return { visibleSections, sectionRefs };
}
