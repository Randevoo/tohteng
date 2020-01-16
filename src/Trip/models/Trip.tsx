interface Trip {
  imgUrls: string[];
  title: string;
  type: string;
  // To be changed to actual location object
  location: string;
  tripDays: TripDay[];
}

interface TripDay {
  img: string;
  description: string;
  dayNumber: number;
  cost: number;
}

export default Trip;
