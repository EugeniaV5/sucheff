import {
  Section,
  Container,
  CopyRights,
  Designer,
  Stan,
} from './Credits.styled';

const Credits = () => {
  return (
    <Section>
      <Container>
        <CopyRights>&copy;2022 SuCheff Усі права захищені</CopyRights>
        <CopyRights>
          UI/UX Design by
          <Designer>
            <Stan> Stan</Stan>Shap
          </Designer>
        </CopyRights>
        <CopyRights>Fullstack Engineering by VE&amp;V Dev</CopyRights>
      </Container>
    </Section>
  );
};

export default Credits;
