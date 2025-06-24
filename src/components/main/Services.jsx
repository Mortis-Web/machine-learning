import serviceRobot from '../../assets/images/serviceRobot.png';
import serviceIcon1 from '../../assets/images/machine.png';
import serviceIcon2 from '../../assets/images/virtual.png';
import serviceIcon3 from '../../assets/images/cloud.png';
import serviceIcon4 from '../../assets/images/man.png';

import { FaRobot } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";


import rocket from '../../assets/images/rocket-element.png';
import eyescan from '../../assets/images/eye-element.png'

const Services = () => {
  return (
    <section className="services flex flex-col overflow-y-clip gap-10 relative isolate bg-white py-25 text-(--darkText) dark:bg-(--secBG) dark:text-white">
      <div className="flex flex-col items-center  justify-center gap-4">
        <h1 className="text-4xl text-center xs:text-start font-bold">Key Services Features</h1>
        <p className="max-w-4/5 sm:max-w-1/2 text-center md:text-lg text-md font-medium text-pretty">
          AI is the broader concept of machines being able to carry out tasks in
          a way that would normally require human intelligence.
        </p>
        <button className="flex hover:bg-(--shine) items-center justify-center shadow-lg rounded-md bg-(--button) px-4 py-3 md:text-lg text-md font-semibold text-white">
          Get Started
        </button>
      </div>
      <div className="container flex-wrap xs:flex-nowrap flex py-8 items-stretch sm:gap-0 gap-8">
        <article className="flex flex-col w-full items-center h-full justify-center gap-14 sm:[direction:rtl]">
          <div className="robo-wrapper">

          <span className="flex robo flex-col gap-4 sm:-mr-20 lg:-mr-15 xs:items-start items-center xs:text-start text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-(--button)">
              <img src={serviceIcon1} alt="serviceIcon1" />
            </div>
            <h1 className="text-xl font-bold">Deep Learning</h1>
            <p className="md:text-lg text-md font-semibold max-w-94">
              Machine learning (ML), a fundamental concept of AI research
              since...
            </p>
          </span>
          </div>

          <div className='robo-wrapper'>

          <span className="lg:mr-15  robo  flex flex-col gap-4 xs:items-start items-center xs:text-start text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-(--button)">
              <img src={serviceIcon2} alt="serviceIcon2" />
            </div>
            <h1 className="text-xl font-bold">Virtual Reality</h1>
            <p className="md:text-lg text-md font-semibold max-w-94">
              Machine learning (ML), a fundamental concept of AI research
              since...
            </p>
          </span>
          </div>
                    <div className='robo-wrapper'>

          <span className="flex robo flex-col gap-4 sm:-mr-20 lg:-mr-15 xs:items-start items-center xs:text-start text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-(--button)">
              <img src={serviceIcon3} alt="serviceIcon3" />
            </div>
            <h1 className="text-xl font-bold">Al For Cloud Services</h1>
            <p className="md:text-lg text-md font-semibold max-w-94">
              Machine learning (ML), a fundamental concept of AI research
              since...
            </p>
          </span>
</div>
        </article>
        <article className="hidden robo-wrapper sm:flex min-h-fit my-auto w-full items-center lg:max-w-85  md:max-w-75 max-w-48 justify-center">
          <img
            src={serviceRobot}
            alt="serviceRobot"
            data-tilt-animate="true"
            className="animate-hovering robo h-max w-full object-cover "
          />
        </article>
        <article className="flex flex-col items-center w-full justify-center gap-14">
          <div className='robo-wrapper'>

          <span className="flex robo flex-col gap-4  sm:-ml-15 xs:items-start items-center xs:text-start text-center">
            <div className="flex  h-14 w-14 items-center justify-center rounded-lg bg-(--button)">
              <FaRobot className='text-4xl text-white'/>
            </div>
            <h1 className="text-xl font-bold">Machine Learning
</h1>
            <p className="md:text-lg text-md font-semibold max-w-94">
              Machine learning (ML), a fundamental concept of AI research
              since...
            </p>
          </span>
          </div>

          <div className='robo-wrapper'>

          <span className="robo lg:ml-15  flex  flex-col gap-4  xs:items-start items-center xs:text-start text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-(--button)">
              <img src={serviceIcon4} alt="serviceIcon4" />
            </div>
            <h1 className="text-xl font-bold">Deep Learning</h1>
            <p className="md:text-lg text-md font-semibold max-w-94">
              Machine learning (ML), a fundamental concept of AI research
              since...
            </p>
          </span>
          </div>

                    <div className='robo-wrapper'>

          <span className="flex flex-col robo gap-4  sm:-ml-15 xs:items-start items-center xs:text-start text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-(--button)">
              <LuBicepsFlexed className='text-4xl text-white' />
            </div>
            <h1 className="text-xl font-bold">Endless Updates</h1>
            <p className="md:text-lg text-md font-semibold max-w-94">
              Machine learning (ML), a fundamental concept of AI research
              since...
            </p>
          </span>
          </div>
        </article>
      </div>
                <span className=" block -z-10 left-0 xs:left-10 w-35  lg:w-45 animate-slowhovering  absolute top-[93%] xs:top-9/10  xl:top-5/7  ">

                <img
                  src={rocket}
                  alt="rocket"
                  className="w-full h-full object-contain rotate-90"
                />
                </span>
                                <span className=" block -z-10 right-0 xs:right-10 w-30  lg:w-45 animate-slowhovering  absolute bottom-[96%] xs:bottom-[92.5%] sm:bottom-5/7 ">

                <img
                  src={eyescan}
                  alt="eyescan"
                  className="w-full h-full object-contain "
                />
                </span>


    </section>
  );
};

export default Services;
