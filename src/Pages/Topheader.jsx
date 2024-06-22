import { Link } from "react-router-dom";

function Topheader() {
  return (
    <>
      <div className="header-top py-[10px] text-[#fff]  bg-AFPPrimaryDark max-[767px]:hidden">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap px-[12px]">
            <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:block max-[767px]:hidden">
              <div className="header-top-social">
                <ul className="mb-[0] p-[0] flex">
                  <li className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px] mr-[15px]">
                    <Link
                      to="#"
                      className="mx-[5px] text-center flex items-center justify-center text-[15px]"
                    >
                      <i className="fi fi-rr-phone-call transition-all duration-[0.3s] ease-in-out text-[#fff]"></i>
                    </Link>
                    +91 987 654 3210
                  </li>
                  <li className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px]">
                    <Link
                      to="#"
                      className="mx-[5px] text-center flex items-center justify-center text-[15px]"
                    >
                      <i className="fi fi-brands-whatsapp transition-all duration-[0.3s] ease-in-out text-[#fff]"></i>
                    </Link>
                    +91 987 654 3210
                  </li>
                </ul>
              </div>
            </div>

            <div className="grow-[1] shrink-[0] basis-[0%] text-center max-[1199px]:hidden">
              <div className="header-top-message text-[13px]"></div>
            </div>

            <div className="grow-[1] shrink-[0] basis-[0%]">
              <div className="header-top-right-inner flex justify-end">
                <Link
                  className="gi-help pl-[20px] text-[13px] text-[#fff] tracking-[0.7px] font-normal hover:text-[#5caf90]"
                  to="#"
                >
                  Help?
                </Link>
                <Link
                  className="gi-help pl-[20px] text-[13px] text-[#fff] tracking-[0.7px] font-normal hover:text-[#5caf90]"
                  to="/ordertracking"
                >
                  Track Order?
                </Link>

                <div className="header-top-lan-curr header-top-lan dropdown pl-[20px] flex flex-wrap relative">
                  <button
                    type="button"
                    className="dropdown-toggle text-[13px] flex items-center p-[0] transition-all duration-[0.3s] ease delay-0 text-[#fff] border-[0] tracking-[0.7px]"
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topheader;
