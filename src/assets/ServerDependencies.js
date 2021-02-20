export const serversType = [
  {
    title: "Cloud Compute",
    image: "Cloud_Compute.svg",
  },
  {
    title: "Block Storage",
    image: "Block_Storage.svg",
  },
  {
    title: "Bare Metal",
    image: "Bare_Metal.svg",
  },
  {
    title: "Dedicated Cloud",
    image: "Dedicated_Cloud.svg",
  },
];

export const serverLocations = {
  northAmerica:[
    {
      location: "Atlanta",
      country: "United States",
      image: "NorthAmerica/Atlanta.svg",
    },
    {
      location: "Los Angeles",
      country: "United States",
      image: "NorthAmerica/Los_Angeles.svg",
    },
    {
      location: "Torento",
      country: "Canada",
      image: "NorthAmerica/Toronto.svg",
    },
    {
      location: "Silicon Valley",
      country: "United States",
      image: "NorthAmerica/Silicon_Valley.svg",
    },
    {
      location: "New jersey",
      country: "United States",
      image: "NorthAmerica/New_Jersey.svg",
    },
    {
      location: "Dallas",
      country: "United States",
      image: "NorthAmerica/Dallas.svg",
    },
  ],
  europe:[
    {
      location: "Amestrdam",
      country: "Netherlands",
      image: "Europe/Amsterdam.svg",
    },
    {
      location: "London",
      country: "United Kingdom",
      image: "Europe/London.svg",
    },
    {
      location: "Frankfurt",
      country: "Germany",
      image: "Europe/Frankfurt.svg",
    },
    {
      location: "Paris",
      country: "France",
      image: "Europe/Paris.svg",
    },
  ],
  asia:[
    {
      location: "Tokyo",
      country: "Japan",
      image: "Asia/Tokyo.svg",
    },
    {
      location: "Seoul",
      country: "Korea,Republic of",
      image: "Asia/Seoul.svg",
    },
    {
      location: "Singapore",
      country: "Singapore",
      image: "Asia/Singapore.svg",
    },
  ],
  australia:[
    {
      location: "Sydney",
      country: "Australia",
      image: "Australia/Sydney.svg",
    },
  ],
};

export const serversConfig = [
  {
    ssd: "120 GB",
    memory: "8192MB",
    cpu: 2,
    bandwidth: "10TB",
    priceP_M: 60,
    priceP_H: 0.089,
  },
  {
    ssd: "2 X 120 GB",
    memory: 16384,
    cpu: 4,
    bandwidth: "20TB",
    priceP_M: 120,
    priceP_H: 0.179,
  },
  {
    ssd: "3 X 120 GB",
    memory: 24576,
    cpu: 6,
    bandwidth: "30TB",
    priceP_M: 180,
    priceP_H: 0.268,
  },
  {
    ssd: "4 X 120 GB",
    memory: "32768 MB",
    cpu: 8,
    bandwidth: "40TB",
    priceP_M: 240,
    priceP_H: 0.357,
  },
];

export const serverOSs = [
  {
    name: "Cent OS",
    image: "CentOS.svg",
  },
  {
    name: "Fedora Core OS",
    image: "Fedora_CoreOS.svg",
  },
  {
    name: "Debian",
    image: "Debian.svg",
  },
  {
    name: "Fedora",
    image: "Fedora.svg",
  },
  {
    name: "Ubunto",
    image: "Ubunto.svg",
  },
  {
    name: "Windows",
    image: "Windows.svg",
  },
];
