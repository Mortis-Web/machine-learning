import map from '../../assets/images/map.png';
import tail from '../../assets/images/tail.png';
import head from '../../assets/images/head.png';
import ball from '../../assets/images/efect-ball.png';
import blue from '../../assets/images/efect-cross2.png';
import yellow from '../../assets/images/efect-cross.png';
import rount from '../../assets/images/efect-rount.png';
import triangle from '../../assets/images/efect-trevuj.png';
import readRobot from '../../assets/images/planrobot.png';

const NewsLetter = () => {
  return (
    <section className="relative  bg-white py-25 text-(--darkText) dark:bg-(--secBG) dark:text-white">
      <img
        src={blue}
        alt="ball"
        className="absolute top-1/10 xs:left-40 z-10 animate-spin object-contain"
      />
      <img
        src={rount}
        alt="rount"
        className="absolute top-3/4 xs:left-10 z-10 max-w-7 animate-spin object-contain"
      />
      <img
        src={blue}
        alt="blue"
        className="absolute top-1/5 right-0 xs:right-10 z-10 max-w-7 animate-spin object-contain"
      />
      <img
        src={ball}
        alt="ball"
        className="absolute top-9/10 left-1/2 xs:left-1/4 z-10 max-w-7 animate-spin object-contain"
      />
      <img
        src={triangle}
        alt="triangle"
        className="absolute top-1/10 right-40 z-10 max-w-7 animate-spin object-contain"
      />
      <img
        src={yellow}
        alt="yellow"
        className="absolute top-9/10 left-9/10 z-10 max-w-7 animate-spin object-contain lg:right-40"
      />

      <img
        src={map}
        alt="map"
        className="absolute inset-0 top-20  -z-10 m-auto h-full w-full object-contain"
      />
      <div className="relative isolate container flex items-center justify-center">
        <article className="relative isolate flex w-full max-w-200 flex-col items-center justify-center gap-8 text-center">
          <img
            src={tail}
            alt="tail"
            className="absolute -top-15 right-[80%] z-10 hidden lg:block"
          />
          <img
            src={head}
            alt="tail"
            className="absolute top-5 left-[80%] -z-10 hidden lg:block"
          />

          <h1 className="xs:max-w-7/10 max-w-9/10 leading-tight text-3xl xs:text-4xl font-bold text-pretty">
            Subscribe to newsletters and get news.
          </h1>
          <p className="text-[1rem] xs:text-lg font-semibold text-balance">
            Sign up for updates and stay informed about the latest developments
            and be a part of our community and get the latest news and insights
          </p>
          <div className="relative isolate items-center flex flex-col w-full gap-4  xs:w-3/4 rounded-md">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              maxLength={45}
              className="text-md w-full rounded-[inherit] border-1 border-black/30 bg-gray-100/50 p-4 font-bold text-black shadow-md dark:border-(--button) dark:bg-(--logo)/50 dark:text-white"
            />
            <button className="xs:rounded-l-none hover:bg-(--shine) xs:absolute top-0 right-0 bottom-0 z-10 my-auto block h-full xs:rounded-[inherit] rounded-md bg-(--button) px-4 xs:px-2 py-3 text-lg font-semibold text-white shadow-lg">
              Comming Soon
            </button>
          </div>
        </article>
      </div>
            <img
        src={readRobot}
        alt="readRobot"
        className="animate-hovering z-100 absolute lg:-bottom-50 -bottom-30 left-0 max-h-full max-w-30 object-contain"
      />

    </section>
  );
};

export default NewsLetter;
