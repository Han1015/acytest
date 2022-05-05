import { useState } from "react";
import useForm from "../../hooks/useForm";
import "./style.scss";

const desc = [
  "With more than 15 years of experience covering both the FX and CFD markets, Alistair has extensive knowledge covering algorithmictrading, market analysis & an impressive educational background.",
  "As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.",
  "At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.",
];

const formDesc =
  "Please fill in the form below and you will be contacted by one of our professional business experts.";

export default function Register() {
  const [fields, setFields] = useForm({
    topic: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    authCode: "",
  });

  return (
    <div className="register">
      <div className="register-content">
        <div className="register-content-desc">
          <div className="register-content-desc-left">
            <h1 className="register-title">
              Meet Your Host - Alistair Schultz
            </h1>
            {desc.map((ele, index) => (
              <p key={index} className="register-desc">
                {ele}
              </p>
            ))}
          </div>
          <div className="register-content-desc-right">
            <iframe
              className="register-video"
              src="https://www.youtube.com/embed/1h947rFpWCc"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="register-content-form">
          <div className="register-content-form-content">
            <h1 className="register-title">Register for a Webinar now</h1>
            <p className="register-desc">{formDesc}</p>
            <form>
              <div className="form-element">
                <label>Topic</label>
                <select
                  name="topic"
                  id="topic"
                  onChange={setFields}
                  value={fields.topic}
                >
                  <option value="23/07/20 - Alistair's Favourite Chart Patterns You Can Apply to Your Trading">
                    23/07/20 - Alistair's Favourite Chart Patterns You Can Apply
                    to Your Trading
                  </option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="form-element">
                <label>First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={fields.firstName}
                  onChange={setFields}
                />
              </div>
              <div className="form-element">
                <label>Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={fields.lastName}
                  onChange={setFields}
                />
              </div>
              <div className="form-element">
                <label>Email</label>
                <input
                  id="email"
                  type="text"
                  value={fields.email}
                  onChange={setFields}
                />
              </div>
              <div className="form-element">
                <label>Phone</label>
                <input
                  id="phone"
                  type="text"
                  value={fields.phone}
                  onChange={setFields}
                />
              </div>
              <div className="form-element">
                <label>Mobile Authentication</label>
                <input
                  id="authCode"
                  type="text"
                  value={fields.authCode}
                  onChange={setFields}
                />
              </div>
              <input type="submit" value="Register" className="input submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
