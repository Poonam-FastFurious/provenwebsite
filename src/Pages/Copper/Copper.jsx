/* eslint-disable react/no-unescaped-entities */
import images2 from "../../assets/Images/coperimage.png";
import images3 from "../../assets/Images/icon-pitta.png";
import images4 from "../../assets/Images/icon-vata.png";
import images5 from "../../assets/Images/icon-kapha.png";
import images6 from "../../assets/Images/coperbanner.jpeg";
import images7 from "../../assets/Images/icon-anti-inflammatory.png";
import images8 from "../../assets/Images/icon-antimicrobial.png";
import images9 from "../../assets/Images/icon-antioxidant.png";
import images10 from "../../assets/Images/Plus.png";
import images11 from "../../assets/Images/Drop.png";
import images12 from "../../assets/Images/Max.png";
import images13 from "../../assets/Images/Clean.png";
import images14 from "../../assets/Images/Ionic.png";
import { useState } from "react";

import Crausalforimage from "../Home/Crausalforimage";
import image from "../../assets/Images/depika.png";
function Copper() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const faqse = [
    {
      question:
        "Can I replace my existing cartridge with the copper one & what will be the cost?",
      answer:
        "<p>We are yet to launch the exchange plan. You may share your contact details and we’ll let you know once this is available.</p>",
    },
    {
      question: "What is the cost of the cartridge?",
      answer:
        "<p>Thank you for connecting with us. The cartridge is included in the product and there is no additional cost associated with it.</p>",
    },
    {
      question:
        "Can this cartridge be used across all Proven RO or any particular product?",
      answer:
        "<p>You need to check the suitability of the cartridge to define its usage. Please get in touch with the nearest Proven authorised service center for the same.</p>",
    },
    {
      question: "Is the cost of cartridge same or depends on the model?",
      answer:
        "<p>The cost of the cartridge is included in the product cost. There are no additional charges associated with it.</p>",
    },
    {
      question:
        "How is this cartridge different from the regular or existing cartridge?",
      answer:
        "<p>The cartridge is enriched with copper which benefits your drinking water.</p>",
    },
    {
      question: "For which areas/location is this cartridge more useful?",
      answer:
        "<p>The usage of the cartridge is not limited to any location. It is useful across India.</p>",
    },
    {
      question: " Which cities/states will it be made available?",
      answer:
        "<p>The cartridge is available across all cities in India. Please contact your nearest Proven authorised service center for more information.</p>",
    },
    {
      question: "What is the durability/life of the cartridge?",
      answer: "<p>The cartridge can be used upto 6000 litres.</p>",
    },
    {
      question:
        "What are the advantages & qualities of copper cartridge over the existing ones?",
      answer:
        "<p>The cartridge is enriched with copper which benefits drinking water. You will no longer have the hassle of storing water in copper vessels to get copper benefits. This cartridge infuses copper ions in your water giving you benefits of copper.</p>",
    },
    {
      question: "The cartridge is suitable at what TDS level?",
      answer: "<p>The cartridge is suitable for water with all TDS levels.</p>",
    },
    {
      question: "What is the price for the copper cartridge?",
      answer:
        "<p>The price of cartridge is included in the product. Request you to get in touch with your nearest Proven authorised service center</p>",
    },
    {
      question: "What are the benefits to me on purchase?",
      answer:
        "<p>Copper enriched cartridge adds the goodness of copper in your drinking water. Copper is known to destroy disease causing micro-organisms in water. Further, copper is a very essential trace element for the metabolic function of a human body.</p>",
    },
    {
      question: "How many times in a day can I consume copper water?",
      answer:
        "<p>The water intake recommended is 3 ltrs/day for a healthy person.</p>",
    },
    {
      question: "How often do I need to renew the cartridge?",
      answer:
        "<p>The cartridge can be used upto 6000 liters. Post that, you need to renew the cartridge.</p>",
    },
    {
      question: "Can I have a trial sample?",
      answer:
        "<p>You can opt for a Free Home Demo. Please share your details via the Demo Request Form on this page or you may call the number provided.</p>",
    },
    {
      question: "Is there an exchange or return policy?",
      answer: "<p>Yes , Kindly Visit our Refund Policy Page at the bottom</p>",
    },
    {
      question: "Does copper infused water have any side effects?",
      answer:
        "<p>As per the drinking water specification (ISO 10500-2012), the desirable limit of copper is 0.05 ppm. The copper from Proven RO is maintained to leach as per the drinking specifications. Hence, it does not have any side effects.</p>",
    },
  ];

  return (
    <>
      <div className=" w-full ">
        <img src={images6} alt="" className=" w-full  h-full" />
      </div>
      <section className="flex flex-col lg:flex-row items-center justify-center px-6 py-12">
        <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
          <img
            src={images2}
            alt="Proven Water Purifier"
            className="max-w-full h-auto"
          />
        </div>

        <div className="lg:w-1/2 w-full text-center lg:text-left lg:pl-8 container">
          <h1 className="text-xl lg:text-2xl font-bold  text-[#A25223] mb-4">
            Presenting Proven RO range of water purifiers
          </h1>
          <p className="text-base  font-bold lg:text-lg text-[#A25223] mb-6 text-justify ">
            Proven RO water purifiers bring together the goodness of Copper with
            Calcium, Magnesium, and Zinc. Active Copper infuses Copper ions into
            the water. The effect releases not only Copper but the right amount
            of other micronutrients like Calcium, Magnesium, and Zinc.
          </p>
        </div>
      </section>
      <div className=" w-full  container  border border-AFPPrimary  py-4  my-4">
        <img
          src="https://provenonline.in/wp-content/uploads/2019/12/Banner-copper-water.jpg"
          alt=""
          className=" w-full  h-full"
        />
      </div>
      <section className="bg-[#EDD4C4]">
        <section className="text-center px-6 py-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Ayurveda In Our Technology
          </h2>

          <p className="text-base font-bold lg:text-lg text-[#A25223] mb-8 container w-[100%] sm:w-[70%] text-justify">
            According to Ayurveda, copper has many benefits, from anti-ageing
            properties to cancer prevention. Drinking copper-infused water can
            transform your health. Based on Ayurveda, there are three basic
            energies in the human body called Doshas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg  p-12 text-center border border-orange-400">
              <div className="mb-4">
                <img src={images3} alt="Pitta" className="w-24 h-24 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-orange-500">
                Pitta – energy of metabolism
              </h3>
            </div>

            <div className="bg-white shadow-lg rounded-lg  p-12 text-center border border-green-400">
              <div className="mb-4">
                <img src={images4} alt="Kapha" className=" w-24 h-24 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-green-500">
                Kapha – energy of structure
              </h3>
            </div>

            <div className="bg-white shadow-lg rounded-lg  p-12 text-center border border-blue-400 ">
              <div className="mb-4">
                <img src={images5} alt="Vata" className=" w-24 h-24 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-blue-500">
                Vata – energy of movement
              </h3>
            </div>
          </div>
        </section>
      </section>
      <section className=" shadow-sm">
        <section className="text-center px-6 py-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 ">
            THE BENEFITS OF COPPER WATER
          </h2>

          <p className="text-base font-bold lg:text-lg text-[#A25223] mb-8 container w-[100%] text-justify ">
            Drinking copper-enriched water on an empty stomach in the morning is
            supposed to balance all three doshas and ensures your body’s healthy
            functioning. The Ayurvedic practice of drinking water stored in
            copper vessels is what our purifier brings you. Copper kills harmful
            bacteria, fungi and algae. Water stored in copper vessels absorbs
            this mineral. Instead, our puri er infuses copper in water
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white   p-12 text-center  border">
              <div className="mb-4">
                <img src={images7} alt="Pitta" className="w-24 h-24 mx-auto" />
              </div>
              <h3 className="text-sm font-semibold ">Antioxidant</h3>
              <p className=" text-justify">
                Copper aids in treating ulcers, indigestion, and infections by
                killing bacteria. It detoxifies the body, supports liver and
                kidney function, and alleviates joint pain from inflammation.
              </p>
            </div>

            <div className="bg-white   p-12 text-center  border ">
              <div className="mb-4">
                <img src={images8} alt="Kapha" className=" w-24 h-24 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold ">Antimicrobial</h3>
              <p className=" text-justify">
                Copper sterilizes and destroys bacteria quickly, protecting
                against strains like E. coli and S. aureus, and promotes faster
                wound healing.
              </p>
            </div>

            <div className="bg-white   p-12 text-center  w-full  border ">
              <div className="mb-4">
                <img src={images9} alt="Vata" className=" w-24 h-24 mx-auto" />
              </div>
              <h3 className="l font-semibold ">Anti-inflammatory</h3>
              <p className=" w-full text-justify">
                Copper treats ulcers, indigestion, and infections by killing
                bacteria. It detoxifies, supports liver and kidney function, and
                alleviates joint pain from inflammation.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="  py-2">
        <section className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4  p-4 bg-[#DDB67C]  max-w-7xl container">
            What makes Proven RO better than a copper vessel or other water
            purifiers?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
            <div className="  border-[2px] rounded-lg  flex flex-col justify-between border-[#D6AF95]  shadow-md text-center">
              <div className="flex justify-center items-center  rounded-full mx-auto mb-4">
                <img src={images10} alt="" />
              </div>
              <div className="bg-[#FCE9DE] p-4 ">
                <h3 className="text-lg font-semibold  text-[#CDA38C]">
                  Beneficial for All Age Groups
                </h3>
                <p className="mt-2 text-sm text-[#BE9683]">
                  Reputed hospitals and institutions have endorsed benefits of
                  this technology for all age groups.
                </p>
              </div>
            </div>
            <div className=" border-[#D6AF95] border-[2px] rounded-lg  flex flex-col justify-between shadow-md text-center">
              <div className="flex justify-center items-center  rounded-full mx-auto mb-4">
                <img src={images11} alt="" />
              </div>
              <div className="bg-[#FCE9DE] p-4 ">
                <h3 className="text-lg font-semibold  text-[#CDA38C]">
                  Right Copper in Every Drop
                </h3>
                <p className="mt-2 text-sm text-[#BE9683]">
                  The innovative release technology ensures the right amount of
                  Copper in water. <br />
                </p>
              </div>
            </div>
            <div className=" border-[#D6AF95] border-[2px] rounded-lg   flex flex-col justify-between shadow-md text-center">
              <div className="flex justify-center items-center  rounded-full mx-auto mb-4">
                <img src={images12} alt="" />
              </div>
              <div className="bg-[#FCE9DE] p-4 ">
                <h3 className="text-lg font-semibold  text-[#CDA38C]">
                  Maxx EffectTM
                </h3>
                <p className="mt-2 text-sm text-[#BE9683]">
                  The Maxx EffectTM ensures not just Copper but also Calcium,
                  Magnesium and Zinc are infused in water.
                </p>
              </div>
            </div>
            <div className=" border-[#D6AF95] border-[2px] rounded-lg  flex flex-col justify-between shadow-md text-center">
              <div className="flex justify-center items-center  rounded-full mx-auto mb-4">
                <img src={images13} alt="" />
              </div>
              <div className="bg-[#FCE9DE] p-1.5 ">
                <h3 className="text-lg font-semibold  text-[#CDA38C]">
                  Clean Free Technology
                </h3>
                <p className="mt-2 text-sm text-[#BE9683]">
                  No more hassle of cleaning oxidized vessel. The Active Copper
                  MaxxTMM cartridge has Copper ions making it a Clean Free
                  Technology.
                </p>
              </div>
            </div>
            <div className="  border-[2px] rounded-lg  flex flex-col justify-between  border-[#D6AF95]  shadow-md text-center">
              <div className="flex justify-center items-center  rounded-full mx-auto mb-4">
                <img src={images14} alt="" />
              </div>
              <div>
                <div className="bg-[#FCE9DE] p-4 ">
                  <h3 className="text-lg font-semibold  text-[#CDA38C]">
                    Copper Ionic Infusion
                  </h3>
                  <p className="mt-2 text-sm text-[#BE9683]">
                    Ensures that Copper is infused in water.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="text-center py-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800   p-4 bg-[#DDB67C]  max-w-7xl container">
          FAQ's on Copper
        </h2>
        <section className="gi-faq ">
          <div className="flex flex-wrap justify-between  mx-auto  container">
            <div className="max-w-7xl mx-auto  bg-[#E8E0DC]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="w-full flex flex-wrap gap-1 px-2 py-4">
                  {faqse.map((faq, index) => (
                    <div
                      key={faq._id}
                      className="min-[992px]:w-[100%] w-full   px-[12px] border-[1px] border-solid border-[#eee] rounded-[5px]"
                    >
                      <div className="gi-accordion style-1">
                        <div className="gi-accordion-item  overflow-hidden mb-[10px]">
                          <h4
                            className="gi-accordion-header m-[0] py-[15px] pl-[30px] pr-[35px]  text-[#4b5966] text-[16px] leading-[28px] font-medium relative font-Poppins  tracking-[0.01rem] max-[767px]:text-[15px] text-left"
                            onClick={() => toggleFaq(index)}
                          >
                            {faq.question}
                          </h4>
                          <div
                            className={`gi-accordion-body py-[15px] text-[14px] text-[#777] leading-[24px] text-left ${
                              openFaq === index ? "" : "hidden"
                            }`}
                          >
                            <div
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <img
                    src={image}
                    alt="Person with gesture"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Crausalforimage />
    </>
  );
}

export default Copper;
