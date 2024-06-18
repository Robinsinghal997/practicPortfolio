// import { getImageUrl } from "../../utils";
import "./Contact.css";
import { useState } from "react";
import data from "../../Data/contact.json";
import { getImageUrl } from "../../utils";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7142449c-b018-4158-868a-022e46a5464d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" id="contacts">
      <div className="contact-col">
        <h3>
          Send me the message{" "}
          <img src={getImageUrl("contact/msg-icon.png")} alt="Message_Icon" />
        </h3>
        <p>{data.description}</p>
        <ul>
          {data.contact.map((item, id) => (
            <li key={id}>
              <img src={getImageUrl(item.imageurl)} alt="EmailIcon" />{" "}
              {item.url}
            </li>
          ))}
        </ul>
        <div className="thankyou">
          <p>Thank you for visiting my portfolio!</p>
        </div>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your name "
            required
          />
          <label> Phone No</label>
          <input
            type="tell"
            name="phone"
            placeholder="Enter Your Mobile no"
            required
          />
          <label> Write your Message here </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Message"
            required
          ></textarea>
          <button type="submit" className="btn darkbtn">
            {" "}
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
