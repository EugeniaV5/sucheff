import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  /* background-color: #e4e4e4; */
`;

export const Title = styled.h4`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #ff8d40;
`;

export const TitleWrapper = styled.div`
  padding: 10px;
  min-width: 332px;
`;

export const HotDealsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: -16px;
  margin-left: -16px;
  list-style: none;
`;

export const HotDealsListItem = styled.li`
  /* height: 265px; */
  /* height: 100%; */
  margin-top: 16px;
  margin-left: 16px;
  flex-basis: calc((100% - 32px) / 2);
`;

export const ItemImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ImageThumb = styled.div`
  width: 150px;
  height: 155px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  /* border: 10px solid green; */
`;

export const DishName = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #ff8d40;
`;

export const DishPrice = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #191c1d;
`;

export const NameWrapper = styled.div`
  padding: 10px;
`;
export const PriceWrapper = styled.div`
  padding: 10px 19px;
  text-align: end;
`;

export const WrapperNamePrice = styled.div`
  /* height: 100%; */
  width: 150px;
  min-height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: red;
`;
