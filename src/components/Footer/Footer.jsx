import sprite from '../../assets/sprite.svg';

import {
  Section,
  Container,
  LogoWrapper,
  LogoLink,
  LogoIcon,
  LogoText,
  NavList,
  NavItem,
  NavLink,
  Address,
  AddressItem,
  AddressLink,
  SocialMedia,
  InstaLogo,
  FacebookLogo,
  SocialMediaList,
  SocialMediaItem,
  SocialMediaText,
} from './Footer.styled';

const Footer = () => {
  return (
    <div>
      <Section>
        <Container>
          <LogoWrapper>
            <LogoLink href="/">
              <LogoIcon>
                <use href={`${sprite}#Logo-without-text`}></use>
              </LogoIcon>
              <LogoText>
                <use href={`${sprite}#icon-Main-Logo-SUCHEFF-Text-Small`}></use>
              </LogoText>
            </LogoLink>
          </LogoWrapper>

          <NavList>
            <NavItem>
              <NavLink href="/">Про нас</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Відгуки</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Доставка і оплата</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Акції та новинки</NavLink>
            </NavItem>
          </NavList>
          <Address>
            <ul>
              <AddressItem>
                <AddressLink
                  href="https://goo.gl/maps/v1taB1FhQQHAq2sr7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  м. Дніпро, вул. Панікахи, 17
                </AddressLink>
                <AddressLink href="tel:+380502050055">
                  +38 (050) 20 500 55
                </AddressLink>
              </AddressItem>
              <AddressItem>
                <AddressLink
                  href="https://g.page/sucheff?share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  м. Дніпро, С.Хороброго, 24
                </AddressLink>
                <AddressLink href="tel:+380502050055">
                  +38 (050) 20 500 55
                </AddressLink>
              </AddressItem>
              <AddressItem>
                <AddressLink
                  href="https://goo.gl/maps/Xpupv2ngtNmoSaK86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  м. Дніпро, вул. Роторна, 23
                </AddressLink>
                <AddressLink href="tel:+380680688166">
                  +38 (068) 06 881 66
                </AddressLink>
              </AddressItem>
              <AddressItem>
                <AddressLink href="mailto:info@sucheff.com.ua">
                  info@sucheff.com.ua
                </AddressLink>
              </AddressItem>
            </ul>
          </Address>
          <SocialMedia>
            <SocialMediaList>
              <SocialMediaItem>
                <a
                  href="https://www.instagram.com/sucheff_dp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstaLogo>
                    <use href={`${sprite}#Instagram`}></use>
                  </InstaLogo>
                </a>
              </SocialMediaItem>
              <SocialMediaItem>
                <a
                  href="https://www.facebook.com/sucheffdp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookLogo>
                    <use href={`${sprite}#Facebook`}></use>
                  </FacebookLogo>
                </a>
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMediaText>
                  Щомісяця проводяться різні привабливі акції. Підписуйтесь на
                  наші соціальні мережі!
                </SocialMediaText>
              </SocialMediaItem>
            </SocialMediaList>
          </SocialMedia>
        </Container>
      </Section>
    </div>
  );
};

export default Footer;
