import "./DesingStep.css";
import img1 from "../assets/Image (22).png";
const DesingStep = () => {
  return (
    <div className="max-w-7xl mx-auto md:mt-20 ">
      <div className=" mx-auto p-2">
        {/* <!-- Grid layout --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <!-- Grid Item 1 --> */}
          <div className="">
            <div>
              <h1 className="desing_heading text-center md:text-start">
              Designing Your Dream in Three Simple Steps
              </h1>
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
