import { useState } from 'react';
import Confetti from './Confetti';

export default function ManifestationApp() {
  const [name, setName] = useState(''); //tracks what user types
  const [submittedName, setSubmittedName] = useState(''); //stores the name after form submitted
  const [quote, setQuote] = useState(''); // holds the quotes
  const [showForm, setShowForm] = useState(true); //toggle the display input
  const [showConfetti, setShowConfetti] = useState(false); //toggles confetti

  //  quotes collection
  const wealthQuotes = [
    'Abundance flows freely into my life, and I am open to receiving it.',
    'Money comes to me easily and effortlessly.',
    'I am a money magnet, attracting wealth in expected and unexpected ways.',
    'My actions create constant prosperity.',
    'I release all resistance to abundance.',
    'Wealth constantly flows into my life.',
    'I am worthy of a prosperous life.',
    'My financial success is inevitable.',
    'I am aligned with the energy of abundance.',
    'I deserve wealth and I accept it now.',
  ];

  const positivityQuotes = [
    'I release all negative energy that no longer serves me.',
    'I choose to see opportunities in every challenge.',
    'I am letting go of all fears and doubts.',
    'My mind is clear, my heart is open.',
    'I am free from limiting beliefs about money and success.',
    'I release all scarcity mindsets and embrace abundance.',
    'Every day I am becoming more aligned with my highest self.',
    'I transform negative thoughts into positive energy.',
    'I am worthy of all the good that comes to me.',
    'I release the past and welcome new beginnings.',
  ];

  // Function to trigger confetti it turns on for 5 sec then goes off and u can change the amount of time
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  // Function to get a random quote it put both sets of quote together and picks thur them
  const getRandomQuote = () => {
    const allQuotes = [...wealthQuotes, ...positivityQuotes];
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    return allQuotes[randomIndex];
  };

  // Handle name submission prevent defualt behavor and if name is valid its saves name and generates a random quote it hides the form and triggers the confetti
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmittedName(name);
      setName('');
      setQuote(getRandomQuote());
      setShowForm(false);
      setTimeout(triggerConfetti, 300);
    }
  };

  // Get a new quote and plays confetti
  const handleNewQuote = () => {
    setQuote(getRandomQuote());
    triggerConfetti();
  };

  // this is Title and conditional rendering, if showForm is true show input form, otherwise show the name, quote and buttons to generate a new quote. and reset the form and enter a new name
  return (
    <div className="app-container">
      <h1 className="main-title">
        <span className="title-text">You Want It? Ask for It!</span>
      </h1>

      {showConfetti && <Confetti />}

      <div className="manifestation-card">
        {showForm ? (
          <div className="form-container">
            <h2 className="section-title">Say it Loud! Say is Proud!</h2>
            <p className="section-action">
              {' '}
              "Your thoughts become things, so choose the good ones.
              Manifestation is the art of co-creating with the universe. Your
              whole life is a manifestation of the thoughts that go on in your
              head.”
            </p>
            <p className="section-description">
              Enter your name to receive a powerful manifestation quote!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="name-input"
                required
              />
              <button type="submit" className="submit-button">
                Receive My Manifestation
              </button>
            </form>
          </div>
        ) : (
          <div className="quote-container">
            <h2 className="greeting">{submittedName},</h2>
            <p className="greeting-saying">
              CLAIM IT NOW! <br /> It's already your's!
            </p>
            <div className="quote-box">
              <p className="quote-text">"{quote}"</p>
            </div>
            <button onClick={handleNewQuote} className="generate-button">
              Generate New Quote
            </button>
            <button onClick={() => setShowForm(true)} className="reset-button">
              Enter New Name
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
