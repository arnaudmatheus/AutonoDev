import React from 'react';
import { Link } from 'react-router-dom';
import topBarIcon from '../../images/topBarIcon.svg';
import './styles.scss';

const TopBar = () => (
  <header className="page-header">
    <div className="top-bar-container">
    <div className="header-text">
        <Link to="/fav">
          <strong>Favoritos</strong>
        </Link>
      </div>

      <div className="header-text">
        <Link to="/search">
          <strong>Pesquisa</strong>
        </Link>
      </div>
    </div>
  </header>
);

export default TopBar;