import logo from '../../assets/images/tricksLogo.png';
import waveLight from '../../assets/images/whiteWave.png';
import waveDark from '../../assets/images/darkWave.png';
import box from '../../assets/images/box-element-mask.png';
import asideImg from '../../assets/images/brighter.png';
import { useTheme } from '../../hooks/Theme';
import { useSidebar } from '../../hooks/ShowSidebar';
import { FaHome } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import { MdAttachEmail } from 'react-icons/md';
import { BiSolidBot } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark' ? waveDark : waveLight;
  const { showSidebar, hideSidebar } = useSidebar();
  const asideAnimation = !showSidebar ? '-translate-x-full' : 'translate-x-0';
  const fadeOverlay = !showSidebar ? ' invisible' : 'visible';

  return (
    <div
      //   {...(!showSidebar && { inert: 'true', 'aria-hidden': true })}
      className={`overlay fixed top-0 left-0 transition-all duration-200 lg:hidden ${fadeOverlay} z-1000 h-dvh min-h-192 w-full bg-black/60 md:h-screen`}
      onClick={hideSidebar}
    >
      <aside
        onClick={e => e.stopPropagation()}
        className={`xs:w-7/10 shadow-[4px_0px_6px_rgba(0, 0, 0, 0.1)] relative isolate dark:border-r-1 dark:border-white/10 ${asideAnimation} h-full w-9/10 bg-white transition-all delay-100 duration-300 dark:bg-(--secBG) dark:bg-none`}
      >
        <button
          type="button"
          className="absolute top-0 right-0 z-10 flex items-center justify-center rounded-bl-2xl bg-white p-2 text-2xl text-(--button) duration-200 hover:bg-red-500 hover:text-white"
          onClick={hideSidebar}
        >
          <IoClose />
        </button>
          <div className="bg-hero-light relative isolate flex w-full flex-col pt-8 font-bold text-white dark:bg-(--darkerBG) dark:bg-none">
            <img
              src={box}
              alt="box"
              className="object-[200% 200%] absolute top-0 left-0 -z-10 h-full w-full opacity-60"
            />
            <span className="flex items-center justify-center gap-2">
              <img
                src={logo}
                alt="logo"
                className="xs:w-12 h-full w-8.5 object-cover"
              />
              <h1 className="xs:text-4xl inline-flex text-3xl">
                Tricks <span className="inline text-(--logo)">Intelli</span>
              </h1>
            </span>
            <span className="h-20 w-full">
              <img
                src={isDark}
                alt="wave"
                className="h-full w-full object-cover"
              />
            </span>
          </div>
        <ul className="flex w-full divide-(--logo) divide-y-[1px] flex-col text-(--darkText) dark:text-white">
          <li>
            <NavLink
            onClick={hideSidebar}
              to={'/'}
              className="flex w-full items-center gap-1.5  p-4 font-bold hover:bg-(--button) hover:text-white"
            >
              <FaHome className="text-xl" /> <h1 className="text-lg">Home</h1>
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={hideSidebar}
              to={'/feedback'}
              className="flex w-full items-center gap-1.5  p-4 font-bold hover:bg-(--button) hover:text-white"
            >
              <MdAttachEmail className="text-xl" />{' '}
              <h1 className="text-lg">Feedback</h1>
            </NavLink>
          </li>{' '}
          <li>
            <NavLink
            onClick={hideSidebar}
              to={'/product'}
              className="flex w-full items-center gap-1.5  p-4 font-bold hover:bg-(--button) hover:text-white"
            >
              <AiFillProduct className="text-xl" />{' '}
              <h1 className="text-lg">Products</h1>
            </NavLink>
          </li>{' '}
          <li>
            <NavLink
            onClick={hideSidebar}
              to={'/bot'}
              className="flex w-full items-center gap-1.5  p-4 font-bold hover:bg-(--button) hover:text-white"
            >
              <BiSolidBot className="text-xl" />{' '}
              <h1 className="text-lg">Bot</h1>
            </NavLink>
          </li>{' '}
        </ul>
        <div className="xs:max-w-75 absolute right-0 bottom-10 left-0 -z-10 mx-auto flex max-w-70 items-center justify-center sm:max-w-85">
          <img
            src={asideImg}
            alt="asideImg"
            className="h-full w-full object-cover"
          />
        </div>
      </aside>
    </div>
  );
};

export default Aside;
