import client1 from "../../assets/Images/clientlogo/client (1).png";
import client2 from "../../assets/Images/clientlogo/client (2).png";
import client3 from "../../assets/Images/clientlogo/client (3).png";
import client4 from "../../assets/Images/clientlogo/client (4).png";
import client5 from "../../assets/Images/clientlogo/client (5).png";
import client6 from "../../assets/Images/clientlogo/client (6).png";
import client7 from "../../assets/Images/clientlogo/client (7).png";
import client8 from "../../assets/Images/clientlogo/client (8).png";
import client9 from "../../assets/Images/clientlogo/client (9).png";
import client10 from "../../assets/Images/clientlogo/client (10).png";
import client11 from "../../assets/Images/clientlogo/client (11).png";
import client12 from "../../assets/Images/clientlogo/client (12).png";
import client13 from "../../assets/Images/clientlogo/client (13).png";
import client14 from "../../assets/Images/clientlogo/client (14).png";
import client15 from "../../assets/Images/clientlogo/client (15).png";
import client16 from "../../assets/Images/clientlogo/client (16).png";
import client17 from "../../assets/Images/clientlogo/client (17).png";
import client18 from "../../assets/Images/clientlogo/client (18).png";
import client19 from "../../assets/Images/clientlogo/client (19).png";
import client20 from "../../assets/Images/clientlogo/client (20).png";
import client21 from "../../assets/Images/clientlogo/client (21).png";
import client22 from "../../assets/Images/clientlogo/client (22).png";
import client23 from "../../assets/Images/clientlogo/client (23).png";
import client24 from "../../assets/Images/clientlogo/client (24).png";
import client25 from "../../assets/Images/clientlogo/client (25).png";
import client26 from "../../assets/Images/clientlogo/client (26).png";
import client27 from "../../assets/Images/clientlogo/client (27).png";
import client28 from "../../assets/Images/clientlogo/client (28).png";
import client29 from "../../assets/Images/clientlogo/client (29).png";
import client30 from "../../assets/Images/clientlogo/client (30).png";
import client31 from "../../assets/Images/clientlogo/client (31).png";
import client32 from "../../assets/Images/clientlogo/client (32).png";
import client33 from "../../assets/Images/clientlogo/client (33).png";
import client34 from "../../assets/Images/clientlogo/client (34).png";
import client35 from "../../assets/Images/clientlogo/client (35).png";
import client36 from "../../assets/Images/clientlogo/client (36).png";
import client37 from "../../assets/Images/clientlogo/client (37).png";
import client38 from "../../assets/Images/clientlogo/client (38).png";
import client39 from "../../assets/Images/clientlogo/client (39).png";
import client40 from "../../assets/Images/clientlogo/client (40).png";
import client41 from "../../assets/Images/clientlogo/client (41).png";
import client42 from "../../assets/Images/clientlogo/client (42).png";
import client43 from "../../assets/Images/clientlogo/client (43).png";
import client44 from "../../assets/Images/clientlogo/client (44).png";
import { Link } from "react-router-dom";

// Store all imported images in an array
const images = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
  client24,
  client25,
  client26,
  client27,
  client28,
  client29,
  client30,
  client31,
  client32,
  client33,
  client34,
  client35,
  client36,
  client37,
  client38,
  client39,
  client40,
  client41,
  client42,
  client43,
  client44,
];
function Client() {
  return (
    <>
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
            {images.map((image, index) => (
              <Link
                to="#"
                key={index}
                className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
              >
                <img
                  src={image}
                  alt={`client-${index + 1}`}
                  className="h-full w-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Client;
