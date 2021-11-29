import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";
import { InquiryFormData } from "../Services/ContactService";
import { destinationOption } from "../Services/DestinationService";

function ShortInquery({ place }) {
  const [data, setdata] = useState({
    name: "",
    phone: "",
    email: "",
    destination: place,
  });

  const { name, phone, email, destination } = data;

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/mytp/google_sheets/qgcJUNOfTDWzEnOT?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, phone, email, destination, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      notify(
        "Your Response has been submitted. We will contact you Shortly !!"
      );
      setdata({
        ...data,
        name: "",
        phone: "",
        email: "",
        destination: "",
      });
    } catch (error) {}
  };
  const notify = (message) => toast.success(`${message}`);
  return (
    <>
      <ReactTooltip />
      <section className="about py-lg-5 py-md-5 py-5 contact-form">
        <div className="container">
          <div className="inner-sec-w3pvt py-lg-5 py-3">
            <form onSubmit={handleSubmit} className="w-75 m-auto">
              <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5">
                {InquiryFormData.title}
              </h3>
              <div className="my-3">
                <sup className="text-danger">*</sup>
                required fields
              </div>

              <div className="form-group">
                <label htmlFor="name">
                  Name:
                  <span className="text-danger">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Phone:
                  <span className="text-danger">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email:
                  <span className="text-danger">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="destination">Destination:</label>
                <select
                  type="text"
                  className="form-control"
                  name="destination"
                  value={place}
                  onChange={handleChange}
                >
                  <option value="">--Select the destination--</option>
                  {destinationOption.map((option) => (
                    <option key={option.key} value={option.service}>
                      {option.service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="my-3">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-submit"
                />
              </div>
              <p className="mb-5 text-dark">
                <b>Note:</b> {InquiryFormData.note} <br />
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShortInquery;
