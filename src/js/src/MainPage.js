import React, { useState } from 'react';

function MainPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj możesz dodać logikę przetwarzania formularza lub wysyłania danych
    console.log('Email submitted:', email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <h1>Resume portal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MainPage;
