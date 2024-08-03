/* eslint-disable react/prop-types */
function NewcatCard({ icon, title }) {
  return (
    <div>
      <div className="gi-cat-box transition-all duration-[0.3s] ease-in-out relative  border rounded-xl">
        <div className="gi-cat-icon h-[150px] p-[40px] flex flex-col items-center justify-center  bg-AFPPrimaryLight relative z-[5] rounded-xl">
          <img
            src={icon}
            alt="category"
            className="h-[50px] w-[50px] w-50 my-[10px] block"
          />
          <div className="gi-cat-detail text-center">
            <dive to="#">
              <h4 className="gi-cat-title m-[0] text-[15px] text-center leading-[22px] font-semibold text-[#4b5966] capitalize font-manrope">
                {title}
              </h4>
            </dive>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewcatCard;
