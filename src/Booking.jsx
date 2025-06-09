function Booking() {
  return (
    <div className="booking-form">
      <h2>Book a Repair</h2>
      <form>
        <label>Full Name (required)</label>
        <input type="text" required placeholder="John Doe" />

        <label>Email (optional)</label>
        <input type="email" placeholder="john@example.com" />

        <label>Phone Number (optional)</label>
        <input type="tel" placeholder="(613) 555-1234" />

        <label>Type of Repair</label>
        <select>
          <option>Phone Repair</option>
          <option>Tablet Repair</option>
          <option>Laptop Repair</option>
        </select>

        <label>Date</label>
        <input type="date" />

        <label>Time</label>
        <select>
          <option>10:00 AM</option>
          <option>12:00 PM</option>
          <option>2:00 PM</option>
          <option>4:00 PM</option>
        </select>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
