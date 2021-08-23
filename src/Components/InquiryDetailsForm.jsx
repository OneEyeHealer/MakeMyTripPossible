import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";
import { InquiryFormData } from "../Services/ContactService";
import {
  bus as Bus,
  car as Car,
  hotel as Hotel,
  group as Group,
  holiday as Holiday,
  flight as Flight,
} from "../Services/ImgService";

function InquiryDetialsForm() {
  const [isBus, setIsBus] = useState(false);
  const [isCar, setIsCar] = useState(false);
  const [isHotel, setIsHotel] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isHoliday, setIsHoliday] = useState(false);
  const [isFlight, setIsFlight] = useState(false);
  const [data, setdata] = useState({
    bus: isBus,
    car: "",
    hotel: "",
    group: "",
    holiday: "",
    flight: "",
    name: "",
    phone: "",
    email: "",
    place: "",
    city: "",
    destination: "",
    ondate: "",
    members: "",
  });

  const { name, phone, email, place, city, destination, ondate, members } =
    data;

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
            [
              isBus,
              isCar,
              isHotel,
              isGroup,
              isHoliday,
              isFlight,
              name,
              phone,
              email,
              place,
              city,
              destination,
              ondate,
              members,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      notify(
        "Your Response has been submitted. We will contact you Shortly !!"
      );
      setdata({
        ...data,
        bus: "",
        car: "",
        hotel: "",
        group: "",
        holiday: "",
        flight: "",
        name: "",
        phone: "",
        email: "",
        place: "",
        city: "",
        destination: "",
        ondate: "",
        members: "",
      });
      setIsBus(false);
      setIsCar(false);
      setIsHotel(false);
      setIsGroup(false);
      setIsHoliday(false);
      setIsFlight(false);
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
              <div className="row">
                <div className="col-2">
                  <div className="form-group" data-tip="Bus Service">
                    <label htmlFor="bus">
                      <i className={Bus}></i>
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="bus"
                      checked={isBus}
                      value={!isBus}
                      onChange={() => setIsBus(!isBus)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-group" data-tip="Car Service">
                    <label htmlFor="car">
                      <i className={Car}></i>
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="car"
                      checked={isCar}
                      value={!isCar}
                      onChange={() => setIsCar(!isCar)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-group" data-tip="Hotel Service">
                    <label htmlFor="hotel">
                      <i className={Hotel}></i>
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="hotel"
                      checked={isHotel}
                      value={!isHotel}
                      onChange={() => setIsHotel(!isHotel)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-group" data-tip="Group Service">
                    <label htmlFor="group">
                      <i className={Group}></i>
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="group"
                      checked={isGroup}
                      value={!isGroup}
                      onChange={() => setIsGroup(!isGroup)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-group" data-tip="Holiday Service">
                    <label htmlFor="holiday">
                      <i className={Holiday}></i>
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="holiday"
                      checked={isHoliday}
                      value={!isHoliday}
                      onChange={() => setIsHoliday(!isHoliday)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-group" data-tip="Flight Service">
                    <label htmlFor="flight">
                      <i className={Flight}></i>
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="flight"
                      checked={isFlight}
                      value={!isFlight}
                      onChange={() => setIsFlight(!isFlight)}
                    />
                  </div>
                </div>
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
                <label htmlFor="place">Place:</label>
                <input
                  type="text"
                  className="form-control"
                  name="place"
                  value={place}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="destination">Destination:</label>
                <input
                  type="text"
                  className="form-control"
                  name="destination"
                  value={destination}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ondate">
                  Preferred Date:{" "}
                  <span className="text-danger">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="ondate"
                  value={ondate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="members">
                  Members:
                  <span className="text-danger">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="members"
                  value={members}
                  onChange={handleChange}
                  required
                />
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

export default InquiryDetialsForm;
