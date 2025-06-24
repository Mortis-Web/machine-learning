import footWave from '../../assets/images/footerWhiteWave.png';
import footDarkWave from '../../assets/images/footerDarkWave.png';
import box from '../../assets/images/box-element-mask.png';
import logo from '../../assets/images/tricksLogo.png';
import contactRobot from '../../assets/images/contactRobot.png';
import contactRobotXS from '../../assets/images/contactRobotXS.png';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../hooks/Theme';
import { useEffect, useState } from 'react';

const Footer = () => {
  const { theme } = useTheme();
  const [delayedImg, setDelayedImg] = useState(theme);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedImg(theme);
    }, 100);
    return () => clearTimeout(timeout);
  }, [theme]);

  const items = [
    { icon: <FaFacebookF />, color: '#1877F2' },
    { icon: <FaInstagram />, color: '#E1306C' },
    { icon: <FaTwitter />, color: '#1DA1F2' },
    { icon: <FaYoutube />, color: 'red' },
    { icon: <FaWhatsapp />, color: '#25D366' },
  ];

  const arrowColor = theme === 'dark' ? 'text-(--button)' : 'text-(--logo)';

  const linkHover =
    theme === 'dark' ? 'hover:text-(--button)' : 'hover:text-(--logo)';

  return (
    <footer className="bg-hero-light relative isolate overflow-hidden pt-50 pb-25 text-white dark:bg-(--darkerBG) dark:bg-none">
      <img
        src={box}
        alt="box"
        className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <span className="absolute left-1/2 top-10 -z-10 bg-(--button) blur-[150px] w-50 h-50 opacity-75 "></span>
      <span className="absolute -left-10 bottom-10 -z-10 bg-(--button) blur-[150px] w-50 h-full opacity-50 "></span>

      <span className="pointer-events-none absolute top-0 left-0 -z-10 block h-fit w-full">
        <img
          src={delayedImg === 'dark' ? footDarkWave : footWave}
          alt="footerwave"
          className="w-full object-cover"
        />
      </span>
  <picture>
  <source media="(max-width: 480px)" srcSet={contactRobotXS} />
  <source media="(min-width: 481px)" srcSet={contactRobot} />
  <img
    src={contactRobot}
    alt="Contact Robot"
    className="absolute left-0 xs:left-[initial] brightness-75 -z-10 xs:-right-20 -bottom-10 max-h-full max-w-1/2 xs:max-w-60 object-contain md:max-w-75 lg:-right-5 lg:bottom-0 xl:max-w-57.5"
  />
</picture>


      <div className="container grid [grid-template-columns:repeat(auto-fit,minmax(265px,1fr))] justify-center gap-x-12 gap-y-12 sm:gap-y-8 lg:gap-x-4">
        <article className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-start">
          <div className="flex w-fit items-center gap-2 text-4xl font-bold">
            <img
              src={logo}
              alt="logo"
              className="h-full w-10 max-w-25 object-cover"
            />
            <h1 className="inline-flex">
              Tricks <span className="inline text-(--logo)">Intelli</span>
            </h1>
          </div>
          <p className="text-md max-w-3/4 font-semibold text-balance sm:max-w-none">
            Artificial Intelligence (AI) and Machine Learning (ML) are closely
            related technologies that enable computers to learn from data and
            make predictions
          </p>
          <ul className="flex w-fit items-center gap-6 text-2xl">
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  onMouseEnter={e => {
                    e.currentTarget.style.filter = `drop-shadow(0 0 6px ${item.color})`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.filter = `none`;
                  }}
                  style={{ color: `${item.color}` }}
                  className="transition-all duration-200 ease-out will-change-[filter,transform] hover:scale-110"
                >
                  <a href="#">{item.icon}</a>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="flex flex-col items-center gap-6 sm:items-start">
          <h1 className="text-2xl font-bold capitalize">Quick Links</h1>
          <ul className="flex max-w-fit flex-col gap-3 pl-2">
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>

            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>
          </ul>
        </article>
        <article className="flex flex-col items-center gap-6 sm:items-start">
          <h1 className="text-2xl font-bold capitalize">Services</h1>
          <span className="flex max-w-fit flex-col gap-3 pl-2">
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>{' '}
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>{' '}
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>{' '}
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>{' '}
          </span>
        </article>
        <article className="flex flex-col items-center gap-6 sm:items-start">
          <h1 className="text-2xl font-bold capitalize">Contact Us</h1>
          <span className="flex max-w-fit flex-col gap-3 pl-2">
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>{' '}
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>{' '}
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>{' '}
            <li className="inline-flex items-center justify-center gap-1 text-lg font-semibold">
              <FaArrowRight className={`text-sm ${arrowColor} `} />
              <a href="http://" className={` ${linkHover} `}>
                Lorem, ipsum.
              </a>
            </li>{' '}
          </span>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
