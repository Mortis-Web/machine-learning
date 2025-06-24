import feedbackRobot from '../../assets/images/testimonial1.png';
import {
  FaStar,
  FaStarHalfAlt,
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa';

import user1 from '../../assets/images/unit.png';
import user2 from '../../assets/images/tricksLogo.png';
import user3 from '../../assets/images/brain.png';
import user4 from '../../assets/images/AIchip.png';
import user5 from '../../assets/images/brighter.png';

import discord from '../../assets/images/discord.png';
import bell from '../../assets/images/bell-elements.png';
import facebook from '../../assets/images/facbook.webp';
import email from '../../assets/images/email.png';
import message from '../../assets/images/message.png';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { section } from 'framer-motion/client';

const feedbacks = [
  {
    id: 1,
    name: 'Mohammed Emara',
    company: 'Louis Vuitton',
    text: 'Amazing support ',
    rating: 4.5,
    user: `${user1}`,
  },
  {
    id: 2,
    name: 'Jane Doe',
    company: 'Apple Inc.',
    text: 'Fast, reliable,and great service. Highly recommended! and great service. Highly recommended! and great service. Highly recommended! and great service. Highly recommended! and great service. Highly recommended! and very professional team!',
    rating: 5,
    user: `${user2}`,
  },
  {
    id: 3,
    name: 'John Smith',
    company: 'Google LLC',
    text: 'They truly care about their clients and deliver results.',
    rating: 3,
    user: `${user3}`,
  },
  {
    id: 4,
    name: 'Lana Sola',
    company: 'Apple LLC',
    text: 'They truly care about their clients and deliver results.',
    rating: 5,
    user: `${user5}`,
  },
  {
    id: 5,
    name: 'Marwan Elmozrab',
    company: 'Samsung Corperate ',
    text: 'They truly care about their clients and deliver results.',
    rating: 2,
    user: `${user4}`,
  },
];

const LatestFeedback = ({ darkBG, lightBG, cardBG,pt }) => {
  const [activeCard, setActiveCard] = useState({
    index: 0,
    dir: '',
  });
const swiper = useRef(null)
const location = useLocation();
const [isVisible,setVisibility] = useState(false);
  const [firstLoadAnim, setFirstLoad] = useState(false);

  const handleNextCard = () => {
    setActiveCard(prev => ({
      index: (prev.index + 1) % feedbacks.length,
      direction: 'next',
    }));
    setFirstLoad(true);
  };

  const handlePrevCard = () => {
    setActiveCard(prev => ({
      index: (prev.index - 1 + feedbacks.length) % feedbacks.length,
      direction: 'prev',
    }));
    setFirstLoad(true);
  };

  useEffect(()=>{
    const observe = new IntersectionObserver(([entry])=>{
      setVisibility(entry.isIntersecting)
    },{
      root:null,
      rootMargin:'-100px',
      threshold: 0.1
    })
    if(swiper.current) observe.observe(swiper.current);
    return ()=> observe.disconnect();
  },[])

  useEffect(()=>{
    const interval = setInterval(() => {
      handleNextCard();
    },  3500);
    return ()=> clearInterval(interval);
  },[activeCard.index , location.pathname ,isVisible])

  return (
    <section
    ref={swiper}
      className={`${lightBG} ${darkBG} py-25 ${pt} text-(--darkText) dark:bg-(--darkerBG)`}
    >
      <div className="container flex flex-wrap justify-center gap-14 capitalize lg:gap-0">
        <article className="xs:items-start order-2 flex min-h-full flex-col items-center justify-stretch gap-10 lg:order-1 lg:basis-1/2">
          <h1 className="xs:leading-12 xs:text-start xs:text-4xl text-center text-[26px] font-bold dark:text-white">
            What people say about our support and services
          </h1>

          <div className="relative isolate max-h-fit max-w-fit select-none">
            {feedbacks.map((feedback, index) => {
              const isActive = index === activeCard.index;
              const isNext =
                index === (activeCard.index + 1) % feedbacks.length;
              const animDir = activeCard.dir === 'next' ? 'fadeR' : 'fadeL';
              const fullstars = Math.floor(feedback.rating);
              const halfstars = feedback.rating % 1 === 0.5;

              const currentAnim = `xs:w-80 ${firstLoadAnim ? animDir : ''} robo hover:shadow-[0px_4px_6px_var(--logo)] duration-300 transition-all  hover:border-(--button) border-1 border-transparent  flex w-full flex-col gap-5 rounded-xl ${cardBG} px-4 py-6  shadow-[0px_4px_6px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_var(--button)] sm:w-100`;
              const afterAnim = `xs:flex absolute border-1 border-transparent top-1/2 left-28.5  hidden h-full w-full flex-col gap-5 rounded-xl ${cardBG} px-4 py-6  shadow-lg sm:left-1/2`;
              const opacity = isActive
                ? `opacity-100`
                : isNext
                  ? `opacity-75`
                  : `opacity-100`;
              const zIndex = isActive ? 'z-20' : isNext ? `-z-10` : `z-20`;

              if (!isActive && !isNext) return null;
              return (
                <div
                  key={`${feedback.id}-${activeCard.dir}-${activeCard.index}`}
                  className="transition-all duration-500 "
                >
                  <div
                    className={`${opacity} ${zIndex} ${isActive ? `${currentAnim}` : `${afterAnim}`}`}
                  >
                    <span className="flex gap-2 text-lg text-amber-300">
                      {[...Array(fullstars)].map((_, index) => {
                        return <FaStar key={`full-${index}`} />;
                      })}
                      {halfstars && <FaStarHalfAlt key="half" />}
                    </span>

                    <p className="line-clamp-3 min-h-21 text-lg font-semibold text-balance">
                      {feedback.text}
                    </p>
                    <div className="flex items-center gap-5">
                      <span className="h-14 w-14 overflow-clip rounded-full bg-(--logo)">
                        <img
                          src={feedback.user}
                          alt="user"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span>
                        <h1 className="xs:text-xl text-[1rem] font-bold">
                          {feedback.name}
                        </h1>
                        <h2 className="text-md xs:text-lg font-semibold">
                          {feedback.company}
                        </h2>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <span className="flex max-w-fit gap-4 text-white">
            <button
              onClick={handlePrevCard}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-(--button) text-2xl font-bold hover:bg-(--shine)"
            >
              <FaAngleLeft />{' '}
            </button>
            <button
              onClick={handleNextCard}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-(--button) text-2xl font-bold hover:bg-(--shine)"
            >
              <FaAngleRight />
            </button>
          </span>
          <button className="m-auto mt-8 flex items-center justify-center rounded-md bg-(--button) px-4 py-3 text-lg font-semibold text-white shadow-lg hover:bg-(--shine)">
            Send Feedback
          </button>
        </article>
        <article className="robo-wrapper relative isolate order-1 flex min-h-full items-center justify-center lg:basis-1/2">
          <img
            src={message}
            alt="message"
            className="xs:max-w-20 xs:left-25 absolute top-0 left-10 max-w-[15%] object-contain"
          />
          <img
            src={bell}
            alt="bell"
            className="xs:max-w-20 absolute top-1/3 left-0 max-w-[20%] object-contain"
          />
          <img
            src={facebook}
            alt="facebook"
            className="xs:max-w-20 xs:left-20 absolute bottom-0 left-10 max-w-[20%] object-contain"
          />
          <img
            src={email}
            alt="email"
            className="xs:max-w-20 absolute top-10 right-0 max-w-[20%] object-contain"
          />
          <img
            src={discord}
            alt="discord"
            className="xs:max-w-20 xs:bottom-10 absolute right-10 -bottom-5 max-w-[20%] object-contain"
          />

          <img
            src={feedbackRobot}
            alt="feedbackRobot"
            data-tilt-animate="true"
            className="animate-hovering robo h-[92%] w-[92%] object-contain"
          />
        </article>
      </div>
    </section>
  );
};

export default LatestFeedback;
