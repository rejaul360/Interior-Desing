import React from "react";
import CountUp from "react-countup";
import "./SubHero.css";
// import CountUp from 'react-countup/build/CountUp';
import h_project from "../assets/Group 33 (1).png";

const SubHero = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" mx-auto p-2">
        {/* <!-- Grid layout --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {/*     
    <!-- Grid Item 1 --> */}
          <div className=" flex items-center">
            <div className=" text-center md:text-start">
              <div className="md:mb-11 md:pb-11 ">
                <button className=" bg-black rounded text-white hv_effect btn_style mt-7">
                  <a href="">Start Project</a>
                </button>
              </div>
              <div className="flex md:gap-10  gap-10 counter_section">
                <div className="counterOne">
                  <CountUp start={0} end={400} duration={3} suffix="+">
                    {({ countUpRef, start }) => (
                      <div className="block">
                        <span
                          className="count_up_style font_style"
                          ref={countUpRef}
                        />
                        <br />
                        <br />

                        <button
                          className="project_complete count_up_desc font_style flex items-start"
                          onClick={start}
                        >
                          Project Complete
                        </button>
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="counterOne">
                  <CountUp start={0} end={98} duration={3} suffix="%">
                    {({ countUpRef, start }) => (
                      <div className="block">
                        <span
                          className="count_up_style font_style"
                          ref={countUpRef}
                        />
                        <br />
                        <br />

                        <button
                          className="project_complete count_up_desc font_style"
                          onClick={start}
                        >
                          Satisfied Clients
                        </button>
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="counterOne">
                  <CountUp start={0} end={100} duration={3} suffix="+">
                    {({ countUpRef, start }) => (
                      <div className="block">
                        <span
                          className="count_up_style font_style"
                          ref={countUpRef}
                        />
                        <br />
                        <br />

                        <button
                          className="project_complete count_up_desc font_style"
                          onClick={start}
                        >
                          Unique Styles
                        </button>
                      </div>
                    )}
                  </CountUp>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Grid Item 2 --> */}
          <div className="">
            <img className="rounded" src={h_project} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
