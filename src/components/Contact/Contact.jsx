import React from "react";
import "./Contact.css";
import { Grid, Grid2, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  const contacts = [
    { name: "Contact Number", value: "+91-8462009901" },
    { name: "Email", value: "parnerkarvipul@gmail.com" },
    { name: "Medium", value: "https://medium.com/@parnerkarvipul" },
    {
      name: "LinkedIn",
      value: "https://www.linkedin.com/in/vipul-parnerkar-0438b2b6/",
    },
  ];
  return (
    <div className="contact" id="contacts">
      <h1>Contact Me</h1>
      <Grid2 container spacing={7}>
        {contacts.map((contact) => {
          return (
            <Grid2
              key={contact.name}
              size={{ xs: 6, md: 3 }}
              textAlign={"center"}
            >
              <Link className="link-color" href={contact.value}>
                {contact.name === "Contact Number" ? (
                  <LocalPhoneIcon className="email" />
                ) : contact.name === "Email" ? (
                  <EmailIcon className="email" />
                ) : contact.name === "Medium" ? (
                  <RateReviewIcon className="email" />
                ) : contact.name === "LinkedIn" ? (
                  <LinkedInIcon className="email" />
                ) : (
                  <></>
                )}
                <br />
                <br />
                <div className="values">
                  <div>{contact.name}</div>
                </div>
              </Link>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
};

export default Contact;
