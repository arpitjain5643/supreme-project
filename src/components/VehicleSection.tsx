import { useRef, useEffect, useState } from 'react';

const VehicleSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<'passenger' | 'commercial'>('passenger');
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (!scrollContainerRef.current || isScrolling.current) return;

      event.preventDefault(); // Prevent page scrolling
      const scrollAmount = 200; // Adjust for smooth but controlled movement

      isScrolling.current = true;

      if (event.deltaY > 0) {
        // Scroll down → Move to Commercial
        if (activeSection === 'passenger') {
          setActiveSection('commercial');
          scrollContainerRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
      } else if (event.deltaY < 0) {
        // Scroll up → Move to Passenger
        if (activeSection === 'commercial') {
          setActiveSection('passenger');
          scrollContainerRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
        }
      }

      setTimeout(() => (isScrolling.current = false), 600); // Delay for smooth transitions
    };

    const handleTouchScroll = (event: TouchEvent) => {
      if (!scrollContainerRef.current || isScrolling.current) return;

      event.preventDefault(); // Prevent page scrolling
      const touchMove = event.touches[0].clientY;

      isScrolling.current = true;

      if (touchMove < window.innerHeight / 2) {
        // Swipe up → Move to Passenger
        if (activeSection === 'commercial') {
          setActiveSection('passenger');
          scrollContainerRef.current.scrollBy({ top: -200, behavior: 'smooth' });
        }
      } else {
        // Swipe down → Move to Commercial
        if (activeSection === 'passenger') {
          setActiveSection('commercial');
          scrollContainerRef.current.scrollBy({ top: 200, behavior: 'smooth' });
        }
      }

      setTimeout(() => (isScrolling.current = false), 600); // Delay for smooth transitions
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheelScroll, { passive: false });
      scrollContainer.addEventListener('touchmove', handleTouchScroll, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheelScroll);
        scrollContainer.removeEventListener('touchmove', handleTouchScroll);
      }
    };
  }, [activeSection]);

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center px-4 md:px-10 overflow-hidden relative">
      {/* Header */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-10 font-light text-center leading-snug">
        Evolving the drive with <span className="font-bold">360-degree</span> <br />
        nonwoven solutions
      </h1>

      {/* Scrollable Content (Left Side) */}
      <div className="relative flex flex-col md:flex-row items-start w-full max-w-[1400px]">
        {/* Vertical Line Indicator (Hidden on Small Screens) */}
        <div className="absolute left-4 md:left-10 top-0 w-[2px] bg-white h-full opacity-50 hidden md:block"></div>

        {/* Scrollable Section */}
        <div
          ref={scrollContainerRef}
          className="ml-4 md:ml-20 max-h-[200px] flex flex-col justify-start"
          style={{ overflowY: 'hidden' }}
        >
          {/* Passenger Vehicles */}
          <div key={activeSection} className={`transition-opacity duration-500 ${activeSection === 'passenger' ? 'opacity-100' : 'opacity-30'}`}>
            <h2 className="text-lg md:text-xl font-bold text-left">Passenger vehicles</h2>
            <p className="text-gray-300 text-sm md:text-base text-left">Revving up Nonwoven innovation from interior to exterior.</p>
          </div>

          {/* Commercial Vehicles */}
          <div key={activeSection} className={`mt-6 md:mt-10 transition-opacity duration-500 ${activeSection === 'commercial' ? 'opacity-100' : 'opacity-30'}`}>
            <h2 className="text-lg md:text-xl font-bold text-left">Commercial vehicles</h2>
            <p className="text-gray-600 text-sm md:text-base text-left">Advancing Nonwoven engineering for heavy-duty vehicles.</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 md:bottom-10 right-4 md:right-10 flex justify-center space-x-4 md:space-x-6 text-gray-500 text-xs md:text-sm">
        <span className={activeSection === 'passenger' ? 'text-white' : 'text-gray-500'}>Complete Body</span>
        <span className="text-gray-500">Front</span>
        <span className="text-gray-500">Cabin</span>
        <span className="text-gray-500">Trunk</span>
        <span className="text-gray-500">Exterior</span>
      </div>
    </div>
  );
};

export default VehicleSection;
