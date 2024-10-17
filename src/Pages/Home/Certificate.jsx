import { Link } from "react-router-dom";
import certificate1 from "../../assets/Images/Compliance.jpeg";
import certificate2 from "../../assets/Images/Compliance2.jpeg";
import certificate3 from "../../assets/Images/ISO1.jpeg";
import certificate4 from "../../assets/Images/ISO2.jpeg";
import certificate5 from "../../assets/Images/ISO3.jpeg";
import certificate6 from "../../assets/Images/ROC-Certificate_page-001.jpg";
import certificate7 from "../../assets/Images/Proven-Trade-marks-Registry-certificate.jpg";
import certificate8 from "../../assets/Images/PROVEN-GST-CERTIFICATE_page-0001.jpg";
import certificate9 from "../../assets/Images/PROVEN-GST-CERTIFICATE_page-0002.jpg";
import certificate10 from "../../assets/Images/Screenshot_20200118_180743.jpg";
import certificate11 from "../../assets/Images/Msme-Certificate_provenindia.jpg";
import delhigst from "../../assets/Images/gst/(01) PROVEN DELHI GST_page-0001.jpg";
import delhigstpdf from "../../assets/Images/gst/(01) PROVEN DELHI GST.pdf";
import KARNATAKA from "../../assets/Images/gst/(02) PROVEN KARNATAKA GST_page-0001.jpg";
import KARNATAKApdf from "../../assets/Images/gst/(02) PROVEN KARNATAKA GST.pdf";
import TELANGANA from "../../assets/Images/gst/(03) PROVEN TELANGANA GST_page-0001.jpg";
import TELANGANApdf from "../../assets/Images/gst/(03) PROVEN TELANGANA GST.pdf";
import MAHARESHTRA from "../../assets/Images/gst/(04) PROVEN MAHARESHTRA GST_page-0001.jpg";
import MAHARESHTRApdf from "../../assets/Images/gst/(04) PROVEN MAHARESHTRA GST.pdf";
import WESTBENGAL from "../../assets/Images/gst/(05) PROVEN WEST BENGAL GST_page-0001.jpg";
import WESTBENGALpdf from "../../assets/Images/gst/(05) PROVEN WEST BENGAL GST.pdf";
import TAMINADU from "../../assets/Images/gst/(06) PROVEN TAMIL NADU GST_page-0001.jpg";
import TAMINADUpdf from "../../assets/Images/gst/(06) PROVEN TAMIL NADU GST.pdf";
import Crausalforimage from "./Crausalforimage";
function Certificate() {
  return (
    <>
      <h2 className="mb-4  py-4 lg:py-4  text-3xl font-extrabold tracking-normal leading-tight text-center  text-AFPPrimary  md:text-4xl">
        Certification
      </h2>
      <div className="container mx-auto px-12">
        <h2 className="text-center text-2xl font-bold mb-6  bg-AFPPrimary p-4">
          MSME Certification
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate11}>
              <img
                src={certificate11}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">
                INDIA 5000 BEST MSME AWARDS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12">
        <h2 className="text-center text-2xl font-bold mb-6  bg-AFPPrimary p-4">
          ISO Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate3}>
              <img
                src={certificate3}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">ISO 14001: 2015</p>
            </div>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate4}>
              <img
                src={certificate4}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">ISO 45001: 2018</p>
            </div>
          </div>{" "}
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate5}>
              <img
                src={certificate5}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">ISO 9001: 2015</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12">
        <h2 className="text-center text-2xl font-bold mb-6 bg-AFPPrimary p-4">
          Certificate of Compliance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link to={certificate1} target="_blank">
              <img
                src={certificate1}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">UQ-202001092737</p>
            </div>
          </div>

          <div className="bg-white  rounded overflow-hidden p-12">
            <Link to={certificate2} target="_blank">
              <img
                src={certificate2}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">CE-10139</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12">
        <h2 className="text-center text-2xl font-bold mb-6  bg-AFPPrimary p-4">
          ROC & Trademark Certification
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate6}>
              <img
                src={certificate6}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">ROC Certificate</p>
            </div>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate7}>
              <img
                src={certificate7}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">Trademark Certificate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12">
        <h2 className="text-center text-2xl font-bold mb-6  bg-AFPPrimary p-4">
          GST Registration Certification
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate8}>
              <img
                src={certificate8}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate9}>
              <img
                src={certificate9}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={delhigstpdf}>
              <img
                src={delhigst}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>{" "}
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">Delhi GST</p>
            </div>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={KARNATAKApdf}>
              <img
                src={KARNATAKA}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">KARNATAKA GST</p>
            </div>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={TELANGANApdf}>
              <img
                src={TELANGANA}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">TELANGANA GST</p>
            </div>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={MAHARESHTRApdf}>
              <img
                src={MAHARESHTRA}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">Maharashtra GST</p>
            </div>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={WESTBENGALpdf}>
              <img
                src={WESTBENGAL}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">WESTBENGAL GST</p>
            </div>
          </div>
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={TAMINADUpdf}>
              <img
                src={TAMINADU}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>{" "}
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">TAMIL NADU GST</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12">
        <h2 className="text-center text-2xl font-bold mb-6  bg-AFPPrimary p-4">
          Certificate of Nomination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white  rounded overflow-hidden p-12">
            <Link target="_blank" to={certificate10}>
              <img
                src={certificate10}
                alt="ISO 9001:2015"
                className="w-full   h-84"
              />
            </Link>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold">
                INDIA 5000 BEST MSME AWARDS
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <Crausalforimage />
    </>
  );
}

export default Certificate;
