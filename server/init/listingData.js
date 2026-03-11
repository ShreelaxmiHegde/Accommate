// const sampleListings = [
//   {
//     "title": "Cozy PG near Delhi University",
//     "desc": "Fully furnished PG with WiFi and mess facilities.",
//     "location": "North Campus, Delhi",
//     "state": "Delhi",
//     "price": 7500,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     }
//   },
//   {
//     "title": "Shared Apartment in Pune",
//     "desc": "2BHK flat for students, close to Fergusson College.",
//     "location": "Shivajinagar, Pune",
//     "state": "Maharashtra",
//     "price": 9500,
//     "capacity": 3,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
//     }
//   },
//   {
//     "title": "Girls Hostel near IIT Bombay",
//     "desc": "Safe and secure hostel for female students with meals.",
//     "location": "Powai, Mumbai",
//     "state": "Maharashtra",
//     "price": 12000,
//     "capacity": 1,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//     }
//   },
//   {
//     "title": "Budget PG near Bangalore University",
//     "desc": "Affordable PG with basic amenities for students.",
//     "location": "Jayanagar, Bangalore",
//     "state": "Karnataka",
//     "price": 6000,
//     "capacity": 3,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
//     }
//   },
//   {
//     "title": "Luxury Student Flats in Hyderabad",
//     "desc": "Modern 2BHK flats with AC and study tables.",
//     "location": "Gachibowli, Hyderabad",
//     "state": "Telangana",
//     "price": 15000,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
//     }
//   },
//   {
//     "title": "PG near Jadavpur University",
//     "desc": "Good environment for students with free WiFi.",
//     "location": "Jadavpur, Kolkata",
//     "state": "West Bengal",
//     "price": 5500,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1502005097973-6a7082348e28"
//     }
//   },
//   {
//     "title": "Student Room near Manipal University",
//     "desc": "Private room for students, near campus.",
//     "location": "Manipal, Udupi",
//     "state": "Karnataka",
//     "price": 8500,
//     "capacity": 1,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1594511936753-5cd40f0967ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
//     } 
//   },
//   {
//     "title": "PG near Chandigarh University",
//     "desc": "Comfortable PG with homely food.",
//     "location": "Mohali, Chandigarh",
//     "state": "Punjab",
//     "price": 7000,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1576095910326-9de5a8b207e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
//     }
//   },
//   {
//     "title": "Affordable Hostel near BHU",
//     "desc": "Budget-friendly boys hostel with WiFi.",
//     "location": "Varanasi",
//     "state": "Uttar Pradesh",
//     "price": 4500,
//     "capacity": 3,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
//     } 
//   },
//   {
//     "title": "Studio Room near SRM University",
//     "desc": "Independent studio with attached bathroom.",
//     "location": "Kattankulathur, Chennai",
//     "state": "Tamil Nadu",
//     "price": 9500,
//     "capacity": 1,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
//     }
//   },
//   {
//     "title": "Shared Flat near Christ University",
//     "desc": "2 sharing room with modern interiors.",
//     "location": "Koramangala, Bangalore",
//     "state": "Karnataka",
//     "price": 10000,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://plus.unsplash.com/premium_photo-1717014210742-b3f268ff3b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
//     }
//   },
//   {
//     "title": "Boys Hostel near AMU",
//     "desc": "Safe and affordable hostel for students.",
//     "location": "Aligarh",
//     "state": "Uttar Pradesh",
//     "price": 5000,
//     "capacity": 4,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
//     }
//   },
//   {
//     "title": "Modern PG near Symbiosis",
//     "desc": "Furnished PG with laundry and gym.",
//     "location": "Viman Nagar, Pune",
//     "state": "Maharashtra",
//     "price": 11000,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
//     }
//   },
//   {
//     "title": "Girls PG near DU South Campus",
//     "desc": "Secure PG with 24/7 warden and CCTV.",
//     "location": "South Campus, Delhi",
//     "state": "Delhi",
//     "price": 8000,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1694559218346-25ac5707cfa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
//     }
//   },
//   {
//     "title": "Shared Accommodation near LPU",
//     "desc": "Spacious 3 sharing room with attached bathroom.",
//     "location": "Phagwara, Punjab",
//     "state": "Punjab",
//     "price": 6500,
//     "capacity": 3,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
//     }
//   },
//   {
//     "title": "Hostel near NIT Trichy",
//     "desc": "Budget-friendly hostel for engineering students.",
//     "location": "Tiruchirappalli",
//     "state": "Tamil Nadu",
//     "price": 5500,
//     "capacity": 3,
//     "image": {
//       filename: "ListingImage",
//       url: "https://plus.unsplash.com/premium_photo-1683649964203-baf13fa852e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
//     }
//   },
//   {
//     "title": "Private Room near IISc Bangalore",
//     "desc": "Independent student room with study desk.",
//     "location": "Malleshwaram, Bangalore",
//     "state": "Karnataka",
//     "price": 12000,
//     "capacity": 1,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
//     }
//   },
//   {
//     "title": "Shared PG near Osmania University",
//     "desc": "Affordable PG with healthy food options.",
//     "location": "Amberpet, Hyderabad",
//     "state": "Telangana",
//     "price": 7000,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://plus.unsplash.com/premium_photo-1682093002327-087f25034765?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D"
//     }
//   },
//   {
//     "title": "Hostel near Patna University",
//     "desc": "Basic but comfortable boys hostel.",
//     "location": "Patna",
//     "state": "Bihar",
//     "price": 4800,
//     "capacity": 3,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
//     }
//   },
//   {
//     "title": "Girls Hostel near Gujarat University",
//     "desc": "Well-maintained hostel for female students.",
//     "location": "Ahmedabad",
//     "state": "Gujarat",
//     "price": 9000,
//     "capacity": 2,
//     "image": {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1552858725-693709cc17c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D"
//     }
//   }
// ];

const sampleListings = [
  {
    "owner": "Sunidhi",
    "image": {
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "title": "Cozy PG near IIT Delhi",
    "desc": "Comfortable PG for students with modern amenities and peaceful study environment.",
    "address": "Hauz Khas",
    "stateCity": "Delhi",
    "nearestCampus": "IIT Delhi",
    "propertyType": "pg",
    "facilities": ["Wi-Fi", "Furnished", "Laundry", "24/7 Water"],
    "price": 8500,
    "capacity": 2,
    "reviews": []
  },
  {
    "owner": "Sunidhi",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "title": "Student Hostel near DU North Campus",
    "desc": "Affordable hostel rooms with shared kitchen and high speed internet.",
    "address": "Kamla Nagar",
    "stateCity": "Delhi",
    "nearestCampus": "Delhi University",
    "propertyType": "hostel",
    "facilities": ["Wi-Fi", "Kitchen", "Laundry", "24/7 Water"],
    "price": 6500,
    "capacity": 4,
    "reviews": []
  },
  {
    "owner": "Sunidhi",
    "image": {
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    "title": "Studio apartment near Christ University",
    "desc": "Private studio ideal for students with AC and attached bathroom.",
    "address": "Hosur Road",
    "stateCity": "Bangalore",
    "nearestCampus": "Christ University",
    "propertyType": "studio",
    "facilities": ["Wi-Fi", "AC", "Private Bathroom", "Furnished"],
    "price": 12000,
    "capacity": 1,
    "reviews": []
  },
  {
    "owner": "Sunidhi",
    "image": {
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "title": "Budget PG near Anna University",
    "desc": "Clean rooms with essential facilities for engineering students.",
    "address": "Guindy",
    "stateCity": "Chennai",
    "nearestCampus": "Anna University",
    "propertyType": "pg",
    "facilities": ["Wi-Fi", "24/7 Water", "Furnished"],
    "price": 7000,
    "capacity": 3,
    "reviews": []
  },
  {
    "owner": "Alex",
    "image": {
      "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    },
    "title": "Modern apartment near IIT Bombay",
    "desc": "Spacious apartment with kitchen and furnished bedrooms.",
    "address": "Powai",
    "stateCity": "Mumbai",
    "nearestCampus": "IIT Bombay",
    "propertyType": "apartment",
    "facilities": ["Wi-Fi", "Kitchen", "AC", "Furnished"],
    "price": 18000,
    "capacity": 3,
    "reviews": []
  },
  {
    "owner": "Alex",
    "image": {
      "url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    "title": "Student hostel near VIT Vellore",
    "desc": "Friendly student hostel with laundry and 24 hour water supply.",
    "address": "Katpadi",
    "stateCity": "Vellore",
    "nearestCampus": "VIT University",
    "propertyType": "hostel",
    "facilities": ["Wi-Fi", "Laundry", "24/7 Water"],
    "price": 6000,
    "capacity": 5,
    "reviews": []
  },
  {
    "owner": "Alex",
    "image": {
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    "title": "Comfort PG near BITS Pilani",
    "desc": "Quiet and secure PG perfect for BITS students.",
    "address": "Pilani",
    "stateCity": "Rajasthan",
    "nearestCampus": "BITS Pilani",
    "propertyType": "pg",
    "facilities": ["Wi-Fi", "Furnished", "24/7 Water"],
    "price": 7500,
    "capacity": 2,
    "reviews": []
  },
  {
    "owner": "Alex",
    "image": {
      "url": "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },
    "title": "Compact studio near IIT Madras",
    "desc": "Independent studio with AC and fast internet.",
    "address": "Adyar",
    "stateCity": "Chennai",
    "nearestCampus": "IIT Madras",
    "propertyType": "studio",
    "facilities": ["Wi-Fi", "AC", "Private Bathroom"],
    "price": 11000,
    "capacity": 1,
    "reviews": []
  },
  {
    "owner": "Jessica",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "title": "Shared apartment near JNU",
    "desc": "Large apartment ideal for students wanting shared living.",
    "address": "Munirka",
    "stateCity": "Delhi",
    "nearestCampus": "JNU",
    "propertyType": "apartment",
    "facilities": ["Wi-Fi", "Kitchen", "Furnished"],
    "price": 9000,
    "capacity": 4,
    "reviews": []
  },
  {
    "owner": "Jessica",
    "image": {
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "title": "Affordable PG near Pune University",
    "desc": "Simple and comfortable PG for college students.",
    "address": "Shivajinagar",
    "stateCity": "Pune",
    "nearestCampus": "Savitribai Phule Pune University",
    "propertyType": "pg",
    "facilities": ["Wi-Fi", "Laundry", "24/7 Water"],
    "price": 6500,
    "capacity": 3,
    "reviews": []
  },
  {
    "owner": "Jessica",
    "image": {
      "url": "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    },
    "title": "Student studio near IIT Roorkee",
    "desc": "Private studio with attached bathroom and WiFi.",
    "address": "Roorkee",
    "stateCity": "Uttarakhand",
    "nearestCampus": "IIT Roorkee",
    "propertyType": "studio",
    "facilities": ["Wi-Fi", "Private Bathroom", "Furnished"],
    "price": 10000,
    "capacity": 1,
    "reviews": []
  },
  {
    "owner": "Jessica",
    "image": {
      "url": "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
    },
    "title": "Hostel near NIT Trichy",
    "desc": "Safe hostel accommodation with kitchen access.",
    "address": "Tiruchirappalli",
    "stateCity": "Tamil Nadu",
    "nearestCampus": "NIT Trichy",
    "propertyType": "hostel",
    "facilities": ["Wi-Fi", "Kitchen", "Laundry"],
    "price": 7200,
    "capacity": 4,
    "reviews": []
  },
  {
    "owner": "Vihan",
    "image": {
      "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    "title": "PG near SRM University",
    "desc": "Comfortable PG with furnished rooms and WiFi.",
    "address": "Kattankulathur",
    "stateCity": "Chennai",
    "nearestCampus": "SRM University",
    "propertyType": "pg",
    "facilities": ["Wi-Fi", "Furnished", "Laundry"],
    "price": 6800,
    "capacity": 3,
    "reviews": []
  },
  {
    "owner": "Vihan",
    "image": {
      "url": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
    },
    "title": "Apartment near IIM Bangalore",
    "desc": "Fully furnished apartment suitable for MBA students.",
    "address": "Bannerghatta Road",
    "stateCity": "Bangalore",
    "nearestCampus": "IIM Bangalore",
    "propertyType": "apartment",
    "facilities": ["Wi-Fi", "Kitchen", "AC", "Furnished"],
    "price": 20000,
    "capacity": 2,
    "reviews": []
  },
  {
    "owner": "Vihan",
    "image": {
      "url": "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d4f"
    },
    "title": "Studio near IIT Kanpur",
    "desc": "Minimalist studio with fast WiFi and AC.",
    "address": "Kalyanpur",
    "stateCity": "Kanpur",
    "nearestCampus": "IIT Kanpur",
    "propertyType": "studio",
    "facilities": ["Wi-Fi", "AC", "Private Bathroom"],
    "price": 10500,
    "capacity": 1,
    "reviews": []
  },
  {
    "owner": "Vihan",
    "image": {
      "url": "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",

    },
    "title": "Student hostel near NIT Surathkal",
    "desc": "Affordable hostel with comfortable beds and internet.",
    "address": "Surathkal",
    "stateCity": "Mangalore",
    "nearestCampus": "NIT Surathkal",
    "propertyType": "hostel",
    "facilities": ["Wi-Fi", "Laundry", "24/7 Water"],
    "price": 6200,
    "capacity": 5,
    "reviews": []
  },
  {
    "owner": "Karishma",
    "image": {
      "url": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
    },
    "title": "PG near Amity University",
    "desc": "Clean PG with modern amenities and study friendly environment.",
    "address": "Sector 125",
    "stateCity": "Noida",
    "nearestCampus": "Amity University",
    "propertyType": "pg",
    "facilities": ["Wi-Fi", "Furnished", "AC"],
    "price": 8500,
    "capacity": 2,
    "reviews": []
  },
  {
    "owner": "Karishma",
    "image": {
      "url": "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
    },
    "title": "Apartment near University of Hyderabad",
    "desc": "Spacious apartment with kitchen and WiFi.",
    "address": "Gachibowli",
    "stateCity": "Hyderabad",
    "nearestCampus": "University of Hyderabad",
    "propertyType": "apartment",
    "facilities": ["Wi-Fi", "Kitchen", "Furnished"],
    "price": 15000,
    "capacity": 3,
    "reviews": []
  },
  {
    "owner": "Karishma",
    "image": {
      "url": "https://images.unsplash.com/photo-1560448075-bb4caa6e0a74",
    },
    "title": "Studio near IIT Guwahati",
    "desc": "Private studio for students seeking peaceful stay.",
    "address": "Amingaon",
    "stateCity": "Guwahati",
    "nearestCampus": "IIT Guwahati",
    "propertyType": "studio",
    "facilities": ["Wi-Fi", "Private Bathroom", "Furnished"],
    "price": 9500,
    "capacity": 1,
    "reviews": []
  },
  {
    "owner": "Karishma",
    "image": {
      "url": "https://images.unsplash.com/photo-1527030280862-64139fba04ca"
    },
    "title": "Hostel near Jadavpur University",
    "desc": "Student friendly hostel with shared kitchen.",
    "address": "Jadavpur",
    "stateCity": "Kolkata",
    "nearestCampus": "Jadavpur University",
    "propertyType": "hostel",
    "facilities": ["Wi-Fi", "Kitchen", "Laundry", "24/7 Water"],
    "price": 6800,
    "capacity": 4,
    "reviews": []
  }
]

module.exports = sampleListings;