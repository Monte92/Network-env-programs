import { useState } from "react";
import companyLogo from "../assets/logo-vamk.webp";
import "./ContactCard.css"

const ContactCard = ({ name, education, jobTitle, company, email, phoneNumber }) => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="businessCard">
      <img src={companyLogo} alt="Company Logo" />
      <h2 className="bc">{name}</h2>
      <p><strong>Education:</strong> {education}</p>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Phone:</strong> {phoneNumber}</p>

      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? "Hide Contact Details" : "Show Contact Details"}
      </button>

      {showEmail && <p><strong>Email:</strong> {email}</p>}
    </div>
  );
};

export default ContactCard;
