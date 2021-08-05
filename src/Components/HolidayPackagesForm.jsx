import React, { useState } from "react";
import { toast } from "react-toastify";

function HolidayPackagesForm(props) {
  const [data, setdata] = useState({
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
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          [
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
      });
      await response.json();
      notify(
        "Your Response has been submitted. We will contact you Shortly !!"
      );
      setdata({
        ...data,
        name: "",
        phone: "",
        email: "",
        place: "",
        city: "",
        destination: "",
        ondate: "",
        members: "",
      });
    } catch (error) {}
  };
  const notify = (message) => toast.success(`${message}`);
  return (
    <>
      <section className="about py-lg-5 py-md-5 py-5">
        <div className="container">
          <div className="inner-sec-w3pvt py-lg-5 py-3">
            <form onSubmit={handleSubmit} className="w-50 m-auto">
              <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5">
                Holiday Pacage Form
              </h3>
              {/* name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleChange}
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
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="destination">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  name="destination"
                  value={destination}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ondate">Preferred Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="ondate"
                  value={ondate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="members">Members:</label>
                <input
                  type="text"
                  className="form-control"
                  name="members"
                  value={members}
                  onChange={handleChange}
                />
              </div>
              <div className="my-3">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default HolidayPackagesForm;
