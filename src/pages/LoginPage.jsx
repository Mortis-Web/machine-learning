import { FaUserAlt, FaUnlockAlt, FaUserSecret } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';
import { useState } from 'react';
import ScrollMotion from '../components/framer-motion/ScrollMotion';

const socialLinks = [
  {
    label: 'Facebook',
    icon: <FaFacebook />,
    url: 'https://facebook.com/yourprofile',
    color: '#1877F2',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://instagram.com/yourprofile',
    color: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
  },
  {
    label: 'Twitter',
    icon: <FaXTwitter />,
    url: 'https://twitter.com/yourprofile',
    color: '#000000',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/yourprofile',
    color: '#0A66C2',
  },
  {
    label: 'Discord',
    icon: <FaDiscord />,
    url: 'https://discord.gg/your-invite-code',
    color: '#5865F2',
  },
];
const LoginPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className="loginScroll bg-login-bg-light sm:px-10 flex min-h-[100dvh] flex-col items-center justify-center px-4.5 py-12.5 md:min-h-screen md:px-20 md:py-22.5">
<ScrollMotion>

      <article className="relative grid min-h-[75dvh] w-full grid-cols-1 rounded-3xl shadow-xl md:min-h-[75vh] md:grid-cols-4 lg:grid-cols-3">
        <div className="bg-login-box-bg relative isolate flex flex-col gap-6 rounded-t-3xl py-6.5 px-6.5 xs:px-10 xs:py-10 text-white/90 md:col-span-2 md:rounded-t-none md:rounded-l-3xl md:py-20 lg:px-20 lg:text-start">
          <h1 className="text-[2.2rem] xs:text-4xl font-bold xs:text-start text-center md:text-5xl">
            Welcome To Our Website!
          </h1>
          <p className="text-md hidden xs:block max-w-[85%] leading-6 font-medium text-pretty md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            optio! Eos eligendi non officiis sed corrupti quaerat, vero incidunt
            recusandae.
          </p>

          <div className="mx-auto flex h-full w-fit flex-wrap items-end justify-center gap-3.5 xs:gap-6 pt-5">
            {socialLinks.map((link, index) => (
              <div key={link.label} className="group relative isolate">
                <a
                  href={link.url}
                  target="_blank"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    background: hoveredIndex === index ? link.color : 'white',
                  }}
                  rel="noopener noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#6352ec] shadow-md duration-200 hover:text-white`}
                >
                  {link.icon}
                </a>
                <div className="[cubic-bezier(0.68, -0.55, 0.265, 1.55)] scale-0 pointer-events-none opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:-translate-y-16 group-hover:opacity-100">
                  <span className="absolute bottom-0 left-0 -z-10 max-w-25 min-w-28  translate-x-[-25%] rounded-lg bg-white p-3 text-center font-bold text-black shadow-md hover:bottom-16">
                    {link.label}
                  </span>
                  <span className="absolute top-0 left-[35%] -z-100 h-4 w-4 -translate-y-2.5 rotate-45 bg-white shadow-md"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xs:max-h-none flex max-h-90 min-h-90 flex-col items-center justify-center gap-8 rounded-b-3xl bg-white py-8 md:col-span-2 md:rounded-l-none md:rounded-r-3xl lg:col-span-1">
          <h2 className="text-2xl font-bold text-[#6352ec] uppercase">
            user login
          </h2>
          <form className="xs:gap-6 xs:px-8 flex w-full flex-col items-center justify-center gap-4 px-4">
            <div className="relative grid place-items-center">
              <label
                htmlFor="email"
                className="absolute top-0 left-0 translate-x-5 translate-y-2.5 text-xl text-[#6352ec]"
              >
                <FaUserAlt />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-[#eae6ff] px-14 py-2 font-semibold"
              />
            </div>
            <div className="relative grid place-items-center">
              <label
                htmlFor="password"
                className="absolute top-0 left-0 translate-x-5 translate-y-2.5 text-xl text-[#6352ec]"
              >
                <FaUnlockAlt />
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-full bg-[#eae6ff] px-14 py-2 font-semibold"
              />
            </div>
            <div className="text-md flex w-full flex-wrap items-center justify-center gap-4 font-semibold text-[#6352ec]">
              <span className="mt-2 flex items-stretch gap-2">
                <input
                  type="checkbox"
                  name="remeberME"
                  id="remeberME"
                  className="accent-[#6352ec]"
                />
                <span>Remember Me</span>
              </span>
              <span className="self-end">
                <a href="/">Forgot Password?</a>
              </span>
            </div>
            <button className="bg-login-bg-light min-w-50 rounded-full px-4 py-2 font-bold text-white">
              Log In
            </button>
          </form>
        </div>
      </article>
</ScrollMotion>

    </main>
  );
};

export default LoginPage;
