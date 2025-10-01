import React, { useState } from "react";
import "./contact.css";
import { useEffect  } from "react";
import Navbar from "../../components/Navbar";    
import Faq from "../../features/Faq";
export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
          useEffect(() => {
              document.title = "Lurofexi - Contact ";
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", form);
  }

  return (
    <>
    <div className ="Contact-page">
    <Navbar/>
    <div className="contact-image">
    <div className="contact-container" >
      <h5 className="small-heading">(LET’S CONTACT US)</h5>
      <h1 className="big-heading">
        We’re Always Here to <br />
        Help, Contact Us Today
      </h1>

      <form className="contact-form" onSubmit={handleSubmit}  style={{background:'none', border:'none'}}>
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={form.lastName}
            onChange={handleChange}
        required
          />
        </div>

        <div className="row">
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={form.email}
            onChange={handleChange}
                        required

          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            value={form.phone}
            onChange={handleChange}
                        required

          />
        </div>

        <textarea
          name="message"
          placeholder="Write Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
                      required

        ></textarea>

       <button
  type="submit"
  className="send-btn"
  onClick={(e) => {
    e.preventDefault(); // prevent form from reloading page
    if (form.message.trim() !== "") {
      alert("Message sent ✅");
    } else {
      alert("Please write a message before sending ❌");
    }
  }}
>
  Send Message
    </button>

      </form>
    </div>  

    <div>
        <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678b67c2a2ef4a13e6b33d58_Contact%20Us%20Image.jpg" alt="" />
    </div>
    </div>

        {/* map */}
           <div style={{ width: "100%", height: "80vh", marginTop:'100px' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126848.62283902744!2d3.3078733213934217!3d6.548376414693692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4f55ccf2f4d%3A0x93e812d3e7d0c75!2sLagos!5e0!3m2!1sen!2sng!4v1696171820000!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>


        {/* faq */}
        <div className="fAQ-img">
            <div>
                <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678b6f2c808c841f45169354_Faq%20Image.jpg" alt="" />
            </div>

            <div><Faq /></div>
        </div>
    </div>
    </>
  );
}
