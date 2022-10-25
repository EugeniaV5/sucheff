import {
  Wrapper,
  Title,
  TitleWrapper,
  HotDealsList,
  HotDealsListItem,
  ItemImage,
  ImageThumb,
  DishName,
  NameWrapper,
  PriceWrapper,
  DishPrice,
  WrapperNamePrice,
} from './HotDeals.styled';

import products from '../dataBase/products.json';
console.log(products);

const hotDeals = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Hot deals</Title>
      </TitleWrapper>
      <HotDealsList>
        {products.slice(0, 8).map(el => {
          return (
            <HotDealsListItem key={el.id}>
              <ImageThumb>
                <ItemImage src={el.URL} alt="" />
              </ImageThumb>
              <WrapperNamePrice>
                <NameWrapper>
                  <DishName>{el.name}</DishName>
                </NameWrapper>
                <PriceWrapper>
                  <DishPrice>
                    {`${el.price}`}
                    {'\u20B4'}
                  </DishPrice>
                </PriceWrapper>
              </WrapperNamePrice>
            </HotDealsListItem>
          );
        })}
      </HotDealsList>

      {/* <HotDealsList>
        <HotDealsListItem>
          <a href="/">1</a>
        </HotDealsListItem>
        <HotDealsListItem>
          <a href="/">2</a>
        </HotDealsListItem>
        <HotDealsListItem>
          <a href="/">3</a>
        </HotDealsListItem>
        <HotDealsListItem>
          <a href="/">4</a>
        </HotDealsListItem>
        <HotDealsListItem>
          <a href="/">5</a>
        </HotDealsListItem>
        <HotDealsListItem>
          <a href="/">6</a>
        </HotDealsListItem>
        <HotDealsListItem>
          <a href="/">7</a>
        </HotDealsListItem>
        <HotDealsListItem>
          <a href="/">8</a>
        </HotDealsListItem>
      </HotDealsList> */}
    </Wrapper>
  );
};

export default hotDeals;
