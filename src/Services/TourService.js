import TourImg from "../Images/MYTP-xyz-tour.jpg";
import himachal from "../Images/JIBHI_HIMACHAL_PRADES.jpeg";
import kasola from "../Images/KASOL_&_Kheerganga_HIMACHAL_PRADESH.jpeg";
const Tours = [
  {
    key: "tour1",
    src: himachal,
    title: "JIBHI, HIMACHAL PRADESH",
    rate: 4.9,
    place: ["tripholiday", "Treeking", "camping"],
    description:
      "Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.",
    day: 3,
    night: 2,
    amount: 8500,
    discount: 35,
    date: "On August 10, 2021",
    overview: `
  Enjoy the untouch beauty of the mountains With makeyourtrippossible😎⛰️
      
  Inclusions:
      👉Delhi - Jibhi - Delhi Transfers by Ac tempo traveller
      👉 Accomodation in camps for 2N. (2N Jibhi)
      👉 Meals(3 Breakfast, 2 Lunch, 2 Dinner and Snacks)
      👉Team Leader
      👉 Trek Guide
      👉 Bonfire
      👉 5 KmTrekk towards serolsar lake
      👉 Jalori Pass
      👉 Jibhi Waterfall
      `,
    days: [
      {
        key: "days1",
        day: "Day 0",
        title: "Delhi to Jibhi",
        brief:
          "Start your journey in the evening by tempo traveller. Overnight Journey to Jibhi.",
      },
      {
        key: "days2",
        day: "Day 1",
        title: "Arrive Jibhi at 11 Am (approax)",
        brief:
          "In the morning you will arrive Jibhi.Check-In camp have a welcome drink and Beeakfast and have some rest. After relaxing your legs, Do visit the Jibhi Waterfall another scenic place to see. Have dinner at Camp and enjoy the born fire and music. ",
      },
      {
        key: "days3",
        day: "Day 2",
        title: "Trekk towrds Serolsar Lake",
        brief:
          "After having breakfast, head towards Jaloripass approax 18 Km Drvie (45 min ). After reaching Jarolipass (approax 10,000 ft above sea level) trekk towards serolsar lake. Serolsar lake trekk is of around 5Km narrow trails heading towards sacred lake, approx 2 hour journey. In which you will pass through thick dense forest. After reaching serolsar, enjoy the mountains vies, beautiful forest filled with golder oak trees, spend some time their and have some snacks to eat from locals. Head back to Jarolipass and back to Jibhi. By evening back to camp. Over night stay.",
      },
      {
        key: "days4",
        day: "Day 3",
        title: "Jibhi to Delhi",
        brief:
          "Enjoy your time near river bed, have breakfast by 11 am. Head back towards Delhi with never ending memories.",
      },
    ],
  },
  {
    key: "tour2",
    src: kasola,
    title: "KASOL  & Kheerganga,  HIMACHAL PRADESH",
    rate: 4.5,
    place: ["Tripholiday", "State", "Camping "],
    description: "",
    day: 3,
    night: 2,
    amount: 8500,
    discount: 35,
    date: "",
    overview: `
  Enjoy the Scenic beauty of the mountains with makeyourtrippossible⛰️

  Inclusions:
      👉Delhi - Kasol - Delhi Transfers by Ac tempo traveller
      👉 Accomodation in camps for 2N. (1N Kasol & 1N Kheerganga)
      👉 Meals(2 Breakfast, 2 Dinner and Snacks)
      👉Team Leader
      👉 Trek Guide
      👉 Bonfire
      👉 11 Km Trekk (Kasol - Kheerganga)
      `,
    days: [
      {
        key: "days1",
        day: "Day 0",
        title: "Delhi to Kheerganga",
        brief:
          "Start your journey in the evening at 8:00 P.M by tempo traveller. Overnight journey to Kasol.",
      },
      {
        key: "days2",
        day: "Day 1",
        title: "Arrive Kasol at 11 Am (approax)",
        brief: `
      Reach Kasol & Check into the Camp. 
      • Enjoy the Welcome drink. 
      • Freshen up, self-exploration of Kasol, Riverside walk.
      • Go and explore Chalal village crossing the famous Kasol Bridge to see the beauty in Parvati Valley. 
      • Have tea & snacks in the evening. 
      • Camping under stars followed by bonfire dinner and sleep in camps alongside Parvati river
      `,
      },
      {
        key: "days3",
        day: "Day 2",
        title: "Kasol - Barshaini - Kheerganga (11 Km Trekk)",
        brief: `
      Wake up early in the morning. 
      • After having breakfast depart for Barshaini. 
      • Arrive at Barshaini, start your trek to Kheerganga.
      • Enjoy your walk in the heart of beautiful Parvati Valley.
      • Explore Mahadev Temple at the top of the Parvati valley, bath with hot spring water. 
      • Camping under stars followed by bonfire dinner and sleep.
      `,
      },
      {
        key: "days4",
        day: "Day 3",
        title: "Kheerganga – Barshaini - Kasol – Delhi",
        brief: `
      • Wake up early in the morning and have breakfast. 
      • You can explore the Kasol market before we start our journey back to Delhi
      `,
      },
    ],
  },
  {
    key: "tour3",
    src: TourImg,
    title: "Goa",
    rate: 4,
    place: ["City", "state", "Country"],
    description:
      "Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.",
    day: 2,
    night: 3,
    amount: 1000,
    discount: 10,
    date: "On August 5, 2021",
    overview:
      "Welcome to a Tour 3 tropical paradise called Goa where Toshali Goan Village Beach Resort welcomes you with its world class hospitality. Set near Candolim beach, North Goa, Toshali Goan Village Beach Resort is a lavish beach resort that meets your both traditional and modern hospitality. Get the most rejuvenating retreat at hotel that pamper you the most with well appointed accommodations and superior services within your permissible budget. Toshali Goan Village Beach Resort has a total of 28 well furnished rooms. The resort is all the state-of-the-art facilities to pamper you on the vacation.",
    days: [
      { key: "days1", day: "Day 1", title: "Title 1", brief: "" },
      { key: "days2", day: "Day 2", title: "Title 1", brief: "" },
      { key: "days3", day: "Day 3", title: "Title 1", brief: "" },
      { key: "days4", day: "Day 4", title: "Title 1", brief: "" },
    ],
  },
];

export { Tours };
