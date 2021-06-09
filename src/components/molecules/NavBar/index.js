import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconCart } from '../../';
import * as S from './style.js';
import { ROUTE, COLOR } from '../../../constants';

export const NavBar = (props) => {
  const { ...rest } = props;
  const cartLength = useSelector(({ cartReducer }) => Object.keys(cartReducer).length);

  return (
    <S.NavBar {...rest}>
      <S.Container>
        <Link to={ROUTE.HOME}>
          <S.NavTitle>
            <IconCart width="40" color={COLOR.HEX.WHITE} />
            <S.Title>심바하루의 쇼핑은 즐거워</S.Title>
          </S.NavTitle>
        </Link>
        <S.NavItems>
          <Link to={ROUTE.PRODUCT_LIST}>
            <S.Item>상품목록</S.Item>
          </Link>
          <Link to={ROUTE.CART}>
            <S.Item noticeLength={cartLength}>장바구니</S.Item>
          </Link>
          <Link to={ROUTE.ORDER_LIST}>
            <S.Item>주문목록</S.Item>
          </Link>
        </S.NavItems>
      </S.Container>
    </S.NavBar>
  );
};
