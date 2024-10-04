import { useState } from "react";

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
const statesWithCitiesandaddrss = [
  {
    state: "Uttar Pradesh",
    cities: [
      {
        name: "Azamgarh",
        addresses: [
          {
            name: "Prashant Tiwari (azamgarh)",
            phone: "7379798958,8957686879",
            address: "Saidwara bazar Rani ki sarai Azamgarh 276207",
          },
        ],
      },
      {
        name: "Sitapur",
        addresses: [
          {
            name: "Sitapur babblesh",
            phone: " +91 83819 47268",
            address:
              "House no2 Mishra building behind axis bank,  loharbagh,sitapur, pin code=261001",
          },
        ],
      },
      {
        name: "Prayagraj",
        addresses: [
          {
            name: "sanjiv",
            phone: "8429623514",
            address: "  yadav hathiganha Phaphamau prayagraj 211013 ",
          },
        ],
      },
      {
        name: "Lucknow",
        addresses: [
          {
            name: "Sabnam",
            phone: " 8932054106 +91 72758 81103",
            address:
              "sabnam- 120 House no 538,, KHA Near shiv mandir loni   katra khadra lucknnow uttar pradesh 226020 ",
          },
        ],
      },
      {
        name: "Meerut",
        addresses: [
          {
            name: "Arun",
            phone: " 8077153226",
            address:
              "127 beri pura opp jagdish mandap delhi road meerut 250002 ",
          },
        ],
      },
    ],
  },
  {
    state: "Gujarat",
    cities: [
      {
        name: "Ahmadabad",
        addresses: [
          {
            name: "Piyush Bhai Prajapati",
            phone: "8000207071",
            address:
              " FF -1 Avani Complex  Opp shinghwai Mata Mandir, Naranpura Gam Bus stop Naranpura Ahmedabad Gujarat 380013.",
          },
          {
            name: "Bhawin Gujrat",
            phone: "9898016623",
            address:
              " 93 shakti vijay society aurbudanagar rod opp.chital chaya society   odhav ahmedabad 382415 ",
          },
        ],
      },
      {
        name: "Rajkot",
        addresses: [
          {
            name: "anil",
            phone: " +91 79849 03783",
            address:
              " Anil -Neer water Tech  Balaji hall khijada wado main road aditya   park nr. aditya hanuman temple rajkot gujrat 360004",
          },
        ],
      },
    ],
  },
  {
    state: "Madhya Pradesh",
    cities: [
      {
        name: "Bhopal",
        addresses: [
          {
            name: "Ashish Bhopal",
            phone: "+91 73890 62384",
            address:
              " 4 old Ashoka garden near silver in hotel  raisen road Bhopal 462023 Govindpura",
          },
        ],
      },
      {
        name: "Gwalior",
        addresses: [
          {
            name: "Gajendra tek",
            phone: "9329798998",
            address:
              " shop no 8 1st Floor Ganesh  complex subesh Ganj Dabra Gwalior mp 475110 ",
          },
        ],
      },
      {
        name: "Indore",
        addresses: [
          {
            name: "Adarsh Tiwari",
            phone: " +91 95843 05271",
            address:
              "  18. new kaveri nagar near rudra hanuman mandir  ,sangam nagar ke pass indore .m.p 452010 ",
          },
        ],
      },
    ],
  },
  {
    state: "Bihar",
    cities: [
      {
        name: "Munger",
        addresses: [
          {
            name: "Ashutosh Gupta",
            phone: "70046 58194",
            address: "Puranigunj tanti tola  Munger Bihar - 811201",
          },
        ],
      },
    ],
  },
  {
    state: "Jharkhand",
    cities: [
      {
        name: "Bokaro",
        addresses: [
          {
            name: "Ranjan kumar",
            phone: " +91 87097 96249",
            address:
              " Cheak post chas Bokaro patel market cheak post   Pincode 827013",
          },
        ],
      },
    ],
  },
  {
    state: "Tamil Nadu",
    cities: [
      {
        name: "Chennai",
        addresses: [
          {
            name: "Deepak",
            phone: " 7810010003",
            address:
              " White wave RO system  No. 7 Jeeva main Street Kavangarai puzhal Chennai 600066",
          },
          {
            name: "Raj anand",
            phone: " 7810010003",
            address:
              "  15/12, pillaiyar koil Street, perungudi, chennai-600096",
          },
        ],
      },
    ],
  },
  {
    state: "Uttarakhand",
    cities: [
      {
        name: "DehraDun",
        addresses: [
          {
            name: "Vinay saini ",
            phone: " 9917312093",
            address:
              "  c/o DP bhatt, House no-20, maitri vihar society, shastradhara road dehradun, 248001 ",
          },
        ],
      },
    ],
  },
  {
    state: "Assam",
    cities: [
      {
        name: "Dibrugarh",
        addresses: [
          {
            name: "Santanu Das ",
            phone: " 8812006017 ,9401765566",
            address:
              "  S.N ENTERPRISES  Chiring Chapori Near Gosala Santoshi Mata Poth ",
          },
        ],
      },
      {
        name: "Guwahati",
        addresses: [
          {
            name: "Ratan Dutta ",
            phone: " +91 98595 82205",
            address:
              "  North East kitchen House number 50, Rajgarh main road, opp bylane 6, Guwahati 781003  ",
          },
        ],
      },
    ],
  },
  {
    state: "Chattisgarh",
    cities: [
      {
        name: "Durg",
        addresses: [
          {
            name: "Santanu Das ",
            phone: "8269412896",
            address:
              " Lig 1102 I.E. housing board near cricket stadium bhilai CG Pincode-490026 ",
          },
        ],
      },
      {
        name: "Raigarh",
        addresses: [
          {
            name: "Mantu Kumar Gupta ",
            phone: "6232747122 ,7738578168",
            address:
              " SKG WATER SOLUTIONS SERVICE   Shop no 08 Rajiv nagar complex kotra   road Raigarh Chhattisgarh 496001 ",
          },
        ],
      },
    ],
  },
  {
    state: "Andhra Pradesh",
    cities: [
      {
        name: "Eluru",
        addresses: [
          {
            name: "Ramalingheswara rao  ",
            phone: " +91 76618 98641",
            address:
              " near water tank Dondapadu Sanivarapu Peta   Eluru West Godavari district Andhra Pradesh 534003 ",
          },
        ],
      },
      {
        name: "Rajahmundry",
        addresses: [
          {
            name: "Bala Subramaniyam   ",
            phone: " +91 77993 36050",
            address:
              " 45-33-15/1, near sai baba temple seelam  nookaraju complex road rajahmundry  ",
          },
        ],
      },
      {
        name: "Anantapur",
        addresses: [
          {
            name: "Prashad    ",
            phone: "8247549849",
            address:
              " Sree Malleeswari Agencies,Domestic Appliance Services,  # 7 / 63 - 80, Bhagyanagar,Guntakal, PIN: 515801 ANANTAPUR District Andhra Pradesh ",
          },
        ],
      },
    ],
  },
  {
    state: "Maharashtra",
    cities: [
      {
        name: "New Mumbai",
        addresses: [
          {
            name: "prashant ",
            phone: "0000000000",
            address:
              " 302 plot 33 sector 17  V2 apartment Kamothe opp Titan world Navi Mumbai  ",
          },
          {
            name: "Ratan  ",
            phone: "9172422045 , +91 83568 47617",
            address:
              " Kalamboli  House no 120, near traffic police, kalamboli circle, kalamboli 410218   ",
          },
        ],
      },
      {
        name: "Jalgaon",
        addresses: [
          {
            name: " Valmik ramesh patil  ",
            phone: "9923866438",
            address:
              "  flat no 35, rana hotel back site jalgaon rode   shirsoli pb new sai gajanana colony   jalgaon rode maharashtra 425126 ",
          },
        ],
      },
      {
        name: "Nagpur",
        addresses: [
          {
            name: "vijay  ",
            phone: "8668544861",
            address:
              "  Talmale complex wanadongri hingna road Nagpur Maharashtra India   Pin code 441110 ",
          },
        ],
      },
      {
        name: "Raigarh",
        addresses: [
          {
            name: " ajay",
            phone: "  +91 82628 80063",
            address:
              "   At.Dhamani Po.Borwadi Tal-Mangaon Dist.Raigad  pin code - 402120  ",
          },
        ],
      },
    ],
  },

  {
    state: "Haryana",
    cities: [
      {
        name: "Gurugram",
        addresses: [
          {
            name: "kaushal ",
            phone: "+91 92896 05451",
            address: " F 1101 green court society sector 90  Pin code - 122505",
          },
          {
            name: "Sujatha menon ",
            phone: " +91 95672 44888",
            address: "B 1062,palam vihar Gurgaon Hariyana  122017 ",
          },
        ],
      },
      {
        name: "Gurugram",
        addresses: [
          {
            name: "kaushal ",
            phone: "+91 92896 05451",
            address: " F 1101 green court society sector 90  Pin code - 122505",
          },
          {
            name: "Sujatha menon ",
            phone: " +91 95672 44888",
            address: "B 1062,palam vihar Gurgaon Hariyana  122017 ",
          },
        ],
      },
    ],
  },
  {
    state: "Telangana",
    cities: [
      {
        name: "Hyderabad",
        addresses: [
          {
            name: "Mufaddal shamim ",
            phone: "+91 90144 11008",
            address:
              " 1-33-271 hakimi complex rtc colony trimulgherry Secunderabad 500015 ",
          },
          {
            name: "Upender  ",
            phone: " +91 99489 92183",
            address:
              "  SS WATER SOLUTIONS, BESIDE GANGA BHAVANI ICE COMPANY, NEAR SHIVA SHANKER SWEET HOUSE, BOYAWADA, NALGONDA,508001. ",
          },
        ],
      },
      {
        name: "Karimnagar",
        addresses: [
          {
            name: "Nelluta Rakesh  W/o. Sanjeeva rani ",
            phone: "  +91 79897 15774",
            address:
              " 9-12/3/A/1   Bommakal Karimnagar  Telangana 505001  Near siddertha school",
          },
        ],
      },
      {
        name: "Khammam",
        addresses: [
          {
            name: "Nelluta Rakesh  W/o. Sanjeeva rani ",
            phone: "9573183599",
            address:
              " Podili Bikshamaiah complex  1st floor Beside Srinivasa function hall  Rotarynagar Khammam 507001 Telangana",
          },
        ],
      },
    ],
  },
  {
    state: "Rajasthan",
    cities: [
      {
        name: "Jaipur",
        addresses: [
          {
            name: "Pooja ",
            phone: "9660440555",
            address:
              "Aqua make technology   2, 1st floor bawari bus stand near tilak   hospital agra road jaipur 302031 Jaipur ",
          },
        ],
      },
      {
        name: "Kota",
        addresses: [
          {
            name: "jaswant nagar ",
            phone: " +91 95494 24269",
            address:
              " 950,, jai ambey nagar M.B.S main road, near   ramcharan marriage garden rangbari kota 324005 ",
          },
        ],
      },
    ],
  },
  {
    state: "Jammu and Kashmir",
    cities: [
      {
        name: "Jammu",
        addresses: [
          {
            name: "Parveen Sharma  ",
            phone: "9018599956",
            address:
              " C/o RR beauty Parlour  Jk colony paloura top  Near sugar n spice food point 181124 ",
          },
        ],
      },
    ],
  },
  {
    state: "Punjab",
    cities: [
      {
        name: "Ludhiana",
        addresses: [
          {
            name: "Harman  ",
            phone: "8566077002",
            address:
              " Harman global aqua solution   Scf 109 new grain market backside arora palace gill road ludhiana pb 141003",
          },
        ],
      },
    ],
  },
];

function StoreLocation() {
  const [selectedState, setSelectedState] = useState("Delhi");
  const [cities, setCities] = useState(["Delhi ", "NewDelhi"]);
  const [selectedCity, setSelectedCity] = useState("");
  const [addresses, setAddresses] = useState([]);
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
    const foundState = statesWithCitiesandaddrss.find(
      (s) => s.state === selectedState
    );
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
