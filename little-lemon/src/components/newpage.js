import React, { useState } from 'react';
import '../components/reserve.css';
import { Footer } from './Footer';

export const Newpage = () => {
  // Define state variables for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [persons, setPersons] = useState('');
  const [occasion, setOccasion] = useState('');
  const [place, setPlace] = useState('');
  const [note, setNote] = useState('');

  // Define state variable for available times
  // eslint-disable-next-line no-unused-vars
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  return (
    <>
      <section className="reserve-section">
        <div className="reserve-card">
          <div className="reserve-header">
            <h2>Reserve a Table</h2>
            <h3>For more inquiries and assistance, please call:</h3>
            <p>+233 241 379 134</p>
            <hr />
          </div>
          <div className="reserve-form">
            <form>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              
              <label htmlFor="res-time">Choose time:</label>
              <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option>- Time -</option>
                {availableTimes.map((timeOption, index) => (
                  <option key={index}>{timeOption}</option>
                ))}
              </select>
              
              <label htmlFor="persons">Number of Guests:</label>
              <input type="number" id="persons" name="persons" value={persons} onChange={(e) => setPersons(e.target.value)} min="1" required />
              
              <label htmlFor="occasion">Select Occasion:</label>
              <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">- Select Occasion -</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="celebration">Marriage Ceremony</option>
              </select>
              
              <label htmlFor="place">Place of Choice:</label>
              <select id="place" name="place" value={place} onChange={(e) => setPlace(e.target.value)} required>
                <option value="">- Place of Choice -</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
              </select>
              
              <label htmlFor="note">Note:</label>
              <textarea id="note" name="note" value={note} onChange={(e) => setNote(e.target.value)} rows="4"></textarea>
              
              <button data-testid='submit' type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
