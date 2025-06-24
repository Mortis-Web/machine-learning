import logo from '../../assets/images/tricksLogo.png';
import { NavLink } from 'react-router-dom';
import { CgLogIn } from 'react-icons/cg';
import { FaCloudMoon, FaCloudSun, FaHome } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { useTheme } from '../../hooks/Theme';
import { useSidebar } from '../../hooks/ShowSidebar';

const links = [{
  label: 'Home',
  icon: <FaHome/>,
  path: '/'
},
{
  label: 'Feedback',
  icon: null,
  path: '/feedback'
},
{
  label: 'Products',
  icon: null,
  path: '/product'
},
{
  label: 'Bot',
  icon: null,
  path: '/bot'
},

]
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  const glassy =
    theme === 'light' ? 'bg-(--darkerBG)/80' : 'bg-(--darkerBG)/50';

  return (
    <nav
      className={`group fixed top-0 right-0 left-0 isolate z-1000 mx-auto flex w-full max-w-7xl items-center justify-between overflow-clip border border-x-0 border-t-0 border-white/10 sm:w-fit sm:rounded-b-4xl sm:border-x-1 ${glassy} py-4 text-white shadow-md backdrop-blur-xl backdrop-saturate-150 sm:px-4 sm:py-6 xl:w-3/4`}
    >
      <span className="bg-glow-hover xs:group-hover:translate-x-[450%] absolute top-0 left-0 -z-10 mx-auto h-full w-50 -translate-x-[150%] skew-22 blur-lg group-hover:translate-x-[300%] group-hover:transition-transform group-hover:duration-750 lg:group-hover:translate-x-[650%]"></span>
      <div className="container flex items-center justify-between rounded-[inherit] sm:gap-14 xl:gap-10">
        <div className="xs:flex hidden items-center justify-center gap-2 font-bold sm:min-w-48">
          <img
            src={logo}
            alt="logo"
            className="h-full w-10 max-w-25 object-cover"
          />
          <h1 className="inline-flex text-xl sm:text-3xl">
            Tricks <span className="inline text-(--logo)">Intelli</span>
          </h1>
        </div>

        <ul className="hidden w-fit items-center justify-center gap-10 text-lg font-bold capitalize lg:flex">
          {links.map((link,index)=>{
            return <li key={index} className='hover:text-(--logo) ' ><NavLink className={({isActive}) => `flex items-center justify-center gap-1 ${isActive ? 'text-(--logo)' : ''}`} to={link.path}>{link.icon}{link.label}</NavLink></li>
          })}

        </ul>
        <div className="xs:w-auto flex w-full items-center justify-center gap-5">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex min-h-12 min-w-12 items-center justify-center rounded-full bg-(--button) text-2xl shadow-md ${theme === 'dark' ? 'hover:bg-(--logo)' : 'hover:bg-(--secBG)'}`}
          >
            {theme === 'dark' ? <FaCloudSun /> : <FaCloudMoon />}
          </button>
          <NavLink to={'/login'}>
            <button
              type="button"
              className={`flex items-center justify-center gap-1 rounded-lg bg-(--button) px-5 py-3 text-lg font-bold whitespace-nowrap hover:bg-(--logo)`}
            >
              <CgLogIn className="text-2xl" />
              Log In
            </button>
          </NavLink>
          <button
            type="button"
            className="block text-5xl lg:hidden"
            onClick={toggleSidebar}
          >
            <IoIosMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
