import { useEffect, useState } from "react";
import { Baseurl } from "../../confige";

const statesWithCities = [
  {
    state: "Andhra Pradesh",
    cities: [
      "Adoni",
      "Amaravati",
      "Anantapur",
      "Chandragiri",
      "Chittoor",
      "Dowlaiswaram",
      "Eluru",
      "Guntur",
      "Kadapa",
      "Kakinada",
      "Kurnool",
      "Machilipatnam",
      "Nagarjunakoṇḍa",
      "Rajahmundry",
      "Srikakulam",
      "Tirupati",
      "Vijayawada",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
    ],
  },
  {
    state: "Arunachal Pradesh",
    cities: ["Itanagar"],
  },
  {
    state: "Assam",
    cities: [
      "Dhuburi",
      "Dibrugarh",
      "Dispur",
      "Guwahati",
      "Jorhat",
      "Nagaon",
      "Sivasagar",
      "Silchar",
      "Tezpur",
      "Tinsukia",
    ],
  },
  {
    state: "Bihar",
    cities: [
      "Ara",
      "Barauni",
      "Begusarai",
      "Bettiah",
      "Bhagalpur",
      "Bihar Sharif",
      "Bodh Gaya",
      "Buxar",
      "Chapra",
      "Darbhanga",
      "Dehri",
      "Dinapur Nizamat",
      "Gaya",
      "Hajipur",
      "Jamalpur",
      "Katihar",
      "Madhubani",
      "Motihari",
      "Munger",
      "Muzaffarpur",
      "Patna",
      "Purnia",
      "Pusa",
      "Saharsa",
      "Samastipur",
      "Sasaram",
      "Sitamarhi",
      "Siwan",
    ],
  },
  {
    state: "Chandigarh (union territory)",
    cities: ["Chandigarh"],
  },
  {
    state: "Chattisgarh",
    cities: [
      "Ambikapur",
      "Bhilai",
      "Bilaspur",
      "Dhamtari",
      "Durg",
      "Jagdalpur",
      "Raigarh",
      "Rajnandgaon",
    ],
  },
  {
    state: "Dadra and Nagar Haveli and Daman and Diu (union territory)",
    cities: ["Daman", "Diu", "Silvassa"],
  },
  {
    state: "Delhi",
    cities: ["Delhi", "New Delhi"],
  },
  {
    state: "Goa",
    cities: ["Madgaon", "Panaji"],
  },
  {
    state: "Gujarat",
    cities: [
      "Ahmadabad",
      "Amreli",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Dwarka",
      "Gandhinagar",
      "Godhra",
      "Jamnagar",
      "Junagadh",
      "Kandla",
      "Khambhat",
      "Kheda",
      "Mahesana",
      "Morbi",
      "Nadiad",
      "Navsari",
      "Okha",
      "Palanpur",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Surat",
      "Surendranagar",
      "Valsad",
      "Veraval",
    ],
  },
  {
    state: "Haryana",
    cities: [
      "Ambala",
      "Bhiwani",
      "Chandigarh",
      "Faridabad",
      "Firozpur Jhirka",
      "Gurugram",
      "Hansi",
      "Hisar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Panipat",
      "Pehowa",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
    ],
  },
  {
    state: "Himachal Pradesh",
    cities: [
      "Bilaspur",
      "Chamba",
      "Dalhousie",
      "Dharmshala",
      "Hamirpur",
      "Kangra",
      "Kullu",
      "Mandi",
      "Nahan",
      "Shimla",
      "Una",
    ],
  },
  {
    state: "Jammu and Kashmir",
    cities: [
      "Anantnag",
      "Baramula",
      "Doda",
      "Gulmarg",
      "Jammu",
      "Kathua",
      "Punch",
      "Rajouri",
      "Srinagar",
      "Udhampur",
    ],
  },
  {
    state: "Jharkhand",
    cities: [
      "Bokaro",
      "Chaibasa",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "Giridih",
      "Hazaribag",
      "Jamshedpur",
      "Jharia",
      "Rajmahal",
      "Ranchi",
      "Saraikela",
    ],
  },
  {
    state: "Karnataka",
    cities: [
      "Badami",
      "Ballari",
      "Bengaluru",
      "Belagavi",
      "Bhadravati",
      "Bidar",
      "Chikkamagaluru",
      "Chitradurga",
      "Davangere",
      "Halebid",
      "Hassan",
      "Hubballi-Dharwad",
      "Kalaburagi",
      "Kolar",
      "Madikeri",
      "Mandya",
      "Mangaluru",
      "Mysuru",
      "Raichur",
      "Shivamogga",
      "Shravanabelagola",
      "Shrirangapattana",
      "Tumakuru",
      "Vijayapura",
    ],
  },
  {
    state: "Kerala",
    cities: [
      "Alappuzha",
      "Vatakara",
      "Idukki",
      "Kannur",
      "Kochi",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Mattancheri",
      "Palakkad",
      "Thalassery",
      "Thiruvananthapuram",
      "Thrissur",
    ],
  },
  {
    state: "Ladakh",
    cities: ["Kargil", "Leh"],
  },
  {
    state: "Madhya Pradesh",
    cities: [
      "Balaghat",
      "Barwani",
      "Betul",
      "Bharhut",
      "Bhind",
      "Bhojpur",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dr. Ambedkar Nagar (Mhow)",
      "Guna",
      "Gwalior",
      "Hoshangabad",
      "Indore",
      "Itarsi",
      "Jabalpur",
      "Jhabua",
      "Khajuraho",
      "Khandwa",
      "Khargone",
      "Maheshwar",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Murwara",
      "Narsimhapur",
      "Narsinghgarh",
      "Narwar",
      "Neemuch",
      "Nowgong",
      "Orchha",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Sarangpur",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Ujjain",
      "Vidisha",
    ],
  },
  {
    state: "Maharashtra",
    cities: [
      "Ahmadnagar",
      "Akola",
      "Amravati",
      "Aurangabad",
      "Bhandara",
      "Bhusawal",
      "Bid",
      "Buldhana",
      "Chandrapur",
      "Daulatabad",
      "Dhule",
      "Jalgaon",
      "Kalyan",
      "Karli",
      "Kolhapur",
      "Mahabaleshwar",
      "Malegaon",
      "Matheran",
      "Mumbai",
      "Nagpur",
      "New Mumbai",
      "Nanded",
      "Nashik",
      "Osmanabad",
      "Pandharpur",
      "Parbhani",
      "Pune",
      "Ratnagiri",
      "Raigarh",
      "Sangli",
      "Satara",
      "Sevagram",
      "Solapur",
      "Thane",
      "Ulhasnagar",
      "Vasai-Virar",
      "Wardha",
      "Yavatmal",
    ],
  },
  {
    state: "Manipur",
    cities: ["Imphal"],
  },
  {
    state: "Meghalaya",
    cities: ["Cherrapunji", "Shillong"],
  },
  {
    state: "Mizoram",
    cities: ["Aizawl", "Lunglei"],
  },
  {
    state: "Nagaland",
    cities: ["Kohima", "Mon", "Phek", "Wokha", "Zunheboto"],
  },
  {
    state: "Odisha",
    cities: [
      "Balangir",
      "Baleshwar",
      "Baripada",
      "Bhubaneshwar",
      "Brahmapur",
      "Cuttack",
      "Dhenkanal",
      "Kendujhar",
      "Konark",
      "Koraput",
      "Paradip",
      "Phulabani",
      "Puri",
      "Sambalpur",
      "Udayagiri",
    ],
  },
  {
    state: "Puducherry",
    cities: ["Karaikal", "Mahe", "Puducherry", "Yanam"],
  },
  {
    state: "Punjab",
    cities: [
      "Amritsar",
      "Batala",
      "Chandigarh",
      "Faridkot",
      "Firozpur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Nabha",
      "Patiala",
      "Rupnagar",
      "Sangrur",
    ],
  },
  {
    state: "Rajasthan",
    cities: [
      "Abu",
      "Ajmer",
      "Alwar",
      "Amer",
      "Barmer",
      "Beawar",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittaurgarh",
      "Churu",
      "Dhaulpur",
      "Dungarpur",
      "Ganganagar",
      "Hanumangarh",
      "Jaipur",
      "Jaisalmer",
      "Jalor",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Kishangarh",
      "Kota",
      "Merta",
      "Nagaur",
      "Nathdwara",
      "Pali",
      "Phalodi",
      "Pushkar",
      "Sawai Madhopur",
      "Shahpura",
      "Sikar",
      "Sirohi",
      "Tonk",
      "Udaipur",
    ],
  },
  {
    state: "Sikkim",
    cities: ["Gangtok", "Gyalshing", "Lachung", "Mangan"],
  },
  {
    state: "Tamil Nadu",
    cities: [
      "Arcot",
      "Chengalpattu",
      "Chennai",
      "Chidambaram",
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri",
      "Dindigul",
      "Erode",
      "Kanchipuram",
      "Kanniyakumari",
      "Kodaikanal",
      "Kumbakonam",
      "Madurai",
      "Mamallapuram",
      "Nagappattinam",
      "Nagercoil",
      "Palayamkottai",
      "Pudukkottai",
      "Rajapalayam",
      "Ramanathapuram",
      "Salem",
      "Thanjavur",
      "Tiruchchirappalli",
      "Tirunelveli",
      "Tiruppur",
      "Thoothukudi",
      "Udhagamandalam",
      "Vellore",
    ],
  },
  {
    state: "Telangana",
    cities: [
      "Hyderabad",
      "Karimnagar",
      "Khammam",
      "Mahbubnagar",
      "Nizamabad",
      "Sangareddi",
      "Warangal",
    ],
  },
  {
    state: "Tripura",
    cities: ["Agartala"],
  },
  {
    state: "Uttar Pradesh",
    cities: [
      "Agra",
      "Aligarh",
      "Amroha",
      "Ayodhya",
      "Azamgarh",
      "Bahraich",
      "Ballia",
      "Banda",
      "Bara Banki",
      "Bareilly",
      "Basti",
      "Bijnor",
      "Bithur",
      "Budaun",
      "Bulandshahr",
      "Deoria",
      "Etah",
      "Etawah",
      "Faizabad",
      "Farrukhabad-cum-Fatehgarh",
      "Fatehpur",
      "Fatehpur Sikri",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur",
      "Lakhimpur",
      "Lalitpur",
      "Lucknow",
      "Mainpuri",
      "Mathura",
      "Meerut",
      "Mirzapur-Vindhyachal",
      "Moradabad",
      "Muzaffarnagar",
      "Partapgarh",
      "Pilibhit",
      "Prayagraj",
      "Rae Bareli",
      "Rampur",
      "Saharanpur",
      "Sambhal",
      "Shahjahanpur",
      "Sitapur",
      "Sultanpur",
      "Tehri",
      "Varanasi",
    ],
  },
  {
    state: "Uttarakhand",
    cities: [
      "Almora",
      "DehraDun",
      "Haridwar",
      "Mussoorie",
      "Nainital",
      "Pithoragarh",
    ],
  },
  {
    state: "West Bengal",
    cities: [
      "Alipore",
      "Alipur Duar",
      "Asansol",
      "Baharampur",
      "Bally",
      "Balurghat",
      "Bankura",
      "Baranagar",
      "Barasat",
      "Barrackpore",
      "Basirhat",
      "Bhatpara",
      "Bishnupur",
      "Budge Budge",
      "Burdwan",
      "Chandernagore",
      "Darjeeling",
      "Diamond Harbour",
      "Dum Dum",
      "Durgapur",
      "Halisahar",
      "Haora",
      "Hugli",
      "Ingraj Bazar",
      "Jalpaiguri",
      "Kalimpong",
      "Kamarhati",
      "Kanchrapara",
      "Kharagpur",
      "Cooch Behar",
      "Kolkata",
      "Krishnanagar",
      "Malda",
      "Midnapore",
      "Murshidabad",
      "Nabadwip",
      "Palashi",
      "Panihati",
      "Purulia",
      "Raiganj",
      "Santipur",
      "Shantiniketan",
      "Shrirampur",
      "Siliguri",
      "Siuri",
      "Tamluk",
      "Titagarh",
    ],
  },
];

function StoreLocation() {
  const [selectedState, setSelectedState] = useState("Delhi");
  const [store, setStore] = useState("Delhi");
  const [cities, setCities] = useState(["Delhi ", "NewDelhi"]);
  const [selectedCity, setSelectedCity] = useState("");
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Storelocation")
      .then((response) => response.json())
      .then((data) => setStore(data.data));
  });
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    const foundState = statesWithCities.find((s) => s.state === state);
    if (foundState) {
      setCities(foundState.cities);
      setSelectedCity(""); // Reset city selection
      setAddresses([]);
    } else {
      setCities([]);
      setAddresses([]);
    }
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);

    // Find the state in statesWithCitiesandaddrss
    const foundState = store.find((s) => s.state === selectedState);
    if (foundState) {
      const foundCity = foundState.cities.find((c) => c.name === city);
      if (foundCity) {
        setAddresses(foundCity.addresses);
      } else {
        setAddresses([]);
      }
    }
  };
  return (
    <>
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: `url("https://www.kent.co.in/images/static_bg.png")`,
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ "background-color": "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center ">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Store Location</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2   gap-4  h-auto pb-2 container py-12 ">
          <form className=" mx-auto w-full  ">
            <label
              htmlFor="small"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select State
            </label>
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a State</option>
              {statesWithCities.map((s, index) => (
                <option key={index} value={s.state}>
                  {s.state}
                </option>
              ))}
            </select>
          </form>
          <form className=" mx-auto w-full  ">
            <label
              htmlFor="small"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select City
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!cities.length}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 py-6">
        <div className="max-w-7xl max-md:max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-sm:justify-center text-center mt-16">
            {addresses.length > 0 ? (
              addresses.map((address, index) => (
                <div key={index}>
                  <div className="bg-white p-4 rounded-lg relative -mt-6">
                    <h4 className="text-gray-800 text-lg font-bold">
                      {address.name}
                    </h4>
                    <p className="text-sm text-gray-800 mt-1">
                      Phone: {address.phone}
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      {address.address}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-4 text-center">
                <p className="text-gray-600">
                  No addresses available for the selected city.
                </p>
              </div>
            )}
          </div>

          {/* <div className="grid md:grid-cols-4 gap-8 max-sm:justify-center text-center mt-16">
            <div>
              <div className="bg-white p-4 rounded-lg relative -mt-6">
                <h4 className="text-gray-800 text-lg font-bold">Ankit</h4>
                <p className="text-sm text-gray-800 mt-1">
                  Proven RO Systems Ltd
                </p>
                <p className="mt-4 text-gray-600 text-sm">
                  C - 15, Sector - 7, Noida, Delhi Pin Code - 201301 Phone -
                  9582-123456
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg relative -mt-6">
                <h4 className="text-gray-800 text-lg font-bold">Ankit</h4>
                <p className="text-sm text-gray-800 mt-1">
                  Proven RO Systems Ltd
                </p>
                <p className="mt-4 text-gray-600 text-sm">
                  C - 15, Sector - 7, Noida, Delhi Pin Code - 201301 Phone -
                  9582-123456
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg relative -mt-6">
                <h4 className="text-gray-800 text-lg font-bold">Ankit</h4>
                <p className="text-sm text-gray-800 mt-1">
                  Proven RO Systems Ltd
                </p>
                <p className="mt-4 text-gray-600 text-sm">
                  C - 15, Sector - 7, Noida, Delhi Pin Code - 201301 Phone -
                  9582-123456
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default StoreLocation;
