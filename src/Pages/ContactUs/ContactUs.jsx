/* eslint-disable react/no-unescaped-entities */
import { FaHome } from "react-icons/fa";
import { MdCall, MdOutlineMailLock } from "react-icons/md";
import { PiBuildings } from "react-icons/pi";
import contactbanner from "../../assets/Images/analtsis.webp";
function ContactUs() {
  return (
    <>
      <div className="relative overflow-hidden h-[450px]">
        <img
          className="absolute left-0 top-0 w-full h-full opacity- object-cover"
          src="https://s3-alpha-sig.figma.com/img/c927/1695/feb959553a8e29013ee7a58abe2d7d52?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NieXCR3u1hLi15thKCCq9mZF88LZ258meT5ttKOpIXfx0ukSMzWurFDBK8ftXPf2E0OLtuRo-6ViwasddfCZRcgGp1ninyrbsrfHjyK8M~qxMaVy09TOsv2AZ~6FCPNS965Ezd665bYz7Hdlgq6IHWln2ynhwWR-0Z9axq-SzdBwo0Bzcd2IK08us5XuzayB0~FbjhQ1I04vY45T9YAxWn4UQT2zOYFgI5FO66HADLLv4D-NfaiIkxTtRopClMJyrOuYJEQ7-ItkSapuh87vUviOmHHpeFDM4DTjfJoVJunhxYjh534lp-8F8PPOXQ5w5qpsC0UbVFpFo5322IDaeA__"
          alt=""
        />
        <div className="absolute left-0 top-0 w-full h-full bg-gray-500 opacity-20"></div>
        <div className="relative z-10 h-[250px] flex  items-center">
          <h1 className="  text-AFPPrimary  font-bold text-6xl  absolute top-[200px] left-[380px]">
            Contact US
          </h1>
        </div>
      </div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-xl font-extrabold text-gray-800">Contact Us</h2>
            <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
              We'd love to hear from you.
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Don’t find your answer. Contact with us
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-2 gap-y-2 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-2">
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-AFPPrimaryDark">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <FaHome className=" text-4xl" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Registered Address
              </h4>
              <p className="text-sm font-normal text-white">
                D -2/328 Nehru Vihar Delhi -110094 (India)
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-AFPPrimaryDark">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <PiBuildings className="text-4xl" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Corporate Address
              </h4>
              <p className="text-sm font-normal text-white">
                E-5, Dayalpur, Karawal Nagar Road, Delhi-110094
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-AFPPrimaryDark">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdOutlineMailLock className="text-4xl" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Email Us
              </h4>
              <p className="text-sm font-normal text-white">
                info@provenonline.in
                <br />
                info@provenonline.in
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4  border p-8 bg-AFPPrimaryDark">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdCall className=" text-4xl" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Call Now
              </h4>
              <p className="text-sm font-normal text-white">
                1800-532-3367
                <br />
                1800-532-3367
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white  xl:px-60 lg:mx-0 sm:px-0 md:px-0 px-0 items-center  lg:h-auto">
        <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
          <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
            <h2 className="text-xl font-extrabold text-gray-800">
              FEEL FREE TO TALK TO US
            </h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              Have a specific inquiry or looking to explore new opportunities?
              Our experienced team is ready to engage with you.
            </p>

            <form className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
              ></textarea>
              <button
                type="button"
                className="text-white  bg-AFPPrimary  font-semibold rounded-md text-sm px-6 py-3 block w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="z-10 relative lg:col-span-2">
            <img
              src={contactbanner}
              className="w-3/4 object-contain block mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-white  xl:px-60 lg:mx-0 sm:px-0 md:px-0 px-0 items-center  lg:h-auto pb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55986.544485233884!2d77.265536!3d28.714793000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc1f6f14d23f%3A0xd80245a480de6914!2sProven%20Water%20Industries%20Private%20Limited%20(Proven%20RO)!5e0!3m2!1sen!2sus!4v1718707692166!5m2!1sen!2sus"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactUs;
