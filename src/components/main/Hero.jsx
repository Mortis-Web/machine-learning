import introRobot from '../../assets/images/banner1.png';
import rocket from '../../assets/images/rocket-element.png';
import lightBall from '../../assets/images/lightball.png';
import ai from '../../assets/images/ai.png';
import box from '../../assets/images/box-element-mask.png';
import wave1 from '../../assets/images/whiteWave.png';
import wave2 from '../../assets/images/darkWave.png';
import { useTheme } from '../../hooks/Theme';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { theme } = useTheme();
  const [delayedImg, setDelayedImg] = useState(theme);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedImg(theme);
    }, 100);
    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <header className="relative  isolate overflow-clip bg-hero-light pt-15 pb-50 text-white capitalize dark:bg-(--darkerBG) dark:bg-none">
      <img
        src={box}
        alt="box"
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover pointer-events-none opacity-20 "
      />
      <div className="relative isolate  z-30 container flex flex-wrap items-center justify-center gap-14 pt-20 lg:flex-nowrap">
        <article className="flex flex-col justify-center items-center sm:items-start sm:text-start text-center gap-8 lg:basis-1/2">
          <h1 className="sm:text-6xl text-[34px] xs:text-5xl leading-tight sm:leading-20 font-bold text-balance">
            Unleash the potential of{' '}
            <span className="inline text-(--shine)"> AI</span> and{' '}
            <span className="inline text-amber-300">machine learning</span>
          </h1>
          <p className="xs:text-xl text-[1rem] font-semibold">
            Machine learning algorithms build a model based on sample data,
            known as training data, in order to make predictions or decisions...
          </p>
          <span className="flex items-center justify-between gap-6">
            <button className="rounded-md hover:bg-(--shine) bg-(--button) px-4 py-3 text-lg font-semibold text-white shadow-lg">
              Get Started
            </button>
          </span>
        </article>
        <article className="relative robo-wrapper flex lg:basis-1/2 flex-col sm:max-w-none max-w-9/10  xs:max-w-3/4  items-center justify-center gap-8 px-4">
          <span className="absolute inset-0 -z-100 m-auto h-full  w-full max-w-100 bg-(--shine) opacity-60 blur-[100px]"></span>
          <img src={introRobot} data-tilt-animate="true" alt="introRobot" className="animate-hovering robo" />
          <div className="animate-slowhovering absolute -z-[1] top-1/4 -right-20 xs:-right-40 md:-right-55 w-[45%] xs:w-52.5 sm:w-60 lg:-right-40">
            <img
              src={rocket}
              alt="rocket"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute -z-[1] top-1/5 -left-5 xs:-left-10  w-[25%] xs:w-22.5 sm:w-30 lg:-left-2 xl:left-2">
            <img
              src={ai}
              alt="ai"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="absolute block top-0 right-10 -z-10 h-full w-full">
            <img
              src={lightBall}
              alt="lightBall"
              className="absolute top-5 xs:top-3/5 sm:top-2/5 left-20 xs:left-0 lg:left-8   sm:scale-130 animate-pulse"
            />
            <img
              src={lightBall}
              alt="lightBall"
              className="absolute top-35 left-8 xs:top-20 xs:left-20 lg:left-35 sm:scale-130 animate-pulse"
            />
            <img
              src={lightBall}
              alt="lightBall"
              className="absolute top-12.5 xs:top-20 sm:right-0 -right-10 lg:right-10 sm:scale-130 animate-pulse"
            />

            <img
              src={lightBall}
              alt="lightBall"
              className="absolute top-3/4 left-20 sm:scale-130 animate-pulse"
            />
            <img
              src={lightBall}
              alt="lightBall"
              className="absolute top-7/8 right-0 sm:scale-130 animate-pulse"
            />
          </div>
        </article>
      </div>
      <span className="absolute bottom-0 left-0 z-20 block h-fit w-full pointer-events-none">
        <img
          key={theme}
          src={delayedImg === 'light' ? wave1 : wave2}
          alt="wave"
          className="w-full h-full object-cover min-h-40"
        />
      </span>
    </header>
  );
};

export default Hero;
