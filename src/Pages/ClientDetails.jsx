import React from "react";
import ShortInquiryDetailsForm from "../Components/ShortInquiryDetailsForm";

const ClientDetails = (props, { destination }) => {
  return (
    <>
      <ShortInquiryDetailsForm place={destination} />
    </>
  );
};

export default ClientDetails;
