import React from "react";
import "./css/factory.css";
function OurFactory() {
  return (
    <div className="factory-container">
      <h2 className="title" style={{}}>
        OUR FACTORY
      </h2>
      <div className="content">
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3944921327!2d110.40278431744385!3d-7.762332122126224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a582c0af37b65%3A0x4f882b716b7de74e!2sPabrik%20lor!5e0!3m2!1sid!2sid!4v1615976904123!5m2!1sid!2sid"
            width="80%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="details">
          <div className="address">
            <h3>Our Address</h3>
            <p>
              894W+V3R, Wonosobo, Sardonoharjo, Kec. Ngaglik, Kabupaten Sleman,
              Daerah Istimewa Yogyakarta
            </p>
          </div>
          <div className="working-hours">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
      <a href="https://wa.me/6285213771747" className="whatsapp-link"></a>
    </div>
  );
}

export default OurFactory;
