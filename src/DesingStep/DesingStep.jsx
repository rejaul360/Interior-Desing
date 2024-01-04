import "./DesingStep.css";
import img1 from "../assets/Image (22).png";
import img2 from "../assets/Group 34.png";
import logo1 from "../assets/Group 25.png";
import logo2  from "../assets/Group 26.png";
import logo3 from "../assets/Group 27.png";

const DesingStep = () => {
  return (
    <div className="max-w-7xl mx-auto md:mt-20 ">
      <div className=" mx-auto p-2">
        {/* <!-- Grid layout --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <!-- Grid Item 1 --> */}
          <div className="">
            <div className="md:mb-20">
              <h1 className="desing_heading text-center md:text-start">
                Designing Your Dream in Three Simple Steps
              </h1>
            </div>
            <div className="w-full flex">
              <div className="image_left" >
                <img src={img2} alt="" />
              </div>
              <div className="content_right" >
                <div className="card card-side p-0 md:mb-28  mb-20 ">
                  <>
                    <img className="w-20 h-20 logo md:display" src={logo1} alt="picture" />
                  </>
                  <div className="card-body py-0 px-0  ">
                    <h2 className=" mb-4 service_sub_heading">Start Project</h2>
                    <p className="service_description">
                      Embark on your design adventure by initiating your
                      project. Share your vision and set the stage for a bespoke
                      design experience
                    </p>
                  </div>
                </div>
                <div className="card card-side p-0 md:mb-28 mb-20 ">
                  <>
                    <img className="w-20 h-20 logo" src={logo2} alt="picture" />
                  </>
                  <div className="card-body py-0 px-0   ">
                    <h2 className=" mb-4 service_sub_heading">Craft</h2>
                    <p className="service_description">
                      Collaborate closely to achieve design excellence refining
                      your vision and crafting brilliance into every aspect of
                      your space
                    </p>
                  </div>
                </div>
                <div className="card card-side p-0  ">
                  <>
                    <img className="w-20 h-20 logo" src={logo3} alt="picture" />
                  </>
                  <div className="card-body py-0 px-0   ">
                    <h2 className=" mb-4 service_sub_heading">Execute</h2>
                    <p className="service_description">
                      Witness your vision becoming a reality as we execute the
                      design plan with precision. Celebrate the joy of your
                      newly transformed space
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          {/* <!-- Grid Item 2 --> */}
          <div className="">
            <div className=" ">
              <img className="rounded" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesingStep;
