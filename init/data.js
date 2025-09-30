const sampleListings = [
  {
    "title": "Cozy PG near Delhi University",
    "desc": "Fully furnished PG with WiFi and mess facilities.",
    "location": "North Campus, Delhi",
    "state": "Delhi",
    "price": 7500,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Shared Apartment in Pune",
    "desc": "2BHK flat for students, close to Fergusson College.",
    "location": "Shivajinagar, Pune",
    "state": "Maharashtra",
    "price": 9500,
    "capacity": 3,
    "image": "https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
  },
  {
    "title": "Girls Hostel near IIT Bombay",
    "desc": "Safe and secure hostel for female students with meals.",
    "location": "Powai, Mumbai",
    "state": "Maharashtra",
    "price": 12000,
    "capacity": 1,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    "title": "Budget PG near Bangalore University",
    "desc": "Affordable PG with basic amenities for students.",
    "location": "Jayanagar, Bangalore",
    "state": "Karnataka",
    "price": 6000,
    "capacity": 3,
    "image": "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
  },
  {
    "title": "Luxury Student Flats in Hyderabad",
    "desc": "Modern 2BHK flats with AC and study tables.",
    "location": "Gachibowli, Hyderabad",
    "state": "Telangana",
    "price": 15000,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1501183638710-841dd1904471"
  },
  {
    "title": "PG near Jadavpur University",
    "desc": "Good environment for students with free WiFi.",
    "location": "Jadavpur, Kolkata",
    "state": "West Bengal",
    "price": 5500,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1502005097973-6a7082348e28"
  },
  {
    "title": "Student Room near Manipal University",
    "desc": "Private room for students, near campus.",
    "location": "Manipal, Udupi",
    "state": "Karnataka",
    "price": 8500,
    "capacity": 1,
    "image": "https://images.unsplash.com/photo-1594511936753-5cd40f0967ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
  },
  {
    "title": "PG near Chandigarh University",
    "desc": "Comfortable PG with homely food.",
    "location": "Mohali, Chandigarh",
    "state": "Punjab",
    "price": 7000,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1576095910326-9de5a8b207e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
  },
  {
    "title": "Affordable Hostel near BHU",
    "desc": "Budget-friendly boys hostel with WiFi.",
    "location": "Varanasi",
    "state": "Uttar Pradesh",
    "price": 4500,
    "capacity": 3,
    "image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "title": "Studio Room near SRM University",
    "desc": "Independent studio with attached bathroom.",
    "location": "Kattankulathur, Chennai",
    "state": "Tamil Nadu",
    "price": 9500,
    "capacity": 1,
    "image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "title": "Shared Flat near Christ University",
    "desc": "2 sharing room with modern interiors.",
    "location": "Koramangala, Bangalore",
    "state": "Karnataka",
    "price": 10000,
    "capacity": 2,
    "image": "https://plus.unsplash.com/premium_photo-1717014210742-b3f268ff3b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
  },
  {
    "title": "Boys Hostel near AMU",
    "desc": "Safe and affordable hostel for students.",
    "location": "Aligarh",
    "state": "Uttar Pradesh",
    "price": 5000,
    "capacity": 4,
    "image": "https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
  },
  {
    "title": "Modern PG near Symbiosis",
    "desc": "Furnished PG with laundry and gym.",
    "location": "Viman Nagar, Pune",
    "state": "Maharashtra",
    "price": 11000,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  {
    "title": "Girls PG near DU South Campus",
    "desc": "Secure PG with 24/7 warden and CCTV.",
    "location": "South Campus, Delhi",
    "state": "Delhi",
    "price": 8000,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1694559218346-25ac5707cfa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
  },
  {
    "title": "Shared Accommodation near LPU",
    "desc": "Spacious 3 sharing room with attached bathroom.",
    "location": "Phagwara, Punjab",
    "state": "Punjab",
    "price": 6500,
    "capacity": 3,
    "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  {
    "title": "Hostel near NIT Trichy",
    "desc": "Budget-friendly hostel for engineering students.",
    "location": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "price": 5500,
    "capacity": 3,
    "image": "https://plus.unsplash.com/premium_photo-1683649964203-baf13fa852e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "title": "Private Room near IISc Bangalore",
    "desc": "Independent student room with study desk.",
    "location": "Malleshwaram, Bangalore",
    "state": "Karnataka",
    "price": 12000,
    "capacity": 1,
    "image": "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "title": "Shared PG near Osmania University",
    "desc": "Affordable PG with healthy food options.",
    "location": "Amberpet, Hyderabad",
    "state": "Telangana",
    "price": 7000,
    "capacity": 2,
    "image": "https://plus.unsplash.com/premium_photo-1682093002327-087f25034765?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
    "title": "Hostel near Patna University",
    "desc": "Basic but comfortable boys hostel.",
    "location": "Patna",
    "state": "Bihar",
    "price": 4800,
    "capacity": 3,
    "image": "https://images.unsplash.com/photo-1501183638710-841dd1904471"
  },
  {
    "title": "Girls Hostel near Gujarat University",
    "desc": "Well-maintained hostel for female students.",
    "location": "Ahmedabad",
    "state": "Gujarat",
    "price": 9000,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1552858725-693709cc17c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D"
  }
];

module.exports = { data: sampleListings };