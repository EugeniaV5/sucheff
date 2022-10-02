import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${props => props.theme.colors.bgFooterDarkColor};
`;

export const Container = styled.div`
  text-align: center;
  width: 375px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;

  font-family: 'Libre Franklin', sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.15;
`;

export const CopyRights = styled.p`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Designer = styled.span`
  text-transform: uppercase;
`;

export const Stan = styled.span`
  font-weight: 500;
`;
