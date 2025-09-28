const sampleListings = [
  {
    "title": "Cozy PG near Delhi University",
    "desc": "Fully furnished PG with WiFi and mess facilities.",
    "location": "North Campus, Delhi",
    "state": "Delhi",
    "price": 7500,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1560448075-bb485b1647f4"
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
    "image": "https://images.unsplash.com/photo-1560448204-4d9b2d1a2f1a"
  },
  {
    "title": "PG near Chandigarh University",
    "desc": "Comfortable PG with homely food.",
    "location": "Mohali, Chandigarh",
    "state": "Punjab",
    "price": 7000,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1600585154207-58c57b470f87"
  },
  {
    "title": "Affordable Hostel near BHU",
    "desc": "Budget-friendly boys hostel with WiFi.",
    "location": "Varanasi",
    "state": "Uttar Pradesh",
    "price": 4500,
    "capacity": 3,
    "image": "https://images.unsplash.com/photo-1600607687363-8b25aa8f8f3d"
  },
  {
    "title": "Studio Room near SRM University",
    "desc": "Independent studio with attached bathroom.",
    "location": "Kattankulathur, Chennai",
    "state": "Tamil Nadu",
    "price": 9500,
    "capacity": 1,
    "image": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  },
  {
    "title": "Shared Flat near Christ University",
    "desc": "2 sharing room with modern interiors.",
    "location": "Koramangala, Bangalore",
    "state": "Karnataka",
    "price": 10000,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1598928506310-5ee1c8d2e6b9"
  },
  {
    "title": "Boys Hostel near AMU",
    "desc": "Safe and affordable hostel for students.",
    "location": "Aligarh",
    "state": "Uttar Pradesh",
    "price": 5000,
    "capacity": 4,
    "image": "https://images.unsplash.com/photo-1598133894008-67f1e6a7a7f0"
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
    "image": "https://images.unsplash.com/photo-1586105251261-72a756497a12"
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
    "image": "https://images.unsplash.com/photo-1597047084897-51e81819a3e3"
  },
  {
    "title": "Private Room near IISc Bangalore",
    "desc": "Independent student room with study desk.",
    "location": "Malleshwaram, Bangalore",
    "state": "Karnataka",
    "price": 12000,
    "capacity": 1,
    "image": "https://images.unsplash.com/photo-1600585154256-7c35606fc9f8"
  },
  {
    "title": "Shared PG near Osmania University",
    "desc": "Affordable PG with healthy food options.",
    "location": "Amberpet, Hyderabad",
    "state": "Telangana",
    "price": 7000,
    "capacity": 2,
    "image": "https://images.unsplash.com/photo-1560448074-67f61e83c6a1"
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
    "image": "https://images.unsplash.com/photo-1628744443167-2caa6c8e1d7a"
  }
];

module.exports = { data: sampleListings };