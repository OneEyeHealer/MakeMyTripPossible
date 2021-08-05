import { client, Customer, user, work } from "./ImgService";

const statsInfo = [
  { key: "OurAgent", title: "Our Agent", count: "30+", icon: work },
  {
    key: "YearOfExperience",
    title: "Year Of Experience",
    count: "2+",
    icon: user,
  },
  {
    key: "HappyCustomer",
    title: "Happy Customer",
    count: "150+",
    icon: Customer,
  },
  { key: "Tours", title: "Tours", count: "45+", icon: client },
];

export { statsInfo };
