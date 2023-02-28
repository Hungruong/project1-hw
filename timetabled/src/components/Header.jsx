import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header>
        <h1 data-text="Animals">
          <span class="glitch1" data-text="Animals" aria-hidden></span>
          <span class="glitch2" data-text="Animals" aria-hidden></span>
          Animals
        </h1>
      </header>
    </div>
  );
};

export default Header;