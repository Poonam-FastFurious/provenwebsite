import { Link } from "react-router-dom";
// import images from "../../assets/Images/hydrogen.png";
import images1 from "../../assets/Images/modelhydrogen (1).png";
import images2 from "../../assets/Images/modelhydrogen (2).png";
import images3 from "../../assets/Images/modelhydrogen (3).png";

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
      title: "Abstract",
      sections: [
        {
          heading:
            "Recent Advances In Hydrogen Research As A Therapeutic Medical Gas",
          description:
            "Recent basic and clinical research has revealed that hydrogen is an important physiological regulatory factor with antioxidant, anti-inflammatory and anti-apoptotic protective effects on cells and organs. Therapeutic hydrogen has been applied by different delivery methods including straightforward inhalation, drinking hydrogen dissolved in water and injection with hydrogen-saturated saline. This review summarizes currently available data regarding the protective role of hydrogen, provides an outline of recent advances in research on the use of hydrogen as a therapeutic medical gas in diverse models of disease and discusses the feasibility of hydrogen as a therapeutic strategy. It is not an overstatement to say that hydrogen’s impact on therapeutic and preventive medicine could be enormous in the future.",
        },
        {
          heading:
            "Hydrogen-Rich Water Affected Blood Alkalinity In Physically Active Men",
          description:
            "Possible appliance of effective and safe alkalizing agent in the treatment of metabolic acidosis could be of particular interest to humans experiencing an increase in plasma acidity, such as exercise-induced acidosis. In the present study we tested the hypothesis that the daily oral intake of 2L of hydrogen-rich water (HRW) for 14 days would increase arterial blood alkalinity at baseline and post-exercise as compared with the placebo. This study was a randomized, double blind, placebo-controlled trial involving 52 presumably healthy physically active male volunteers. Twenty-six participants received HRW and 26 a placebo (tap water) for 14 days. Arterial blood pH, partial pressure for carbon dioxide (pCO2), and bicarbonates were measured at baseline and post exercise at the start (day 0) and at the end of the intervention period (day 14). Intake of HRW significantly increased fasting arterial blood pH by 0.04 (95% confidence interval; 0.01 – 0.08; p< 0.001), and post exercise pH by 0.07 (95% confidence interval; 0.01 – 0.10; p = 0.03) after 14 days of intervention. Fasting bicarbonates were significantly higher in the HRW trial after the administration regimen as compared with the preadministration (30.5 ± 1.9 mEq/L vs. 28.3 ± 2.3 mEq/L; p < 0.0001). No volunteers withdrew before the end of the study, and no participant reported any vexatious side effects of supplementation. These results support the hypothesis that HRW administration is safe and may have an alkalizing effect in young physically active men.",
        },
        {
          heading: "Molecular Hydrogen And Radiation Protection",
          description:
            "Molecular hydrogen (hydrogen, H2) acts as a therapeutic antioxidant by selectively reducing hydroxyl radicals (•OH) and peroxynitrite (ONOO–). It has been well-known that ionizing radiation (IR) causes oxidative damage and consequent apoptosis mainly due to the production of •OH that follows radiolysis of H2O. Our department reported the protective effect of H2 in irradiated cells and mice for the first time, and this effect is well repeated by us and another laboratory in different experimental animal models. A randomized, placebo-controlled investigation also showed consumption of H2 can improve the quality of life of patients treated with radiotherapy for liver tumors. These encouraging results suggested that H2 has a potential as a radio protective agent with efficacy and non-toxicity.",
        },
        {
          heading: "Hydrogen-Rich Saline Protects Against Intestinal Ischemia/Reperfusion Injury In Rats",
          description:
            "Hydrogen gas was reported to reduce reactive oxygen species and alleviate cerebral, myocardial and hepatic ischemia/reperfusion (I/R) injuries. This paper studied the effect of hydrogen-rich saline, which was easier for clinical application, on the intestinal I/R injury. Model of intestinal I/R injury was induced in male Sprague-Dawley rats. Physiological saline, hydrogen-rich saline or nitrogen-rich saline (5 ml/kg) was administered via intravenous infusion at 10 min before reperfusion, respectively. The intestine damage was detected microscopically and was assessed by Chiu score system after I/R injury. In addition, serum DAO activity, TNF-α, IL-1β and IL-6 levels, tissue MDA, protein carbonyl and MPO activity were all increased significantly by I/R injury. Hydrogen-rich saline reduced these markers and relieved morphological intestinal injury, while no significant reduction was observed in the nitrogen-rich saline-treated animals. In conclusion, hydrogen-rich saline protected the small intestine against I/R injury, possibly by reduction of inflammation and oxidative stress.",
        },
        {
          heading: "Radio Protective Effect Of Hydrogen In Cultured Cells And Mice",
          description:
            "It has been demonstrated that hydrogen can selectively reduce hydroxyl and peroxynitrite in vitro. Since most of the ionizing radiation-induced cellular damage is caused by hydroxyl radicals, this study was designed to test the hypothesis that hydrogen may be an effective radio protective agent. This paper demonstrates that treating cells with hydrogen before irradiation could significantly inhibit ionizing irradiation (IR)-induced Human Lymphocyte AHH-1 cells apoptosis and increase cells viability in vitro. This paper also shows that hydrogen can protect gastrointestinal endothelia from radiation-induced injury, decrease plasma malondialdehyde (MDA) intestinal 8-hydroxydeoxyguanosine (8-OHDG) levels and increase plasma endogenous antioxidants in vivo. It is suggested that hydrogen has a potential as an effective and safe radio protective agent. <br/> Hydrogen protects rats from dermatitis caused by local radiation <br/> Background: Radiation therapy produced unwanted side effect on normal tissues, such as radio dermatitis. Hydrogen was previously shown capable of radiation protective in both animals and cell cultures. The effect of hydrogen was now to be investigated on radiation-induced cutaneous. Objective: Development of dermatitis is a frequent side effect of radiotherapy of patients with head-and-neck cancer. Here we analyzed the radio protective efficacy of hydrogen under conditions of local, single-dose or fractionated radiation treatment, and its possible molecular mechanisms. Methods: Rats received either single-dose or fractioned irradiation of the head-and-neck area with or without subcutaneous injection of hydrogen solution before irradiation. In vitro, the effect of hydrogen medium on radiation-induced cell viability, apoptosis, and biochemical assays was measured. Result: Hydrogen significantly reduced the severity of dermatitis, accelerated tissue recovery, and reduced the extent of radiation-induced weight loss in rats after a single dose of 15 or 20 Gy but not 25 Gy of radiation. Hydrogen was also protective from cumulative doses of 30 Gy delivered in three fractions, respectively. Hydrogen also protect HaCaT cells from radiation-induced injury, it could significantly inhibit ionizing injury. Conclusion: These results suggest that hydrogen has a positive effect on acute radio dermatitis",
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
    {
      title: "Healing Waters Contain Molecular Hydrogen",
      sections: [
        {
          description:
            "It has also been discovered that the documented “healing” or “curative” waters of Nordau, Germany; Tlacote, Mexico; and Hita Tenryosui, Japan waters contain dissolved hydrogen gas. The existence of molecular hydrogen in these springs could be a result of water reacting with alkali-earth metals, or from molecular hydrogen gas-producing bacteria and algae..",
        },
        {
          heading: "Healing Waters Contain Molecular Hydrogen",
          description:
            "Some of the bacteria in our intestinal tract produce hydrogen gas from non-digestible fibers, which is perhaps another reason why a diet rich in fiber reduces inflammation and has cardiovascular and other health benefits.",
        },
        {
          heading: "Hydrogen: From The Beginning",
          description:
            "Hydrogen has an intriguing history. It is the father of all elements of the universe, and along with oxygen, it has been intrinsically involved with evolution of life in both prokaryotes and eukaryotes (e.g. hydrogenates, hydrosomes, mitochondria, etc.). It is the extremes of oxygen and hydrogen that provide balance between oxidation and reduction, which is vital to life. Not surprisingly, this intimate relationship of oxygen and hydrogen has remained with higher organisms including plants, animals, and humans. However, until recently, research has only focused on the importance and toxicity of oxygen dismissing the role of hydrogen altogether, which negates the toxicity of oxygen—focusing only on one side of this Yin and Yang type relationship.We are actively working on discovering the actual molecular mechanisms and primary targets of hydrogen gas. More in vitro data is what is needed to fully demonstrate and understand the therapeutic potential of molecular hydrogen.",
        },
      ],
    },
    {
      title: "Hydrogen Gas",
      sections: [
        {
          description:
            "Hydrogen gas has been shown to have a therapeutic effect on over 150 human diseases,but what is Hydrogen? Hydrogen is the lightest and simplest element with the symbol H. It consists of only one electron and one proton and, under normal conditions, it exists primarily in its diatomic form as molecular hydrogen (H2 gas). It is what powers the sun by fusion to produce helium. Hydrogen is the center of the prevailing cosmological model that describes the early development of the Universe as well as the origin of life itself.",
        },
      ],
    },
    {
      title: "Hydrogen Kit Module",
      sections: [
        {
          heading: "FEATURES OF Hydrogen Kit",
          description: [
            "Some bacteria in our intestinal tract produce hydrogen gas from non-digestible fibers.",
            "With system control from automatic control program, hydrogen water with more than a certain concentration is always provided by controlling generation of hydrogen, dissolution timing, concentration control of hydrogen water etc. (At present, regular concentration of hydrogen (DH) based on sample device: more than 900 ppb) (Unit to product Hydrogen-reduced water with the function of controlling concentration of dissolved hydrogen: Invention patent)",
            "Reduction potential of Hydrogen with strong antioxidant power Antioxidant power of hydrogen is about 150 times of Vitamin C, and 800 times of Coenzyme Q10. The reduction potential of hydrogen water provided in the module of this system is about -450 ~ -580mv with strong reducing power.",
            "Provision of neutral (pH) Hydrogen Water Provision of hydrogen water in neutral PH7.2~7.8 with the nature of original water which can wipe out the controversy on pros and cons with strong alkaline in alkaline water.",
            "Adoption of Hydrogen Generator in PEM Type PEM type electrolysis cell adopted Proton Exchange Membrane between platinum electrodes generates and provides the hydrogen with 99.9% of purity in rapid response and high efficiency.",
            "Installation of high-efficiency Hydrogen Dissolving Unit Hydrogen Dissolving Unit with patent technology is a unique structure applying with an algorism of gaseous/liquid mixture, and ensures high-efficiency safe operation and long life.",
            "Installation of ultra-pure reverse osmosis filters for electrolytic Ultra-mini reverse osmosis filter system is equipped for providing ultra-pure water to the hydrogen generating device. Minimum brain filter technology doubles the durability and efficiency of Platinum electrode and Proton exchange membrane.",
            "7Compact Module and Removable Structure Compact Module (Size:(W)93 * (L)76 * (H)134) designed in 3 Part Units can be installed in small products, and easily separated and fixed. 8. Minimization of Maintenance Cost Hydrogen Water Creation",
          ],
        },
        {
          heading: "Piping In Installing Hydrogen Water Creation Module",
          description: [
            "To control the operation of the switch by installing Solenoid Valve at the bottom of the filter.",
            "If the functional filter is equipped in filter system, it is possible to extract by select functional water, hydrogen water etc. through selection of flow path.",
            "The oxygen generated with hydrogen to be released outside or extracted with hydrogen water through the gaseous/liquid separator.",
            "The power supply to HYDROGEN GENERATOR to be constructed with SMPS.",
          ],
        },
        {
          heading:
            "Specifications Of Hydrogen Water Creation Module And Guide For Order",
          description:
            "Currently underway and optimization work was written based on the results of the prototype test",
        },
      ],
    },
    {
      title: "Hydrogen Short Introduction",
      sections: [
        {
          description:
            "The world-famous miraculous water, including Lourdes (France), Tlacote (Mexico) and Nordenauer (Germany), has one thing in common. The secret is not minerals, but hydrogen!Water comprises 30% of human body, 94.5% of blood, and 74% of brain. It plays a key role of helping the functions of digestion, absorption, circulation and excretion, facilitating metabolism, and discharging toxic waste from the body. So drinking good water is one of the most vital factors to help you stay healthy.The recent standard of excellent water is, besides water quality and taste, the elimination of active oxygen, the main cause of aging and ailments.Doing the very best in R&D of quality water, FINE ALL CROP. Promises to grow with you as a sound company to create a healthy world through healthy lives.We can’t thank you enough.",
        },
      ],
    },
    {
      title: "Hydrogen's Therapeutic History",
      sections: [
        {
          description:
            "The medicinal properties of molecular hydrogen appear to be promoted as early as 1798.3 Many years later in 1975, the departments of Biology and Chemistry from the prestigious Baylor University and Texas A&M published a great article on the potential use of molecular hydrogen in medicine in the premier peer-reviewed journal of science. However, it wasn’t until 2007, when an article was published in Nature Medicine, which showed the selective antioxidant properties and ant apoptotic (anti-cell death) activity of molecular hydrogen, that the biomedical field took strong interest in hydrogen’s therapeutic potential. Prior to 2007, only 50 articles were published regarding hydrogen as a medical gas, compared to over 500 articles within the past seven years. Perhaps the main reason why it is only recently that molecular hydrogen is being recognized as a therapeutic molecule is because of scientific skepticism. It is difficult to believe diatomic molecular hydrogen could have any therapeutic effects because it is generally considered to be an inert gas.",
        },
        {
          heading: "How Ii Works",
          description:
            "Molecular hydrogen is the smallest element and lightest molecule. There are three main properties that explain hydrogen’s therapeutic effects. 1. Molecular hydrogen can easily diffuse into the subcellular compartments, reducing the levels of cytotoxic oxygen radicals and protecting the DNA, RNA and proteins from oxidative stress. 2. Molecular hydrogen also triggers the activation or up regulation of additional antioxidant enzymes (e.g. glutathione, superoxide dismutase, catalase, etc.) and/or cytoprotective proteins of the body. 3. Molecular hydrogen may be a novel-signaling molecule that can alter cell signaling, cell metabolism and gene expression, and explain the anti-inflammatory, anti-allergic, and anti-apoptotic (or anti-cell death) effects.",
        },
      ],
    },
    {
      title: "Hydroxide and Free Radical",
      sections: [
        {
          heading: "Hydroxide (Oh–) Confusion",
          description:
            "There appears to be a lot of confusion about the hydroxide ion, i.e. OH–, (also incorrectly called just “hydroxyl”, which ironically is a free radical or even “hydroxyl water”) within the “ionized water community”. This is because numerous websites, marketers, sales pitches, explanations, etc. claim that hydroxides are antioxidants. Recently, however, there are other voices purporting that this hydroxide is not an antioxidant, but the polar opposite: a free radical. The reality of all this confusion is that it is neither.",
        },
        {
          heading: "Notion As An Antioxidant",
          description: [
            "The wide held belief in the fallacy that antioxidants are negative whereas free radicals are positive coupled with the fact that hydroxide (OH–) has a negative charge.",
            "Alkaline ionized water has a high pH and thus contains more hydroxides (OH–) ions, which are negatively charged",
            "Alkaline ionized water does exhibit a negative oxidation-reduction potential (ORP) and has antioxidant activity.",
            "The fact that molecular hydrogen (H2) was not recognized as the reason for the –ORP, the antioxidant activity and the therapeutic effects until about 2007, which means ionized water was marketed decades before the proof of H2 was established.",
          ],
        },
        {
          heading: "Notion As A Free Radical",
          description:
            "It has also been taught that hydroxide (OH–) is a free radical. I am not sure how this came to be, but perhaps it was because of the similarity between the terms hydroxide (OH–) and hydroxyl OH. ). The latter is actually one of the the most reactive oxygen radicals there are. Notice the black dot on the upper right side of the H in the symbol (OH.); this is indicative of an unpaired electron, which means it is a free radical.Those who are not familiar with chemistry often use hydroxyl and hydroxide interchangeably—even though they are entirely different species. The hydroxide ion (far left) is not radically reactive at all, as it contains stable paired electrons.",
        },
        {
          heading: "Hydroxide Is A Base",
          description:
            "Hydroxide (OH–) or the hydroxyl ion is a component of water.  Water dissociates to form OH– ions and H3O+ ions. That is: 2H2O => OH– and H3O+Notice that this reaction is reversible, which means that the hydroxide ion can react with the hydronium ion (H3O+) to form two water molecules. So yes, hydroxides are reactive when discussing Acid/Base chemistry, but not as a biological antioxidant.",
        },
        {
          heading: "Antioxidant In Ionized Water Is Molecular Hydrogen",
          description:
            "Another thing to consider is what would happen if hydroxide (OH–) acted as an antioxidant and donated an electron? It would turn into the most cytotoxic oxygen radical: the hydroxyl radical (OH.). Thus the reaction produced a radical more reactive than the first one, which isn’t going to happen. Because it is clear that hydroxide is not an antioxidant, much less a free radical, touting it as either one is another reason why many ridicule the concept of ionized water.The take-home message is that hydroxide (OH–) is higher in alkaline water according to the definition of pH, but it is not a biological antioxidant. The therapeutic agent in ionized water is clearly dissolved molecular hydrogen gas (H2).",
        },
      ],
    },
    {
      title: "Industrial Hydrogen Water",
      sections: [
        {
          heading: "Mechanism On Fast Removal Of Dirt And Oil",
          description: [
            "Small water molecule clusters of SAW can dissolve the dirt particles",
            "Can penetrate into the space between the dirt particles and the object surface resulting in separation of dirt from the object surface",
            "Two dirt particles with surfaces being covered by negative OH ions of SAW, causing separation from each other",
            "High alkalinity causing emulsification of the oil and fat of the dirt.",
          ],
        },
        {
          heading: "Mechanism On Effectiveness In Disinfecting And Sanitising",
          description: [
            "High alkalinity and negative ORP (Oxygen Reduction Potential) tend to weaken and kill the germs and bacteria by breaking up the cell membrane.",
          ],
        },
        {
          heading: "Major Applications",
          description: [
            "Food Industry: — Washing of fruits and vegetables to wash away pesticides and fertilisers — Washing of meat and seafood to clean and take off the bad smell, killing germs and bacteria to preserve the freshness of food. — Cleaning of food processing machines, equipment and utensils in restaurants and kitchens",
            "Commercial Buildings, Public Facilities and Home — In Japan, there are hundreds commercial buildings being installed with an SAW machine for use in most types of cleaning with the objective to do away with detergents and chemicals for cleaning of floor, carpets, windows, furniture and toilets etc. Water charge and waste water treatment charges are greatly reduced with less sick leave for cleaning staffs. — For Home use, SAW is very effective and convenient in cleaning air-conditioner, refrigerator, micro-wave oven, barbecue stove etc with simply spray and wipe without rinsing. — In USA and Europe, more and more large commercial end-users, using cleaning chemicals and detergents in the past, are installing SAW making machines for cleaning in hotels, shopping malls, universities and schools, restaurants and food chains",
            "Industrial — In Japan, the car industry is the largest end-user of SAW for cleaning spare parts and new cars with great saving in reducing waste water treatment facilities. — SAW is being used in metal cutting to increase efficiency and reduce cost and in cleaning in the electronic industry. Environmental Control, farming, aquaculture, dairy and poultry — For neutralising the acidity of soil and water due to acid rain. — For cleaning, deodourising and sanitising in farms, aquaculture and dairy industries. — Drinking diluted weak SAW may help to improve the effectiveness of animal food additives to increase productivity of animals in farms with improved health and growth of animals and poultry.",
          ],
        },
      ],
    },
    {
      title: "Molecular Hydrogen",
      sections: [
        {
          heading: "What Is Molecular Hydrogen?",
          description:
            "Although the research is early, the 1000+ scientific articles suggest that H2 has therapeutic potential in over 170 different human and animal disease models, and essentially every organ of the human body. <br/>Molecular Hydrogen (i.e. H2 gas) is gaining significant attention from academic researchers, medical doctors, and physicians around the world for its recently reported therapeutic potential. One of the earliest publications on hydrogen as a medical gas was in 1975, by Dole and colleagues from Baylor University and Texas A&M. They reported in the journal Science that hyperbaric (8 atm) hydrogen therapy was effective at reducing melanoma tumors in mice. However, the interest in hydrogen therapy only recently began after 2007, when it was demonstrated that administration of hydrogen gas via inhalation (at levels below the flammability limit of 4.6%) or ingestion of an aqueous-solution containing dissolved hydrogen, could also exert therapeutic biological effects. These findings suggest hydrogen has immediate medical and clinical applications.  <br/> In 2007, Dr. Ohta’s team reported in Nature Medicine [3] that inhalation of 2-4% hydrogen gas significantly reduced the cerebral infarct volumes in a rat model of ischemia-reperfusion injury induced by middle cerebral artery occlusion. Hydrogen was more effective than edaravone, an approved clinical drug for cerebral infarction, but with no toxic effects (See figure on left). The authors further demonstrated that dissolved hydrogen in the media of cultured cells, at biologically relevant concentrations, reduces the level of toxic hydroxyl radicals (*OH), but does not react with other physiologically important reactive oxygen species (e.g. superoxide, nitric oxide, hydrogen peroxide). <br/>This biomedical research on hydrogen is still in its infancy with only around 500 articles and 1,600 researchers, but these publications and researchers suggest that hydrogen has therapeutic potential in over 170 different human and animal disease models, and in essentially every organ of the human body. Hydrogen appears to provide these benefits via modulating signal transduction, protein phosphorylation, and gene expressions (See section Pharmacodynamics) <br/>The idea of therapeutic gaseous molecules is not a new concept. For example, carbon monoxide (CO), hydrogen sulfide (H2S), and of course nitric oxide (NO*), which was initially ridiculed by skeptics, but later was subject to a Nobel Prize, are all biologically active gases. However, it may still be difficult to believe that H2 can exert any biological effect, because in contrast to these other gases, hydrogen is a non-radical, non-reactive, non-polar, highly diffusible neutral gas, thus it is unlikely to have specific binding sites, or interact with specificity on a specific receptor. <br/>From an evolutionary perspective it may not be strange that hydrogen exerts a biological effect. In addition to its role in the origins of the universe, hydrogen was also involved in the genesis of life and played an active role in the evolution of eukaryotes. Over the millions of years of evolution, plants and animals have developed a mutualistic relationship with hydrogen-producing bacteria resulting in basal levels of molecular hydrogen in eukaryotic systems. This constant exposure to molecular hydrogen may have conserved the original targets of hydrogen, as can be extrapolated by genetic remnants of hydrogenase enzymes in higher eukaryotes. Alternatively, but not exclusively, eukaryotes may have developed sensitivity to molecular hydrogen over the millions of years of evolution.",
        },
        {
          heading: "METHODS OF ADMINISTRATION",
          description:
            "Molecular hydrogen can be administered via inhalation, ingestion of solubilized (dissolved) hydrogen-rich solutions (e.g. water, flavored beverages, etc.), hydrogen-rich hemodialysis solution, intravenous injection of hydrogen-rich saline, topical administration of hydrogen-rich media (e.g. bath, shower, and creams), hyperbaric treatment, ingestion of hydrogen-producing material upon reaction with gastric acid, ingestion of non-digestible carbohydrates as prebiotic to hydrogen-producing intestinal bacteria, rectal insufflation, and other methods.",
        },
        {
          heading: "PHARMACOKINETICS",
          description:
            "Hydrogen’s unique physicochemical properties of hydrophobicity, neutrality, size, mass, etc. afford it with superior distribution properties allowing it to rapidly penetrate bio membranes (e.g. cell membranes, blood-brain, placental, and testis barrier) and reach subcellular compartments (e.g. mitochondria, nucleus, etc.) where it can exert its therapeutic effects. Although various medical clinics in Japan use intravenous injection of hydrogen-rich saline, the most common methods are inhalation and drinking hydrogen-rich water. The pharmacokinetics of each method are still under investigation, but are dependent on dosage, route, and timing. An article published in Nature’s Scientific Reports compared inhalation, injection and drinking with different hydrogen concentrations and found helpful insights for clinical use. Based on this and various studies, we briefly summarize the pharmacokinetics of inhalation and drinking.",
        },
        {
          heading: "INHALATION OF HYDROGEN",
          description:
            "For inhalation, a 2-4% hydrogen gas mixture is common because it is below the flammability level; however, some studies use 66.7% H2 and 33.3% O2, which is nontoxic and effective, but flammable. Inhalation of hydrogen reaches a peak plasma level (i.e. equilibrium based on Henry’s Law) in about 30 min, and upon cessation of inhalation the return to baseline occurs in about 60 min.",
        },
        {
          heading: "DRINKING DISSOLVED HYDROGEN",
          description:
            "The concentration/solubility of hydrogen in water at standard ambient temperature and pressure (SATP) is 0.8 mM or 1.6 ppm (1.6 mg/L). For reference, conventional water (e.g. tap, filtered, bottled, etc.) contains less than 0.0000002 ppm of H2, which is well below the therapeutic level. The concentration of 1.6 ppm is easily achieved by many methods, such as simply bubbling hydrogen gas into water. Because of molecular hydrogen’s low molar mass (i.e. 2.02 g/mol H2 vs. 176.12 g/mol vitamin C), there are more hydrogen molecules in a 1.6-mg dose of H2 than there are vitamin C molecules in a 100-mg dose of pure vitamin C (i.e. 1.6 mg H2 has 0.8 mill moles of H2 vs. 100 mg vitamin C has 0.57 mill moles of vitamin C). The half-life of hydrogen-rich water is shorter than other gaseous drinks (e.g. carbonated or oxygenated water), but therapeutic levels can remain for a sufficiently long enough time for easy consumption. Ingestion of hydrogen-rich water results in a peak rise in plasma and breath concentration in 5-15 min in a dose-dependent manner (see figure). The rise in breath hydrogen is an indication that hydrogen diffuses through the sub mucosa and enters systemic circulation where it is expelled out the lungs. This increase in blood and breath concentration returns to baseline in 45-90 min depending on the ingested dosage.",
        },
        {
          heading: "PHARMACODYNAMICS",
          description:
            "Although a significant amount of research in cells, tissues, animals, humans and even plants have confirmed hydrogen’s effect in biological systems, the exact underlying molecular mechanisms and primary targets remain elusive.",
        },
        {
          heading: "ANTIOXIDANT-LIKE EFFECT",
          description:
            "It was initially suggested that the beneficial effect of hydrogen was due to an antioxidant as hydrogen selectively neutralized cytotoxic hydroxyl radicals in vitro. However, although H2 reduces *OH radicals, as has been shown in various systems, it may not occur via direct scavenging, and it also cannot fully explain all the benefits of hydrogen. For example, in a double-blinded placebo controlled trial in rheumatoid arthritis, hydrogen had a residual effect that continued improving the disease symptoms for four weeks after hydrogen administration was terminated. Many cell studies also show that pre-treatment with hydrogen has marked beneficial effects even when the assault (e.g. toxin, radiation, injury, etc.) is administered long after all the hydrogen has dissipated out of the system. Additionally, the rate constants of hydrogen against the hydroxyl radical are relatively slow (4.2 x 107 M-1 sec-1), and the concentration of hydrogen at the cellular level is also quite low (micro molar levels), thus making it unlikely that H2 could effectively compete with the numerous other nucleophile targets of the cell. Lastly, if the mechanism were primarily associated with scavenging of hydroxyl radicals, then we should see a greater effect from inhalation compared to drinking, but this is not always the case. In short, we consider it inaccurate or at least incomplete to claim that the benefits of hydrogen are due to its acting directly as a powerful antioxidant. Indeed, hydrogen is selective because it is a very weak antioxidant and thus does not neutralize important ROSor disturb important biological signaling molecules. Nevertheless, a metabolic tracer study using deuterium gas demonstrated that, under physiological conditions, deuterium gas is oxidized, and the oxidation rate of hydrogen increases with an increasing amount of oxidative stress , but the physicochemical mechanism for this may still not be direct radical scavenging. However, not all studies show that hydrogen is oxidized via mammalian tissues and it has also been reported that deuterium gas did not exert a therapeutic effect in the model studied whereas 1H did (unpublished data). <br/>NRF2 PATHWAY Unlike conventional antioxidants hydrogen does have the ability to reduce excessive oxidative stress but only under conditions where the cell is experiencing abnormally high levels of oxidative stress that would be harmful and not hermetic. One mechanism that hydrogen uses to protect against oxidative damage is by the activation of the Nrf2-Keap1 system and subsequent induction of the antioxidant response element (ARE) pathway, which leads to the production of various cytoprotective proteins like glutathione, catalase, superoxide dismutase, glutathione peroxidase, heme-1 oxygenate, etc. In some disease models, the benefits of hydrogen are negated by using Nrf2 gene knockouts Nrf2 genetic silencing using iRNA or pharmacologically blocking the Nrf2 pathway Importantly, hydrogen only activates the Nrf2 pathway when there is an assault (e.g. toxin, injury, etc.) as opposed to constituently acting as a promoter, which could be harmful The method that hydrogen activates the Nrf2 pathway remains unclear.",
        },
        {
          heading: "CELL MODULATION",
          description:
            "Besides the potential scavenging of hydroxyl radicals and/or activation of the Nrf2 pathway, hydrogen may ameliorate oxidative stress via a cell modulating effect and reduce the formation of free radicals, such as down regulating the NADPH oxidase system. The various cell modulating effects of hydrogen are responsible for mediating the anti-inflammatory, anti-allergy, and anti-obesity effects of hydrogen. Hydrogen has been shown to down regulate pro-inflammatory cytokines (e.g. IL-1, IL-6, IL-8, etc.), attenuate the activation of TNF-a NF-?B, NFAT, NLRP3, HMGB and other inflammatory mediators. Additionally, hydrogen has beneficial effects on obesity and metabolism by increasing the expression of FGF2, PGC-1a, PPARa, and more. Additional 2nd messenger molecules or transcription factors affected by hydrogen include ghrelin, JNK-1, ERK1/2, PKC, GSK, TXNIP, STAT3, ASK1, MEK, SIRT1, and many more. Over 200 biomolecules are altered by hydrogen administration including over 1000 gene expressions. However, the primary targets and master regulators <br/> responsible for these changes are still elusive. There are many feedback systems and loops to consider, which makes it difficult to determine if we are detecting the cause or the effect of hydrogen administration. <br/>The exact mechanism of how hydrogen modulates signal transduction, gene expression, and protein phosphorylation is still being investigated. A recent publication in Scientific Reports provides good evidence to suggest that one of the mechanisms through which hydrogen accomplishes the various cell-modulating effects is by modifying lipid peroxidation in the cell membrane. In cultured cells, at biologically relevant concentrations, hydrogen suppressed the free radical chain reaction-dependent peroxidation and recovered Ca2+-induced gene expressions, as determined by comprehensive microarray analysis.",
        },
        {
          heading: "SCIENTIFIC RECOGNITION OF HYDROGEN",
          description:
            "Although the primary targets or exact biochemical mechanisms of hydrogen are still not fully understood, the therapeutic effect in cells, tissues, animals, humans and even plants is becoming widely accepted due to the now over 500 peer-reviewed articles and the 1,600 researchers on the medical effects of hydrogen. The quality of the publications is also improving with an average impact factor (IF) of the journals publishing hydrogen is about 3. The table below shows a few of the studies published in the higher IF journals, which range from six to 27. <br/>HYDROGEN AND IMMEDIATE MEDICAL APPLICATIONS <br/>ydrogen as a medical gas is also growing because it has immediate medical applications to help with many of the current health crises. Dixon and colleagues of Loma-Linda University reported that hydrogen has potential to help with the top 8/10 disease-causing fatalities as listed by the Centers of Disease Control. Dr. Banksfrom the VA/U of Washington, reported that ingestion of hydrogen-rich water was protective against neurodegenerative changes induced by traumatic brain injury in mice. Their results show that hydrogen administration reduced brain edema, blocked pathological tau expression, and maintained ATP levels. This and other studies have profound effects for events where brain injury (e.g. concussion, chronic traumatic encephalopathy, etc.) is a common occurrence. Although many people report dramatic effects of hydrogen therapy, from rapid pain and inflammation relief to normalization of glucose and cholesterol levels, other people may not notice any immediate or observable benefits. Hydrogen is not considered a powerful drug, and as mentioned only helps bring the cell/organ back to homeostasis without causing major perturbations. Perhaps some of the reported dramatic effects can be attributed to the placebo effect or other things, although some researchers have noted that some people are more sensitive to hydrogen and experience greater effects. More human studies are needed to answer these questions. ",
        },
        {
          heading: "HUMAN RESEARCH",
          description:
            "Although the research on hydrogen looks promising in the cell or animal models, more long-term clinical trials are required to confirm its efficacy in humans. There are only a total of 40 human studies; few are in a double-blinded placebo controlled randomized fashion with sufficient subject numbers. A few of these clinical studies suggest that ingestion of hydrogen-rich water was beneficial for metabolic syndrome, diabetes, and hyperlipidemia.Another 1-year placebo-control clinical study suggested that hydrogen-rich water is beneficial for Parkinson’s disease, while other clinical studies suggest significant benefits for rheumatoid arthritis, mitochondrial dysfunction, exercise performance, athletic recovery time, wound healing, reductions of oxidative stress from chronic hepatitis B, improvements to blood flow, and periodontitis, in dialysis, and also the quality of life in patients receiving radiotherapy for tumors and others. There have been an additional 15+ human studies completed with promising results, which are in the process of manuscript preparation and publication through the peer-reviewed process. More human studies are required to determine proper dosage, timing, method of administration, and for which diseases, and potentially genotypes, hydrogen is most effective. Hydrogen is still in its infancy, and more data is required before we can scientifically claim any real benefit, but the preliminary data is intriguing. The research on disease models, mechanisms of action, and clinical studies are particularly relevant because the high safety profile of molecular hydrogen make it a superior choice. ",
        },
        {
          heading: "SAFETY",
          description:
            "Hydrogen is naturally produced by intestinal flora upon digestion of fibers. A study from the University of Florida and the Forsythe Institute of Boston, Massachusetts confirmed that hydrogen produced from bacteria exerted therapeutic effects.They found that reconstitution of intestinal micro biota with H2-producing E. coli, but not H2-deficient mutant E. coli, was protective against Concanvalin A-induced hepatitis. Other studies also show that bacterially produced hydrogen from acarbose administration is therapeutic. Perhaps this helps explain why a large clinical trial from the Journal of American Medical Association (JAMA) found significant reductions in cardiovascular events by those taking the hydrogen-producing acarbose drug. These studies not only suggest the therapeutic action of molecular hydrogen, but also demonstrate its high safety profile. Hydrogen is very natural to our bodies, as we are exposed to it on a daily basis as a result of normal bacterial metabolism. Additionally, hydrogen gas has also been used in deep sea diving since the 1940s to prevent decompression sickness. Hundreds of human studies for deep sea diving have shown inhalation of hydrogen gas, at orders of magnitude greater than what is needed for therapeutic use, is well-tolerated by the body with no chronic toxic effects. In some people, however, it is reported that hydrogen may result in loose stools and in rare cases with diabetics, hypoglycemia, which is controlled by reducing the level of insulin administered. The hundreds of studies on hydrogen from bacterial production, deep sea diving, and recent medical applications have not revealed any direct noxious side effects of hydrogen administration at biologically therapeutic levels. Such a high safety profile may be considered paradoxical because chemotherapeutic agents that exert biological effects should have both beneficial and noxious effects depending on dosage, timing, location, duration, etc. However, such noxious effects have yet to be reported for hydrogen. However, perhaps the noxious effects are so transient and mild that they are masked by the beneficial effects, or are even what mediate the beneficial effects via hermetic pathways. ",
        },
        {
          heading: "FUTURE DIRECTIONS",
          description:
            "The goal of the Molecular Hydrogen gas is to help advance the research, education, and awareness of hydrogen as a therapeutic medical gas. It is uncommon to find a treatment that has both a high therapeutic potential and a high safety profile; hydrogen appears to fit this combination. Some researchers become interested in hydrogen simply due to its unforeseen ability to have a biological effect; with the realization that hydrogen is both safe and effective, a moral obligation develops to advance the research, education, and awareness of hydrogen as a medical gas. We welcome other biomedical researchers to join us in elucidating the in vitro molecular mechanisms of hydrogen, to perform well-controlled clinical trials on hydrogen in order to understand the best dosage, timing, genotype, and method of hydrogen administration. With only a few hundred peer-reviewed articles and a couple thousand biomedical researchers, hydrogen research is still in its infancy. However, the preliminary studies suggest that molecular hydrogen is something that should be pursued, investigated, and elucidated for the potential benefit of disease prevention and treatment.",
        },
      ],
    },
    {
      title: "PH Understanding",
      sections: [
        {
          heading: "HISTORY",
          description:
            "One of the important parameters of water quality is the pH. A pH measurement reveals whether the solution is acidic, neutral, or alkaline. The chemistry of water has been discussed previously, which will help us understand what pH really is. In the most basic sense, pH refers to the negative logarithmic (log) measurement of the H+ion concentration in solution. The more H+, the more acidic; the less H+, the more alkaline. The term pH was first used in 1920, but the concept was invented by Danish chemist, Soren Peter Sorenson, in 1909 to refer to negative log (inverse of an exponent) of the hydrogen ion concentration. The ‘p’ refers to the German word ‘potenz’ or power (power having reference to it being an exponent). The power referred to is the power of 10 used as the base of the log and not to the strength of the acid in solution.",
        },
        {
          heading: "THE H+ ION",
          description:
            "The H+ ion comes from the self-ionization or auto-proteolysis of water, wherein H2O splits to form H+ ion (proton) and OH– ion (hydroxide). That is H2O ? H+ + OH– However, the H+ ion is attracted to the negatively charged oxygen of another water molecule to form H3O+ ion (hydronium ion). Actually H+ ions don’t exist in water and the use of H+ really has reference to the hydronium ion, which is further complexed by additional water molecules.",
        },
        {
          heading: "SELF-IONIZATION OF WATER",
          description:
            "The following diagram depicts a more accurate explanation of the self-ionization of water. A water molecule can pull a hydrogen off another water molecule, which results in the two ionic species, hydroxide (OH–) and hydronium (H3O+). Notice that this reaction is reversible. The hydroxide can react with the hydronium ion to form two water molecules. Water is considered to be amphoteric because it can act as an acid (a molecule that produces H3O+) or a base (the produced OH– can neutralize the acid), which is the definition of amphoteric.",
        },
        {
          heading: "THE IONIC PRODUCT OF WATER",
          description:
            "If we measure the concentration of H3O+ and OH– in pure water, they would be the same because for every H3O+ ion created, an OH– ion is created. This is why pure water is neutral because the concentration of the two different ions is the same. In pure water (at 25° C), the concentration is 1 X 10-7 moles/liter for both the H3O+ and the OH–. Remember that pH means the –log of the H3O+ concentration, so if you take the – log of 1 X 10-7 you get pH of 7, which we know is neutral. If you multiply the concentration of the H3O+ ion and the OH– ion together (i.e. 1 X 10-7multiplied by 1 X 10-7), you get 1 X 10-14. This is called the ionic product of water; it is a constant with the symbol Kw. Notice that if you take the –log of the Kw you get 14, which as you know is important to the pH scale.",
        },
        {
          heading: "DISSOLVED HYDROGEN AND PH",
          description:
            "When talking about hydrogen, some will fail to make the important distinction as to which species of hydrogen is being discussed. The positive hydrogen ion (H+) is often referred to as “hydrogen”. But as we discussed above, this form of hydrogen is responsible for the “acid” level (pH) of water. If one assumes that the hydrogen ion is the species being discussed, they may think that adding hydrogen gas (H2) to water will change the pH of the water. But, molecular hydrogen (H2) is a neutral molecule which, when dissolved in water, has no influence on the water’s pH.Alkaline ionizers raise the pH of the water not as a direct result of adding H2 but because in order to produce H2, they must consume the H+ ions in the water, thus making the water more alkaline. Methods of producing hydrogen water such as bubbling or infusing, which simply add pure hydrogen gas to water, do so without changing the original pH of the water.",
        },
      ],
    },
    {
      title: "Molecular Hydrogen in Water is Great for Skin",
      sections: [
        {
          heading: "MOLECULAR HYDROGEN IN WATER IS GREAT FOR SKIN",
          description:
            "The desire to have healthy, elastic, wrinkle-free, and young looking skin dates back to primeval times. One of the ways (which is still used today) to try and accomplish this is the ancient practice of bathing in springs and mineral waters. However, unlike most conventional practices of lotions, creams, oils, powders and other cosmetics that may not help and/or even have negative side effects, bathing in specific waters that have reductive characteristics seems to have great therapeutic application. <br/> One study tested a mineral water with reductive characteristics (most likely due to dissolved molecular hydrogen) and a prepared water containing molecular hydrogen. The results revealed that bathing in both of these waters decreased the oxidation-reduction potential (ORP) of human skin. This is an important observation because healthy skin has reductive characteristics and the ORP of the skin increases by oxidative damage (from sun exposure) and also by aging (as measured by lipid-peroxide levels).This relationship between redox potentials of the skin and aging has been investigated in more detail and shows that reductive waters lower the oxidation of the skin. Bathing in hydrogen water not only reduced the ORP of skin, but also improved its elasticity. Moreover, treating bleached hair with this water gave an improvement in fluency and gloss.",
        },
        {
          heading: "MOLECULAR HYDROGEN & SUNBURNS",
          description:
            "One group of researchers gave hairless mice sunburns. They bathed one group in tap water and the other in hydrogen water. The skin of the mice bathed in hydrogen water showed significantly lower indices of skin injury and lower inflammatory cytokine levels. Another group of researchers performed a similar study and found that bathing mice in hydrogen water reduced the level of skin damage, increased activity of the antioxidant glutathione peroxidase, lowered inflammatory cytokines, and prevented ultrastructure changes of the skin, suggesting hydrogen water can protect against UV-induced skin cell damage. This was further validated in another article where hydrogen water was shown to be very beneficial for UV induced skin cell damage. The study showed that Type-1 collagen was synthesized about two-fold more in the cells treated with hydrogen water. It also prevented DNA damage, cell death, and decreased levels of intracellular free radicals. The study also reveals that in human subjects, bathing in hydrogen water for three months significantly improved wrinkles in the skin. The authors concluded that hydrogen water might serve as a daily skin care to repress UVA-induced skin damage by scavenging free radicals and promoting type-1 collagen synthesis. Hydrogen water was also seen to prevent arsenic-impaired calcium signaling (which is involved in skin cancer) in keratinocytes (predominate cell type in skin) through both its antioxidant and non-antioxidant cell signaling effects. In other words, hydrogen not only exerts protection and benefits on the skin because it’s an antioxidant, but also as a cell signaling molecule.",
        },
        {
          heading: "IONIZED WATER: IMPORTANT RECOMMENDATION",
          description:
            "Somewhat ironically, proponents of ionized water advocate using the oxidizing acidic water from the anode, as opposed to the reducing water with molecular hydrogen from the cathode. As discussed here, this acidic water is touted as being an astringent for the skin and often referred to as “beauty water”. The idea is that because the skin pH is slightly acidic then the logical choice would be to use slightly acidic water for the skin. There may be some valid research for this concept to some extent simply because high pH water can have negative effects on the skin. The main problem in using this acidic water from an ionizer is that it generally contains hypochlorous acid, which is a strong oxidizer. Obviously, this is not the best choice for youthful, young-looking skin. The problem with using the reducing (alkaline) water is that its high pH is not good for your skin. However, this can easily be overcome by adding a few drops of lemon juice (or other organic acids) to the alkaline water. This gives you the acidic pH and the benefits of molecular hydrogen. The lemon juice itself may also exert beneficial effects.",
        },
        {
          heading: "THE IONIC PRODUCT OF WATER",
          description:
            "If we measure the concentration of H3O+ and OH– in pure water, they would be the same because for every H3O+ ion created, an OH– ion is created. This is why pure water is neutral because the concentration of the two different ions is the same. In pure water (at 25° C), the concentration is 1 X 10-7 moles/liter for both the H3O+ and the OH–. Remember that pH means the –log of the H3O+ concentration, so if you take the – log of 1 X 10-7 you get pH of 7, which we know is neutral. If you multiply the concentration of the H3O+ ion and the OH– ion together (i.e. 1 X 10-7multiplied by 1 X 10-7), you get 1 X 10-14. This is called the ionic product of water; it is a constant with the symbol Kw. Notice that if you take the –log of the Kw you get 14, which as you know is important to the pH scale.",
        },
        {
          heading: "DISSOLVED HYDROGEN AND PH",
          description:
            "When talking about hydrogen, some will fail to make the important distinction as to which species of hydrogen is being discussed. The positive hydrogen ion (H+) is often referred to as “hydrogen”. But as we discussed above, this form of hydrogen is responsible for the “acid” level (pH) of water. If one assumes that the hydrogen ion is the species being discussed, they may think that adding hydrogen gas (H2) to water will change the pH of the water. But, molecular hydrogen (H2) is a neutral molecule which, when dissolved in water, has no influence on the water’s pH.Alkaline ionizers raise the pH of the water not as a direct result of adding H2 but because in order to produce H2, they must consume the H+ ions in the water, thus making the water more alkaline. Methods of producing hydrogen water such as bubbling or infusing, which simply add pure hydrogen gas to water, do so without changing the original pH of the water.",
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
        <section className="container mx-auto py-36 justify-center">
          <h1 className="text-4xl font-bold  text-center  text-white">
            Hydrogen Water
          </h1>
        </section>
      </div>

      <div className=" bg-[#A2B1BF]">
        <section className=" overflow-hidden  container mx-auto">
          <div className="flex flex-wrap justify-between items-center mx-auto ">
            <div className="w-full flex flex-wrap">
              <div className="w-[33.33%] max-[1199px]:w-[50%] max-[767px]:w-full   ">
                <div className="gi-ofr-banners">
                  <div className=" flex flex-row relative overflow-hidden">
                    <div className=" w-full relative">
                      <img
                        src={images3}
                        alt="banner"
                        className="w-full h-[350px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[33.33%] max-[1199px]:w-[50%] max-[767px]:w-full  ">
                <div className="gi-ofr-banners max-[767px]:mt-[30px]">
                  <div className=" flex flex-row relative overflow-hidden">
                    <div className="gi-bnr-img w-full relative">
                      <img
                        src={images1}
                        alt="banner"
                        className="w-full h-[350px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[33.33%] max-[1199px]:hidden max-[767px]:flex max-[767px]:w-full  ">
                <div className="gi-ofr-banners max-[767px]:mt-[30px]">
                  <div className=" flex flex-row relative overflow-hidden">
                    <div className="gi-bnr-img w-full relative">
                      <img
                        src={images2}
                        alt="banner"
                        className="w-full h-[350px] "
                      />
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
                        ? "bg-red-500 font-bold"
                        : "hover:bg-[#5AA1E3]"
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

                    {Array.isArray(item.description) ? (
                      <ul>
                        {item.description.map((desc, index) => (
                          <li className="list-disc" key={index}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    )}
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
