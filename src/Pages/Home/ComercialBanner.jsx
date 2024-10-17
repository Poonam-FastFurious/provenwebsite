// // import { useEffect, useState } from "react";

// import { useEffect } from "react";
// import { useState } from "react";
// import { Baseurl } from "../../confige";
// import { Link } from "react-router-dom";
// function ComercialBanner() {
//   const [banner, setBanner] = useState(null); // Initialize as null to handle loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           Baseurl + "/api/v1/Banner/allabnner?type=1"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         // Set the first item of the data array
//         setBanner(data.data[0] || null); // Default to null if no data is available
//       } catch (error) {
//         console.error("Error fetching banner:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!banner) {
//     return <div>Loading...</div>; // Display a loading message while data is being fetched
//   }

//   return (
//     <div>
//       <section
//         className="gi-banner py-[40px] max-[767px]:py-[30px] wow fadeInUp"
//         data-wow-duration="2s"
//       >
//         <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
//           <div className="w-full flex flex-wrap ">
//             <div className="w-full">
//               <div
//                 className="w-full bg-center bg-no-repeat bg-cover overflow-hidden relative rounded-[5px] h-auto py-72 "
//                 style={{ backgroundImage: `url()` }}
//               >

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ComercialBanner;

function ComercialBanner() {
  return (
    <div>
      <img
        src="https://s3-alpha-sig.figma.com/img/015a/009a/e11c9d802ce80797542a8ccdf2a2541d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LhJSvzVmdzyY7C~A-Og1~D8JBUw5Fsspbqr2fPS9ceVcEk773tY3KKHAkygeRkb0iiICkOJzcSg~HQrWuM1u3gDzzVeUVXy1GqAnbCeSLqBFkoCv3jKEhAGeUAvcDtYZsJCjB4DRfcMWxF~Ma73b4iTljjyoIu4-7iv8MG0psQ0xvBBuNKh2vCBMGAwCiWJuHJOrSq5HKBSrtX2XCeTb3nro0xa64y~96iDNjykYGD9Z3vCg2CCm1QVVyZfAyKLo3gfJe-uhxlxVEf094na9UrpFIPTMXWbD022lwX24PR16xNAci~bLhgAHxUmjhBo9-A0eN8DllyjPt-3O0bECmA__"
        alt=""
      />
    </div>
  );
}

export default ComercialBanner;
