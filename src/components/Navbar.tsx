import React from 'react';
export const Navbar: React.FC = () =>{
    return (
        <nav>
        <div className="nav-wrapper  blue darken-3 pd-nav">
          <a href="/" className="brand-logo ">To do </a>
          <ul  className="right hide-on-med-and-down">
            <li><a href="/">Список дел</a></li>
            <li><a href="/">Информация</a></li>
          </ul>
        </div>
      </nav>
  );
}