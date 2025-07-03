import statisRobot from '../../assets/images/qualified.png';
import ball from '../../assets/images/efect-ball.png';
import blue from '../../assets/images/efect-cross2.png';
import rount from '../../assets/images/efect-rount.png';
import triangle from '../../assets/images/efect-trevuj.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Statis = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

  return (
    <section className="relative isolate overflow-x-clip bg-(--offWhite) py-25 text-(--darkText) lg:py-25 dark:bg-(--darkerBG) dark:text-white">

      <img
        src={ball}
        alt="ball"
        className="absolute top-1/10 left-0 -z-10 animate-spin object-contain lg:left-40"
      />
      <img
        src={blue}
        alt="blue"
        className="absolute top-1/2 left-10 -z-10 max-w-7 animate-spin object-contain lg:top-3/4 lg:left-10"
      />
      <img
        src={blue}
        alt="blue"
        className="absolute top-1/5 right-10 -z-10 max-w-7 animate-spin object-contain"
      />
      <img
        src={rount}
        alt="rount"
        className="absolute top-1/10 right-10 -z-10 max-w-7 animate-spin object-contain lg:right-40"
      />
      <img
        src={triangle}
        alt="rount"
        className="absolute top-9/10 right-5 -z-10 max-w-7 animate-spin object-contain lg:right-40"
      />

      <div className="container flex flex-wrap items-center justify-center gap-14 lg:justify-between lg:gap-0">
        <article className="xs:text-start flex h-full flex-col items-center justify-center gap-10 text-center lg:basis-1/2">
          <h1 className="xs:text-4xl xs:leading-12 text-[26px] leading-tight font-bold capitalize">
            Save your time and money by choosing our qualified services
          </h1>
          <p className="xs:text-lg text-[1rem] font-medium text-pretty">
            AI (Artificial Intelligence) and ML (Machine Learning) are closely
            related fieldss that are focused on the development of computer
            systems that can perform tasks that would normally require human
            intelligence, such as understanding natural language, recognizing
            images, making decisions, and solving problems.
          </p>

          <span ref={ref} className="xs:max-w-none xs:justify-evenly flex w-full max-w-90 flex-wrap items-center justify-center gap-3 text-center">
            <div  className="xs:items-start flex flex-col min-h-21 items-center">
              <h1  className="text-5xl font-bold text-(--button)">
                {inView ? (
                  <CountUp end={2500} duration={4} separator="," prefix="+" />
                ) : (
                  <span>+0</span>
                )}{' '}
              </h1>
              <h3 className="mt-1.5 text-lg font-semibold">
                Completed Projects
              </h3>
            </div>
            <div className="xs:border-x-2 xs:border-y-0  xs:items-start xs:px-6 xs:py-0 flex flex-col items-center border-y-2 border-dashed border-gray-400 py-6">
              <h1  className="text-5xl font-bold text-(--shine)">
                {inView ? (
                  <CountUp end={1350} duration={4} separator="," prefix="+" />
                ) : (
                  <span>+0</span>
                )}{' '}
              </h1>
              <h3 className="mt-1.5 text-lg font-semibold">
                Customer Satisfaction
              </h3>
            </div>{' '}
            <div className="xs:items-start flex flex-col min-h-21 items-center">
              <h1  className="text-5xl font-bold text-amber-300">
                {inView ? (
                  <CountUp end={500} duration={4} separator="," prefix="+" />
                ) : (
                  <span>+0</span>
                )}{' '}
              </h1>
              <h3 className="mt-1 text-lg font-semibold">Expert Employees</h3>
            </div>
          </span>
        </article>
        <article className="top-0 -right-30 bottom-0 my-auto flex min-h-full items-center justify-center lg:absolute lg:max-w-1/2">
          <img
            src={statisRobot}
            alt="statisRobot"
            className="h-full w-full object-contain"
          />
        </article>
      </div>
    </section>
  );
};

export default Statis;
