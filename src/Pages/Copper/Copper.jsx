import images2 from "../../assets/Images/coperimage.png";
import images3 from "../../assets/Images/icon-pitta.png";
import images4 from "../../assets/Images/icon-vata.png";
import images5 from "../../assets/Images/icon-kapha.png";
import images6 from "../../assets/Images/coperbanner.jpeg";
import images7 from "../../assets/Images/icon-anti-inflammatory.png";
import images8 from "../../assets/Images/icon-antimicrobial.png";
import images9 from "../../assets/Images/icon-antioxidant.png";
function Copper() {
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
          <p className="text-base  font-bold lg:text-lg text-[#A25223] mb-6 ">
            Proven RO water purifiers bring together the goodness of Copper with
            Calcium, Magnesium, and Zinc. Active Copper infuses Copper ions into
            the water. The effect releases not only Copper but the right amount
            of other micronutrients like Calcium, Magnesium, and Zinc.
          </p>
        </div>
      </section>
      <section className="bg-gray-50">
        <section className="text-center px-6 py-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Ayurveda In Our Technology
          </h2>

          <p className="text-base font-bold lg:text-lg text-[#A25223] mb-8 container w-[100%] sm:w-[70%]">
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

          <p className="text-base font-bold lg:text-lg text-[#A25223] mb-8 container w-[100%] ">
            According to Ayurveda, copper has many benefits, from anti-ageing
            properties to cancer prevention. Drinking copper-infused water can
            transform your health. Based on Ayurveda, there are three basic
            energies in the human body called Doshas.
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
    </>
  );
}

export default Copper;
