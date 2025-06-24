import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import aboutRobot from '../../assets/images/AIchip.png';
import brain from '../../assets/images/brain-element.png';
import texture from '../../assets/images/aboutUSTexture.png';
const AboutUs = () => {
  return (

    <section className="relative isolatebg-white text-(--darkText) dark:bg-(--secBG) dark:text-white">

      <span className="absolute right-0 bottom-0 max-h-100 max-w-100">
        <img
          src={texture}
          alt="texture"
          className="h-full w-full object-cover"
        />
      </span>
      <div className="container flex flex-wrap items-center justify-center  gap-14 lg:gap-7 pt-10 pb-25 ">
        <article className="relative robo-wrapper isolate max-w-8/10 xs:max-w-none flex items-center justify-center lg:mr-0 -mr-12.5 xs:-mr-25 ">
          <img src={aboutRobot} data-tilt-animate="true" alt="aboutRobot" className="animate-hovering robo w-full h-full object-contain" />
          <span className="absolute top-0 block  max-w-35 xs:max-w-60 -left-25 xs:-left-50">
            <img
              src={brain}
              alt="brain"
              className="animate-rotating h-full w-full object-cover"
            />
          </span>
        </article>
        <article className="relative isolate justify-center items-center text-center xs:text-start xs:items-start flex flex-col gap-8 lg:basis-1/2 ">
          <h1 className="xs:text-4xl text-[26px] leading-tight xs:leading-12 font-bold text-balance capitalize">
            The world's leading{' '}
            <span className="inline text-(--shine)">AI</span> and{' '}
            <span className="inline text-amber-300"> machine learning </span>{' '}
            company
          </h1>
          <p className="xs:text-xl text-[1rem] font-medium text-balance">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="flex max-w-120 sm:min-w-120 flex-wrap items-center justify-center xs:justify-between gap-2 sm:gap-5">
            <span className="flex min-w-57.5 items-center gap-2 text-lg font-semibold">
              <IoMdCheckmarkCircleOutline className="text-xl text-(--shine)" />
              Talent Advisory Team
            </span>
            <span className="flex min-w-57.5 items-center gap-2 text-lg font-semibold">
              <IoMdCheckmarkCircleOutline className="text-xl text-(--shine)" />
              100% Security System{' '}
            </span>{' '}
            <span className="flex min-w-57.5 items-center gap-2 text-lg font-semibold">
              <IoMdCheckmarkCircleOutline className="text-xl text-(--shine)" />
              High-Quality Results
            </span>{' '}
            <span className="flex min-w-57.5 items-center gap-2 text-lg font-semibold">
              <IoMdCheckmarkCircleOutline className="text-xl text-(--shine)" />
              24 Hours Supports
            </span>
          </div>
          <button className="max-w-fit hover:bg-(--shine) shadow-lg rounded-md bg-(--button) px-4 py-3 text-lg font-semibold text-white">
            Get Started
          </button>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
