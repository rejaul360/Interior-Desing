import "./DreamDesing.css";
import img1 from "../assets/Image (21).png";
const DreamDesing = () => {
  return (
    <div className="max-w-7xl mx-auto p-2 mt-20 mb-20">
      <div className="container mx-auto ">
        {/* <!-- Grid layout --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {/* <!-- Grid Item 1 --> */}
          <div className=" ">
            <img className="rounded" src={img1} alt="" />
          </div>

          {/* <!-- Grid Item 2 --> */}
          <div>
            <div className=" ">
              <div>
                <h1 className="desing_heading text-center md:text-start mb-5">
                  Designing Your Dream With Brilliance
                </h1>
                <p className="text-center md:text-left h_pera md:mt-4 md:mb-4">
                  Elevate your spaces with bespoke interior designs that reflect
                  your unique style and aspirations, crafted with precision and
                  brilliance for an unforgettable living experience
                </p>
              </div>

              {/* Accordion section */}
              <div>
                <div className="join join-vertical w-full">
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input
                      type="radio"
                      name="my-accordion-4"
                      checked="checked"
                    />
                    <div className="collapse-title text-xl font-semibold font_style">
                      Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                      <p className="font_style text-xl">
                        Looking for inspiring living room interior design ideas?
                        Discover fresh designs and ideas from our handpicked
                        selection of wall paintings and designs, modular TV
                        units and hall designs. Create the perfect living space
                        with us.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-semibold  font_style">
                      Commercial Office Room Interior Design
                    </div>
                    <div className="collapse-content">
                      <p className="font_style text-xl">
                        Use natural elements like plants, wood finishes, and big
                        windows to let in lots of natural light. Add indoor
                        plants and calming water features to create a refreshing
                        and relaxing atmosphere.
                      </p>
                    </div>
                  </div>
                  {/* <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-semibold font_style">
                      hospital interior
                    </div>
                    <div className="collapse-content">
                      <p className="font_style text-xl">
                        Patients are made to feel at home by carefully selecting
                        the colours, furnishings, lighting, and other features.{" "}
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="md:mb-11 md:pb-11 lern_btn ">
              <button className=" bg-black rounded text-white hv_effect btn_style mt-6 ">
                <a className="" href="">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamDesing;
