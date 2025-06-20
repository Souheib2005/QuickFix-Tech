import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <header>
<img
  src={`${import.meta.env.BASE_URL}quickfix.png`}
  alt="QuickFix Tech Logo"
  style={{ height: "40px", width: "auto", marginRight: "10px" }}
/>

        <nav>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <Link to="/book">Book</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>FAST TECH REPAIRS START HERE</h2>
        <p>More than just repairs — it's convenience</p>
        <Link to="/book" className="book-btn">Book Now</Link>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <img src={`${import.meta.env.BASE_URL}phone.jpg`} alt="Phone" />
            <h3>Phone Repair</h3>
            <p>Cracked screens, battery swaps</p>
            <p>$50</p>
          </div>
          <div className="card">
            <img src={`${import.meta.env.BASE_URL}tablet.jpg`} alt="Tablet" />
            <h3>Tablet Repair</h3>
            <p>iPads, Android tablets</p>
            <p>$60</p>
          </div>
          <div className="card">
            <img src={`${import.meta.env.BASE_URL}laptop.jpg`} alt="Laptop" />
            <h3>Laptop Repair</h3>
            <p>Screen & keyboard fixes</p>
            <p>$80</p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>120 Sparks St, Ottawa, ON</p>
            <p>Email: support@quickfixtech.ca</p>
            <p>Phone: (613) 555-1234</p>
          </div>

          <div className="footer-section hours">
            <h3>Hours</h3>
            <p>Mon–Fri: 9am – 6pm</p>
            <p>Sat: 10am – 4pm</p>
            <p>Sun: Closed</p>
          </div>

          <div className="footer-section about">
            <h3>About Us</h3>
            <p>QuickFix Tech offers reliable device repair services for phones, tablets, and laptops. Fast service. </p>
            <p style={{ marginTop: "1em", fontStyle: "italic" }}>This website was created by Souheib Al-ahdal.</p>
          </div>
        </div>
        <p style={{ marginTop: "2em", textAlign: "center" }}>&copy; 2025 QuickFix Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
