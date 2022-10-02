import sprite from '../../assets/sprite.svg';

import Navigation from '../Navigation/Navigation';
import { Section, Container } from './Header.styled';

const Header = () => {
  return (
    <Section>
      <Navigation />
      <Container class="header-container container">
        <nav class="header-menu">
          <a href="/" class="logo-link">
            <svg class="logo__icon">
              <use href={`${sprite}#icon-Main-Logo-SUCHEFF-Text-Small`}></use>
            </svg>
          </a>

          <ul class="header-menu-list">
            <li class="header-menu-list__item">
              <button class="header-button">
                <svg class="header-icon">
                  <use href={`${sprite}#icon-Search-Icon-Options`}></use>
                </svg>
              </button>
            </li>
            <li class="header-menu-list__item">
              <button class="header-button">
                <svg class="header-icon cart-inactive">
                  <use href={`${sprite}#icon-Cart-for-Mobile`}></use>
                </svg>
              </button>
            </li>
            <li class="header-menu-list__item">
              <button class="header-button">
                <svg class="header-icon">
                  <use href={`${sprite}#icon-Menu-and-Closed-1`}></use>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </Section>
  );
};

export default Header;
