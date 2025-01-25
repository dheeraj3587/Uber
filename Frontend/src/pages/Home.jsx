import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panel, setPanel] = useState(false);
  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    if (panel) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [panel]);

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="flex justify-end flex-col h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white">
          <h4 className="text-3xl font-semibold">Find Trip</h4>
          <form onSubmit={submitHandler}>
            <input
              onClick={() => {
                setPanel(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter Pickup Location"
            />
            <input
              onClick={() => {
                setPanel(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full"
              type="text"
              placeholder="Enter Drop Location"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-red-500 h-0 overflow-hidden"></div>
      </div>
    </div>
  );
};

export default Home;
