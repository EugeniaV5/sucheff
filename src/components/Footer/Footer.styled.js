import styled from 'styled-components';

export const Section = styled.footer`
  padding-top: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(12)};

  background-color: ${props => props.theme.colors.bgFooterLightColor};
`;

export const Container = styled.div`
  text-align: center;
  width: 375px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 23px;
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.svg`
  width: 64px;
  height: 64px;
  margin-right: 5px;
`;

export const LogoText = styled.svg`
  width: 146px;
  height: 23px;
`;

export const NavList = styled.ul`
  margin-bottom: 38px;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const NavLink = styled.a`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 18px;
  line-height: 1.38;
  font-weight: 400;
  color: ${props => props.theme.colors.darkTextColor};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accentColor};
  }
`;

export const Address = styled.address`
  margin-bottom: 28px;

  font-family: 'Libre Franklin', sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.15;
`;

export const AddressItem = styled.li`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accentColor};
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:last-child {
    justify-content: end;
  }
`;

export const AddressLink = styled.a`
  color: ${props => props.theme.colors.darkTextColor};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accentColor};
  }
`;

export const SocialMedia = styled.div`
  padding: 15px;

  background-color: ${props => props.theme.colors.bgFooterDarkColor};
  border-radius: 30px;
`;

export const InstaLogo = styled.svg`
  width: 35px;
  height: 35px;
  fill: #f1000b;

  display: block;
`;

export const FacebookLogo = styled.svg`
  width: 35px;
  height: 35px;
  display: block;
`;

export const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialMediaItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const SocialMediaText = styled.p`
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.15;

  text-align: start;
  color: ${props => props.theme.colors.darkTextColor};
`;
