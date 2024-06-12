import { useEffect, useState } from 'react';

import s from './Loader.module.css';
import img from './Loading.png';


export const Loader = () => {
  const [deg, setDeg] = useState(0);

  const generateFrame = () => {
    setDeg((p) => p + 1);
    requestAnimationFrame(generateFrame);
  };

  useEffect(() => {
    const id = requestAnimationFrame(generateFrame);
    return () => {
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div className={s.loader}>
      <img src={img} style={{ transform: `rotate(${deg}deg)` }} />
    </div>
  );
};
