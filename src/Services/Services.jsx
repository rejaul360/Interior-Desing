import "./Services.css";

import img1 from "../assets/Lighting design icon.png";
import img2 from "../assets/Interior design icon.png";
import img3 from "../assets/Outdoor design icon.png";
const Services = () => {
  return (
    <div className="service_section  mt-20 ">
      <div className="max-w-7xl mx-auto  mt-20 mb-20 ">
        {/* Service Headline */}
        <div className="flex gap-7 items-center mb-20">
          <div className="bg-black w-24 h-1">
            <hr />
          </div>
          <h1 className=" service_heading">Our Services</h1>
        </div>
        {/* Services Content */}
        <div className="service_content grid lg:grid-cols-3 grid-cols-1 w-full gap-5">
          {/* content one */}
          <div className="w1/3 card_style">
            <div className="card card-side p-0">
              <>
                <img className="w-20 h-20 " src={img1} alt="picture" />
              </>
              <div className="card-body py-0 px-0 md:pl-7  ">
                <h2 className=" mb-5 service_sub_heading">Lighting Design</h2>
                <p className="service_description">
                  Achieve the perfect balance of ambient, task, and accent
                  lighting for a functional atmosphere
                </p>
              </div>
            </div>
          </div>
          {/* content Two */}
          <div className="w1/3 card_style">
            <div className="card card-side p-0">
              <>
                <img className="w-20 h-20 " src={img2} alt="picture" />
              </>
              <div className="card-body py-0 px-0 md:pl-7  ">
                <h2 className=" mb-5 service_sub_heading">Interior Design</h2>
                <p className="service_description">
                From concept to completion, we oversee every detail to bring your vision to life efficiently
                </p>
              </div>
            </div>
          </div>
          {/* content Three */}
          <div className="w1/3 card_style">
            <div className="card card-side p-0">
              <>
                <img className="w-20 h-20 " src={img3} alt="picture" />
              </>
              <div className="card-body py-0 px-0 md:pl-7  ">
                <h2 className=" mb-5 service_sub_heading">Outdoor Design</h2>
                <p className="service_description">
                Celebrate the changing seasons with our seasonal outdoor decor services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
