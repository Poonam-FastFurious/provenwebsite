/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

function CoperBenifit() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const faqse = [
    {
      question: "Beats anemia",
      answer:
        "<p>The most amazing fact about copper is that it is required in most processes that occur in our body. Right from cell formation to aiding in the absorption of iron, copper is an essential mineral for the functioning of your body.</p>",
    },
    {
      question: "Helps the digestive system perform better",
      answer:
        "<p>Copper has properties that hellp kill harmful bacteria and reduce inflammation within the stomach, making it a great remedy for ulcers, indigestion and infections. Copper also helps cleanse and detox your stomach, regulates the working of your liver and kidneys, and proper elimination of waste and ensures the absorption of nutrients from food. “When water is stored in a copper container, the mineral gets leached into it. This copper leached in the water helps in breaking down of food particles in our and improves our digestion</p>",
    },
    {
      question: "Aids weight loss",
      answer:
        "<p>To lose weight quicker, try drinking water stored in a copper vessel regularly. Apart from fine tuning your digestive system to perform better, copper also helps your body break down fat and eliminates it more efficiently, thereby, helping your body keep only what it will use and throw out the rest.</p>",
    },
    {
      question: "Helps heal wounds faster",
      answer:
        "<p>Known for its immense anti-bacterial, anti-viral and anti-inflammatory properties, copper is a great tool for healing wounds quickly. Apart from that, copper is also known to strengthen your immune system and aid in the production of new cells. But its healing properties don’t cease with helping the body externally; copper is also known to help wounds heal within the body, especially in the stomach</p>",
    },
    {
      question: "Slows down ageing",
      answer:
        "<p>If you are worried about the appearance of fine lines on your face, copper is your natural remedy. Packed with very strong anti-oxidant and cell forming properties, copper fights off free radicals, one of the main reasons for the formation of fine lines.</p>",
    },
    {
      question: "Helps maintain heart health and beats hypertension",
      answer:
        "<p>Heart disease is one of the most common ailments and copper helps minimize your risk of developing the disease. According to the American Cancer Society, copper has been found to help regulate blood pressure, heart rate and lower one’s bad cholesterol and triglyceride levels</p>",
    },
    {
      question: "Mitigates the risk of cancer",
      answer:
        "<p>Another disease that is quickly becoming extremely common, cancer, can be debilitating for both the patient and their family. How does copper help? Well, copper has very strong antioxidant properties that helps fight off free radicals and negate their ill effects – one of the main reasons for the development of cancer</p>",
    },
    {
      question: "Protects you from infections",
      answer:
        "<p>Copper is known to be oligodynamic in nature (the sterilizing effect of metals on bacteria), and can destroy bacteria very effectively. It is especially effective against E.coli and S.aureus, two bacteria that are commonly found in our environment and known to cause severe illnesses in the human body</p>",
    },
    {
      question: "Boosts skin health and melanin production",
      answer:
        "<p>Copper is the main component in the production of melanin (a pigment that mitigates the color of your eyes, hair and skin) in our bodies. Apart from that copper also aids in the production of new cells that help replenish the top most layers of your skin leaving you with smooth and supple skin.</p>",
    },
  ];
  return (
    <div className="bg-[#E8E0DC]">
      <section className="  flex flex-wrap justify-between items-center mx-auto  sm:container   bg-[#E8E0DC] ">
        <section className=" py-8 ">
          <div className="flex flex-wrap justify-between  mx-auto  ">
            <h1 className="sm:text-2xl text-2xl font-bold  text-center justify-center w-full text-[#A25223] sm:mb-8 ">
              Benefits Of Drinking Copper Water
            </h1>
            <div className="flex flex-wrap justify-between items-center mx-auto  sm:containe   ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="flex justify-center">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/4cd1/5324/26c6b261ac70a599e4f5d615e1cdfebb?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXQytzR1TNVFpa4LswcJUsDI~LDkh8Vc6n5RcRRCfKG2TAcOLz2vrfJs737GAn6v5e~jw0M4r8CoScMUMPqAQb5COcR2eYy6PsZvgMpMaip5HuKm37tz2hnVLquJ5emjLzDf7FbpyuLDmLLP5wc2DKNdVt0EWaXdJudaKaUwOsWdfviDnG8k2~5k8vmkBgjugydhsnaTB7c-wLZ~86qJfXRbk2kD2a33~hyEvhfyp5vS4RwjLGareAf9kw1kjU5oAhesytzpLjE6agiUqr~gJcYetRKjjliqksJQqpHIXp1SP4dVcBlrBWQ9-AP9mxqG-7rXnMCilch76MKgQ72F-Q__"
                    alt="Person with gesture"
                    className="w-full h-auto object-cover p-8"
                  />
                </div>
                <div className="w-full flex flex-wrap  gap-2 ">
                  {faqse.map((faq, index) => (
                    <div
                      key={faq._id}
                      className="min-[992px]:w-[100%] w-full px-[12px] border border-AFPPrimary rounded-md mx-2 sm:mx-0 md:mx-0 lg:mx-0"
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
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default CoperBenifit;
