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
  Kartinka,
  IngredientsPuctures,
} from './HotDeals.styled';

import products from '../dataBase/products.json';
import fish from '../../assets/images/fish.png';
import cheese from '../../assets/images/cheese.png';
import lettuce from '../../assets/images/lettuce.png';
import spicy from '../../assets/images/spicy.png';
// console.log(products);

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
                <IngredientsPuctures>
                  {el.fish && <Kartinka src={fish} alt="" />}
                  {el.cheese && <Kartinka src={cheese} alt="" />}
                  {el.spicy && <Kartinka src={spicy} alt="" />}
                  {el.lettuce && <Kartinka src={lettuce} alt="" />}
                </IngredientsPuctures>
                <ItemImage src={el.URL} alt="" />

                {/* {el.ingredients.split(',')} */}
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
