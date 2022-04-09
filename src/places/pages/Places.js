// import React, { useContext, useEffect, useState } from "react";
// import { dataContext } from "./../../shared/context/data-context";
// import Cards from "../../shared/components/UIElements/Cards";
// import Contact from "../../shared/components/UIElements/Contact";
// import TripSection from "../../shared/components/UIElements/TripSection";
// import TripIcon from "../components/TripIcon";
// import PlaceBanner from "./../components/PlaceBanner";
// import { useParams } from "react-router-dom";
// const Places = (props) => {
//   const tripTitle = useParams().tripTitle;
//   const { allPlaces: data } = useContext(dataContext);
//   // const [trip, setTrip] = useState({});
//   // useEffect(() => {
//   //   setTrip(data.filter((e) => e.to === tripTitle)[0]); // for [{}] => {}
//   // }, [tripTitle]);
//   // console.log(tripTitle);

//   return (
//     <>
//       {/* <PlaceBanner
//         url={trip.bannerUrl}
//         path={trip.to}
//         title={trip.heading}
//         {...props}
//       /> */}
//       <div className="container mt-5 heading-style">
//         <h2 className="text-center">Catagory</h2>
//         <Cards
//           PriceCatagory
//           cards={data.filter((card) => card.topCategoryTrip)}
//         />
//       </div>
//       <div className="container mt-5 heading-style">
//         <h2 className="text-center">Weekend Trip</h2>
//         <Cards
//           DetailCatagory
//           cards={data.filter((card) => card.topWeekendTrip)}
//         />
//       </div>
//       {/* <div className="weekend-details">
//         <div className="container trip-content">
//           <div className="row">
//             <div className="col-sm-12 col-md-9 col-lg-9">
//               <TripIcon trip={trip} />
//               <TripSection title="Description" trip={trip} />
//             </div>
//             <div className="col-sm-12 col-md-3 col-lg-3">
//               <Contact price={trip.price} destination={trip.to} />
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Places;
