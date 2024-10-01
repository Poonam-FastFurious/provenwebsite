function Ordertracking() {
  return (
    <>
      <section className="gi-track py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Track your order</h1>
              <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                Enter your order number to track your package
              </p>
            </div>
            <div className="space-y-2">
              <input
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm  file:text-sm file:font-medium  border-gray-200 "
                type="text"
                placeholder="Enter your order number"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground  bg-AFPPrimary text-white h-11 rounded-md px-8 w-full">
                Track Order
              </button>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="gi-track-box rounded-[5px] w-full">
              <div className="px-[12px]">
                <div className="gi-steps mt-[24px] border-[1px] border-solid border-[#eee] rounded-[5px]">
                  <div className="gi-steps-body table table-fixed w-full max-[767px]:block max-[767px]:text-[14px]">
                    <div className="gi-step max-[767px]:block max-[767px]:text-[14px] max-[767px]:border-r-[0] max-[767px]:border-b-[1px] gi-step-completed py-[30px] px-[15px] table-cell relative transition-all duration-[0.25s] ease-in-out border-r-[1px] border-solid border-[#e9ecef] text-[#777] font-normal text-center capitalize">
                      <span className="gi-step-indicator bg-[#5caf90] text-[#fff] leading-[1.25rem] block absolute top-[15px] right-[15px] w-[1.5rem] h-[1.5rem] border-[1px] border-solid border-[#e9ecef] rounded-[50%] text-[0.875rem] font-normal text-center capitalize">
                        <i
                          className="fa fa-check leading-[23px] text-[0.875rem] text-[#fff]"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="gi-step-icon block w-[1.5rem] h-[1.5rem] mt-[0] mb-[0.75rem] mx-auto transition-all duration-[0.25s] ease-in-out text-[#999] text-[22px]">
                        <i className="fi fi-rs-comment-check text-[#999] text-[22px] font-normal text-center capitalize"></i>
                      </span>
                      Order
                      <br /> confirmed
                    </div>
                    <div className="gi-step max-[767px]:block max-[767px]:text-[14px] max-[767px]:border-r-[0] max-[767px]:border-b-[1px] gi-step-completed py-[30px] px-[15px] table-cell relative transition-all duration-[0.25s] ease-in-out border-r-[1px] border-solid border-[#e9ecef] text-[#777] font-normal text-center capitalize">
                      <span className="gi-step-indicator bg-[#5caf90] text-[#fff] leading-[1.25rem] block absolute top-[15px] right-[15px] w-[1.5rem] h-[1.5rem] border-[1px] border-solid border-[#e9ecef] rounded-[50%] text-[0.875rem] font-normal text-center capitalize">
                        <i
                          className="fa fa-check leading-[23px] text-[0.875rem] text-[#fff]"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="gi-step-icon block w-[1.5rem] h-[1.5rem] mt-[0] mb-[0.75rem] mx-auto transition-all duration-[0.25s] ease-in-out text-[#999] text-[22px]">
                        <i className="fi fi-rs-settings text-[#999] text-[22px] font-normal text-center capitalize"></i>
                      </span>
                      Processing
                      <br /> order
                    </div>
                    <div className="gi-step max-[767px]:block max-[767px]:text-[14px] max-[767px]:border-r-[0] max-[767px]:border-b-[1px] gi-step-active py-[30px] px-[15px] table-cell relative transition-all duration-[0.25s] ease-in-out border-r-[1px] border-solid border-[#e9ecef] text-[#777] font-normal text-center capitalize">
                      <span className="gi-step-icon block w-[1.5rem] h-[1.5rem] mt-[0] mb-[0.75rem] mx-auto transition-all duration-[0.25s] ease-in-out text-[#999] text-[22px]">
                        <i className="fi fi-rs-gift text-[#999] text-[22px] font-normal text-center capitalize"></i>
                      </span>
                      Quality
                      <br /> check
                    </div>
                    <div className="gi-step max-[767px]:block max-[767px]:text-[14px] max-[767px]:border-r-[0] max-[767px]:border-b-[1px] py-[30px] px-[15px] table-cell relative transition-all duration-[0.25s] ease-in-out border-r-[1px] border-solid border-[#e9ecef] text-[#777] font-normal text-center capitalize">
                      <span className="gi-step-icon block w-[1.5rem] h-[1.5rem] mt-[0] mb-[0.75rem] mx-auto transition-all duration-[0.25s] ease-in-out text-[#999] text-[22px]">
                        <i className="fi fi-rs-truck-side text-[#999] text-[22px] font-normal text-center capitalize"></i>
                      </span>
                      Product
                      <br /> dispatched
                    </div>
                    <div className="gi-step max-[767px]:block max-[767px]:text-[14px] max-[767px]:border-r-[0] max-[767px]:border-b-[0] py-[30px] px-[15px] table-cell relative transition-all duration-[0.25s] ease-in-out border-r-[1px] border-solid border-[#e9ecef] text-[#777] font-normal text-center capitalize">
                      <span className="gi-step-icon block w-[1.5rem] h-[1.5rem] mt-[0] mb-[0.75rem] mx-auto transition-all duration-[0.25s] ease-in-out text-[#999] text-[22px]">
                        <i className="fi fi-rs-home text-[#999] text-[22px] font-normal text-center capitalize"></i>
                      </span>
                      Product
                      <br /> delivered
                    </div>
                  </div>
                  <div className="gi-steps-header p-[0.375rem] border-t-[1px] border-solid border-[#e9ecef] max-[767px]:hidden">
                    <div className="progress w-full bg-[#e9ecef] rounded-full h-[0.25rem]">
                      <div className="bg-[#5caf90] h-[0.25rem] rounded-full w-[50%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ordertracking;
