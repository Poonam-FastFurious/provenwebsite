/* eslint-disable react/no-unescaped-entities */
import carrerimage from "../../assets/Images/carrerimage.jfif";
import provencreeer from "../../assets/Images/provencreeer.png";
import provencreeer1 from "../../assets/Images/careersimage2.jpg";
import { toast } from "react-toastify";
function Career() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    const smtpParams = {
      host: "smtp.elasticemail.com",
      username: "creativeteam.brandbell2@gmail.com",
      password: "0F007A66BBD4FE6AEC46E7BB7A04FDC2E63F",
      fromEmail: "creativeteam.brandbell2@gmail.com",
      toEmail: "creativeteam.brandbell2@gmail.com",
      ccEmail: "rahulkumarofficial36@gmail.com",
      subject: "New Career Form Submission",
      body: `
        Name: ${e.target.name.value}
        Email: ${e.target.email.value}
        Phone Number: ${e.target.phone_number.value}
        Message: ${e.target.message.value}
        qualification: ${e.target.message.value}
        experience: ${e.target.message.value}
        gender: ${e.target.message.value}
        resume: ${e.target.message.value}
      `,
    };

    window.Email.send({
      Host: smtpParams.host,
      Username: smtpParams.username,
      Password: smtpParams.password,
      To: smtpParams.toEmail,
      From: smtpParams.fromEmail,
      Subject: smtpParams.subject,
      Body: smtpParams.body,
      Cc: smtpParams.ccEmail,
    }).then(
      (message) => {
        console.log("Email sent successfully:", message);
        toast.success("Email sent successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        e.target.reset();
      },
      (error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email");
      }
    );
  };
  return (
    <>
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
        style={{
          "background-image": `url(${carrerimage})`,
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ "background-color": "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">
                Start Your Career With us !
              </h2>
              <h4 className="mb-6 text-xl font-semibold"></h4>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#DEEDEA] w-[100%] mx-auto pt-8 container">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-8">
          {/* Text Section */}
          <div className="text-left md:w-1/2 p-4">
            <h1 className="text-2xl font-bold text-orange-600 mb-4">
              Your Role
            </h1>
            <p className="text-gray-700 mb-6">
              Your role as a sales executive is to sell a company's products and
              services to individuals, businesses, and government organisations.
              Sales may be domestic (Over India), international, or a
              combination of both.
            </p>
            <p className="text-gray-700 mb-6">
              As well as approaching potential customers with the aim of winning
              new business, you'll strive to maintain good relationships with
              existing clients, gaining repeat business wherever possible.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Build good working relationships</li>
              <li>Understand the needs of your business customers</li>
              <li>Research the market and related products</li>
              <li>
                Present the product or service favourably and in a structured
                professional way face-to-face.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center md:w-1/2 p-4">
            <img
              src={provencreeer}
              alt="Sales Executive"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className=" w-[100%] mx-auto pt-8 container">
        <img src={provencreeer1} alt="" className="p-6" />
      </section>
      <section className="bg-[#DEEDEA] w-[100%] mx-auto pt-8 container">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-8 container ">
          <div className="bg-white shadow-lg rounded-lg p-6   w-full">
            <h1 className="text-2xl font-bold  text-AFPPrimary mb-4 text-center">
              Apply For Job
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="fullName"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone_number"
                    id="phone_number"
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="qualification"
                  >
                    Higher Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="qualification"
                    name="qualification"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="experience"
                  >
                    Work Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="gender"
                  >
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full px-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="resume"
                  >
                    Upload Resume
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    className="w-full p-2 border border-gray-300"
                  />
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full px-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full p-2 border border-gray-300 rounded h-32"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className=" mt-4">
                <button
                  type="submit"
                  className="px-4 py-2  bg-AFPPrimary text-white rounded "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;
