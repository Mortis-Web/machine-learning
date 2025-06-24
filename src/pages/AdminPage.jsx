import { FaUserAlt, FaUnlockAlt, FaUserSecret } from 'react-icons/fa';
import { LiaUserSecretSolid } from 'react-icons/lia';
import { GrUserAdmin } from 'react-icons/gr';
import ScrollMotion from '../components/framer-motion/ScrollMotion';

const Login = () => {
  return (
    <main className="adminScroll bg-admin-bg-light dark:bg-admin-bg-dark flex min-h-[100dvh] flex-col items-center justify-center overflow-clip py-25 md:min-h-screen">
      <ScrollMotion>
        <form
          method="POST"
          action="/login"
          className="relative z-10 flex min-h-[350px] w-[min(450px,90%)] flex-col items-center justify-between rounded-4xl bg-gray-200/60 p-8 shadow-xl backdrop-blur-2xl"
        >
          <span className="absolute top-0 flex min-h-40 min-w-40 -translate-y-[50%] items-center justify-center rounded-full bg-[#00264d] pl-4 text-8xl text-white shadow-lg">
            <GrUserAdmin />
          </span>

          <article className="flex h-full w-full flex-col items-center justify-center gap-5 pt-20 pb-8">
            <div className="flex w-full">
              <label
                htmlFor="email"
                className="flex min-h-10 min-w-14 items-center justify-center bg-[#00264d] text-2xl text-white"
              >
                <FaUserAlt />
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="w-full bg-[#375176] p-4 font-medium tracking-wider text-white/95"
                required
              />
            </div>

            <div className="flex w-full">
              <label
                htmlFor="password"
                className="flex min-h-10 min-w-14 items-center justify-center bg-[#00264d] text-2xl text-white"
              >
                <FaUnlockAlt />
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-[#375176] p-4 font-medium tracking-wider text-white/90"
                required
              />
            </div>
          </article>
          <div className="text-md flex w-full flex-wrap items-center justify-between gap-4 font-normal text-[#375176]">
            <span className="flex items-stretch gap-2">
              <input
                type="checkbox"
                name="check"
                id="remeberMe"
                className="accent-[#375176]"
              />
              <h6>Remember me</h6>
            </span>
            <span>
              <a href="/"> Forgot Password?</a>
            </span>
          </div>
          <button
            type="submit"
            className="absolute top-[100%] min-w-3/4 rounded-b-3xl bg-white/45 py-2.5 text-2xl font-bold text-[#375176] shadow-lg backdrop-blur-3xl"
          >
            Login
          </button>
        </form>
      </ScrollMotion>
    </main>
  );
};

export default Login;
