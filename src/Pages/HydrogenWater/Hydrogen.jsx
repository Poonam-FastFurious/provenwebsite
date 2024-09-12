import { Link } from "react-router-dom";
import images from "../../assets/Images/hydrogen.png";

import { useState } from "react";
function Hydrogen() {
  const content = [
    {
      title: "Alkaline Water",
      sections: [
        {
          heading: "Brief History",
          description:
            "Electrolyzed reduced water (ERW) and BIOCERAMIC (Natural) process is the most common term in the scientific literature. Both have an alkaline pH (8-10) and contain molecular hydrogen. Water ionizers were invented in the early 1900s. Research on electrolyzed water started around 1931 in Japan, where it gained popularity in the 1950s. Around this time, the water was touted as having 'healing effects' and was called 'shin nooru solution' or 'synnohl liquid.' In 1962, separate water ionizer companies brought the electrolytic apparatus to the Cabinet Welfare Bureau and applied to manufacture the apparatus as a medical device.",
        },
        {
          heading: "Medical Approval",
          description:
            "Some tap waters lacked sufficient minerals for effective electrolysis, making it hard to produce alkaline water with consistent characteristics. Adding calcium lactate to the water resolved this, allowing alkaline pH to be produced. With this addition, in 1965, approval for a 'synnohl liquid manufacturing apparatus' was granted as a 'medical substance generator.' Cathode Water (Alkaline Ionized Water) was recognized for treating indigestion and other stomach issues. The Korean FDA followed suit in 1978, approving similar devices under nearly identical criteria.",
        },
        {
          heading: "Skepticism and Marketing",
          description:
            "In 1979, a continuous-type electrolytic water generator, which could connect directly to tap water, was approved. Marketing of alkaline ionized water became widespread in the 1990s. A television program in 1992 labeled it 'Wonder Water,' portraying the water as a remedy for diseases like diabetes. However, skepticism arose since the effects could be attributed to added calcium, not the water itself. Further doubts emerged after product testing by the National Consumer Affairs Center of Japan, suggesting that drinking enough water to neutralize stomach acid was impractical.",
        },
        {
          heading: "Verification of Benefits",
          description:
            "In 1993, a double-blind clinical study conducted by Kyoto University found no significant improvement in gastrointestinal symptoms, though a slight trend was noted. In 2005, the Drugs, Cosmetics, and Medical Instruments Act of Japan re-authorized devices producing electrolyzed reduced water (ERW) as home medical devices for treating gastrointestinal issues.",
        },
        {
          heading: "Current Medical Status",
          description:
            "To manufacture or sell water ionizers in Japan, companies must receive approval from the JMHLW under the Pharmaceutical Affairs Law. Devices must meet safety and performance standards to ensure they can produce alkaline water (pH ≥ 9.5). Currently, there are over eighteen water ionizer companies certified by the JMHLW, all with similar electrolytic cell structures, although dissolved hydrogen levels and maintenance requirements vary.",
        },
        {
          heading: "Marketing Prohibitions",
          description:
            "The Pharmaceutical Affairs Law in Japan prohibits exaggerated marketing claims for water ionizers. Names like 'Wonder Water' or 'magical water' are not allowed, and advertising must not suggest unapproved benefits. While these devices are classified as medical devices, there is no evidence supporting their ability to treat or prevent diseases. Claims that hospitals in Japan widely use ionized water are false, with many doctors unaware of such devices being used in medical settings.",
        },
      ],
    },
    {
      title: "Acidic Water",
      sections: [
        {
          heading: "Acidic Water",
          description:
            "Mildly acidic water is produced from water ionizers, which use the process of electrolysis. Acidic water is produced at the positive electrode (anode). The Japanese Ministry of Health, Labor, and Welfare (JMHLW) approved this water in 1965, as an astringent for beauty purposes. The JMHLW also approved the alkaline and strongly acidic waters as medical substances.",
        },
        {
          heading: "Claimed Benefits Of Mildly Acidic Water",
          description:
            "The mildly acidic water (pH 4-6), also known as 'beauty water,' is touted to have benefits as an astringent for beauty and cosmetology. However, no specific article testing electrolyzed mildly acidic water could be found. Since skin surface pH is about 6 ± 0.6, slightly acidic water should not disturb the skin's pH balance. In contrast, alkaline water can increase the surface pH of the skin, leading to irritation by disrupting the protective 'acid mantle.' It may also alter skin bacteria, affect enzymes in the upper epidermis, and reduce skin fat, causing dryness. However, no direct studies of mildly acidic water’s effects on the skin were located, though there may be studies in Japanese. Astringents are generally tannins, organic molecules, and chemical salts that cause shrinkage of membranes, none of which are present in mildly acidic water.",
        },
        {
          heading: "Chlorine in Acidic Water",
          description:
            "Unfortunately, mildly acidic water often contains chlorine, produced during electrolysis, resulting in a dilute hypochlorous acid solution. Most commercial units filter out chlorine (Cl2) before electrolysis, but chloride electrolytes remain. These chloride ions (Cl-) are oxidized at the anode to produce chlorine (2Cl- → Cl2 +2e-). Chlorine in the acidic water can easily be detected with a simple chlorine test reagent. Some incorrectly claim that positive chlorine tests are false, but chlorine production via electrolysis is the preferred mass production method, and chlorine indicators are highly selective. Caution is advised when applying acidic water topically, as chlorinated water negatively affects skin health. Testing the water for chlorine is recommended before using it on the skin.",
        },
      ],
    },
    {
      title: "Diseases VS Hydrogen",
      sections: [
        {
          heading: "Diseases VS Hydrogen",
          description:
            "The prominent and therapeutic effects of molecular hydrogen (H2 gas) are emerging to the forefront of scientific research. Humans are continuously fighting against cardiovascular disease, Parkinson’s disease, Alzheimer’s disease, dementia, diabetes, osteoporosis, chronic inflammation, hypertension, hyperlipidemia, and many more. The search for a simple method to prevent such ailments, and in short, to halt or even reverse aging to youth, is not a new concept. This idea has been prevalent throughout history, including Herodotus' writings about the Fountain of Youth. With more research on molecular hydrogen, it seems to have properties resembling the Fountain of Youth. A 2010 quality review article on molecular hydrogen discussed its potential.",
        },
        {
          heading: "Hydrogen's Impact on Therapeutic and Preventive Medicine",
          description:
            "It is not an overstatement to say that hydrogen’s impact on therapeutic and preventive medicine could be enormous in the future. Since the 2010 review article, over 400 additional articles have been published substantiating this claim. Currently, around 150 different disease models have been studied, where molecular hydrogen appears to exert a beneficial effect, including on the diseases listed above.",
        },
      ],
    },
    {
      title: "Echo hydrogen water",
      sections: [
        {
          heading: "Echo hydrogen water",
          description: `Hydrogen is #1 on the periodic table because it is tiny. Being tiny allows Hydrogen to get into membranes, 
            joints, brain, gut, organs, lungs, eyes, ears, etc. Molecular or diatomic hydrogen is 2 atoms of hydrogen. It is
            also referred to as H2. In the Echo® Hydrogen Enriched Water System™, H2 gas is dissolved in the water. The 
            water is the delivery vehicle for the H2 gas which has been ts. Molecular hydrogen (H2) is why water 
            electrolysis was developed in 1800. H2 is a selective antioxidant only reacting with ROS (reactive oxygen 
            species). ROS damages cells. The most cytotoxic (cell damaging) ROS (free radicals) are Hydroxyl Radicals (HO*). 
            When H2 combines with 2 hydroxyl radicals, 2 water molecules are formed. H2 has therapeutic benefits for every 
            organ in the body. Our bodies were designed to create hydrogen gas in the gut through the normal fermentation 
            and digestion of food. The problem is that many people have issues that prevent their gut from working correctly. 
            60% of the immune system is based on gut health. If the gut is compromised and the diet does not have beneficial 
            fiber to be converted into hydrogen gas, issues occur.`,
        },
        {
          heading: "Some Benefits Of Molecular Hydrogen",
          description: `Reduction of oxidative stress and inflammation. Regulation of over 200 Biomolecules in the body.
            Stimulates gastric ghrelin to increase cognitive function. Stimulation of anaerobic microflora in the intestinal 
            tract. Shown to help with Rheumatoid Arthritis and joint issues. 700 studies showing therapeutic effects with 170 
            human disease models. Molecular hydrogen has benefits. Peer-reviewed articles and studies have shown molecular 
            hydrogen to reduce oxidative stress and inflammation which lead to many diseases. Studies have been conducted 
            on 170+ human diseases and conditions including Rheumatoid Arthritis, Diabetes, Colon Cancer, Autoimmune, 
            Parkinson’s, Alzheimer’s, Autism, Bipolar, Schizophrenia, & IGT. In addition to helping with existing conditions, 
            molecular hydrogen can support the body to avoid susceptibility to diseases and conditions. It is truly one of the 
            best anti-aging tools you can use.`,
        },
        {
          heading: "Water Electrolysis: A Hydrogen Generator: How It Works.",
          description: `In 1800, Anthony Carlisle, a surgeon in London, discovered water electrolysis because he wanted to make a 
            hydrogen generator. Dr. Carlisle wanted a way to produce hydrogen gas easily because he learned in 1798 that 
            hydrogen had antioxidant properties. Traditional electrolysis devices convert water (H2O) to hydrogen gas (H2) 
            and hydroxide ions (OH-) at the negative side (cathode), and oxygen gas (O2) and hydrogen ions (H+) at the 
            positive side (anode). Traditional water electrolysis machines have standard membranes that separate the alkaline 
            OH- ions from the acidic H+ ions if you are separating the water streams. A new method of electrolysis was designed 
            to only produce H2 without changing the pH of the source water. In this method, the water is not separated into 
            alkaline and acid streams. Proton Exchange Membranes (PEM) are used instead of standard membranes. The 
            advantage of the PEM is that it creates its own conductivity in water and can produce H2 gas even in pure water 
            with no minerals as in reverse osmosis or distilled water. The benefits do not come from the pH of the water. The 
            pH change comes if you separate the water streams. It is the H2 gas that can be dissolved in the water that provides 
            the therapeutic benefits. Typically, electrolysis systems that separate the water streams into alkaline and acid 
            water are not able to dissolve H2 gas in the water longer than a few weeks. This is because the positively charged 
            minerals naturally want to bond to the negatively charged cathode. If minerals build up on the cathode, H2 gas 
            will not be dissolved in the water because the hydrogen bubbles will be too large to be dissolved. The H2 gas will 
            go into the atmosphere and the benefits with it. In the Echo® 9 Ultra H2 system, the patented technology changes 
            the polarity of the electrodes every time the machine is used. This makes it impossible for minerals to build up. 
            This is the only system that guarantees H2 gas will always be dissolved in the water.`,
        },
        {
          heading: "Benefits Of Echo® Hydrogen Enriched Water",
          description: `Everyone is talking about how free radicals are damaging our cells. What most people don’t know is that 
            many free radicals are beneficial to health. It is only the cell damaging (cytotoxic) oxygen radicals that we need 
            to scavenge. H2 converts these cell damaging radicals into water molecules.`,
        },
        {
          heading: "Athletic Performance",
          description: `Echo® Hydrogen Enriched Water™ has helped many athletes increase performance. It better empowers you 
            to function at optimal efficiency by ridding the cells of Hydroxyl Radicals allowing the mitochondria to produce 
            energy more efficiently. It reduces fatigue by lessening lactate buildup in muscles. Recovery times can be cut in 
            half. When a person is properly hydrated with Echo® hydrogen-enriched water, they perform at peak levels for 
            longer periods of time.`,
        },
        {
          heading: "Detoxification And Weight Loss",
          description: `Echo® water supports healthy cleansing and weight loss. When the toxins and wastes are flushed, the burden 
            on the body is lessened. Water can also help to clean out the intestines and colon. People feel more hydrated, have 
            more success with their weight loss programs, experience more productive sleep, wake up more alert, have fewer 
            allergy symptoms, and generally feel more energy throughout the day. H2 stimulates gastric Ghrelin that increases 
            cognitive function.`,
        },
        {
          heading: "Immune Boost",
          description: `The effectiveness of the immune system and the digestive system are directly linked to the level of hydration. 
            Being properly hydrated is one of the best ways to increase your immune system and prevent sickness and disease. 
            60-75% of your body is water and it should be no surprise that the type of water you drink can directly influence 
            the way you feel. Hydrogen enriched water™ can stimulate anaerobic microflora to naturally restore gut health. 
            The health of your gut is directly related to the strength of your immune system and the susceptibility to disease 
            and sickness.`,
        },
        {
          heading: "Intrinsic Energy And Frequencies",
          description: `Many people understand that energy and frequencies are all around us. Radio frequencies, cell phone frequencies, 
            Infrared energies, EMF’s, etc. There are good and bad energies and frequencies. Some use energies to benefit 
            individuals in need. The Echo® Water System has hundreds of beneficial energies and frequencies. They can protect 
            you from harmful frequencies and energies. They can also balance chakras and help the body heal. Individuals that 
            are intuitive can feel them. Others say that the water just feels good to them. Professionals in energy medicine, 
            Cranial Sacral Therapists, Reiki Masters, etc. love and recommend Echo® water because of these beneficial energies 
            and frequencies.`,
        },
        {
          heading: "Proper Hydration",
          description: `Because Echo® Water tastes so great, you will be drinking more water. A study conducted by the University of 
            Utah, showed the more water you drink the better. In the study, subjects consumed either 4, 8 or 12 glasses of 
            water daily. On the fifth day before rising, their hydration status was monitored and a computer measured how 
            many calories they had burned in a resting state. The groups who drank 8 and 12 glasses of water daily were 
            sufficiently hydrated, whereas subjects who drank only four glasses showed definite signs of dehydration. The 
            well-hydrated subjects reported better concentration and more energy. They burned more calories at rest than 
            the group who drank only 4 glasses.`,
        },
        {
          heading:
            "Increased Cognitive Function – Ghrelin: Help With Neurological Condition",
          description: `Studies show that H2 gas stimulates Ghrelin secretions. Ghrelin is known as the hunger hormone in the body. 
            Ghrelin affects many things in the body including cognitive function, hunger, weight regulation, anti-inflammatory 
            function. This is accomplished in the hippocampus, hypothalamus and the brain stem. Specific studies have shown 
            that water with H2 gas can be helpful with neurologic issues like Parkinson’s, Alzheimer’s, Bipolar, Schizophrenia, 
            and Autism.`,
        },
        {
          heading: "Study References",
          description: `There are hundreds of studies showing molecular hydrogen to have therapeutic benefits. The studies below 
            are shared for educational purposes only. They are not shared to indicate any expected outcome for anyone with 
            a similar or same disease or pathology.`,
        },
      ],
    },
  ];
  const [selectedContent, setSelectedContent] = useState(content[0]);
  const handleMenuClick = (heading) => {
    setSelectedContent(heading);
  };

  return (
    <>
      <div
        className="bg-cover bg-center  h-[400px]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/gradient-blue-background-adorned-with-delicate-water-droplets-that-catch-light_157027-3000.jpg')",
        }}
      >
        <section className="container mx-auto py-16">
          <h1 className="text-4xl font-bold text-start">Hydrogen Water</h1>
        </section>
      </div>

      <div className=" bg-[#A2B1BF]">
        <section className=" overflow-hidden  container mx-auto">
          <div className="flex flex-wrap justify-between items-center mx-auto ">
            <div className="w-full flex flex-wrap">
              <div className="w-[33.33%] max-[1199px]:w-[50%] max-[767px]:w-full   ">
                <div className="gi-ofr-banners">
                  <div className=" flex flex-row relative overflow-hidden">
                    <div className="gi-bnr-img w-full relative">
                      <img src={images} alt="banner" className="w-full " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[33.33%] max-[1199px]:w-[50%] max-[767px]:w-full  ">
                <div className="gi-ofr-banners max-[767px]:mt-[30px]">
                  <div className=" flex flex-row relative overflow-hidden">
                    <div className="gi-bnr-img w-full relative">
                      <img src={images} alt="banner" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[33.33%] max-[1199px]:hidden max-[767px]:flex max-[767px]:w-full  ">
                <div className="gi-ofr-banners max-[767px]:mt-[30px]">
                  <div className=" flex flex-row relative overflow-hidden">
                    <div className="gi-bnr-img w-full relative">
                      <img src={images} alt="banner" className="w-full " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto flex flex-wrap  ">
          <aside className="w-full md:w-1/4 bg-gray-100 p-4">
            <ul className="space-y-2">
              {content.map((heading, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className={`block p-4 cursor-pointer ${
                      selectedContent === heading.title
                        ? "bg-gray-300 font-bold"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleMenuClick(heading)}
                  >
                    {heading.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <main className="w-full md:w-3/4">
            {selectedContent && selectedContent.sections ? (
              <div className="bg-white p-4 ">
                {selectedContent.sections.map((item, index) => (
                  <div className="bg-white p-4 " key={index}>
                    <h2 className="text-2xl font-bold mb-4">{item.heading}</h2>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-4">
                <h2 className="text-2xl font-bold mb-4">Select an item</h2>
                <p>Please select an item from the menu to see details.</p>
              </div>
            )}
          </main>
        </section>
      </div>
    </>
  );
}

export default Hydrogen;
