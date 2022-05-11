import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IPriceData } from "./Coin";

const Quotes = styled.div`
  display: grid;
  gap:10px;
  grid-template-columns: repeat(3,1fr);
  padding-bottom:10px;
`;

const RoundBox = styled.div`
  border-radius: ${props=>props.theme.borderRadius};
  border:1px solid ${props=>props.theme.colors.borderColor};
  padding:2rem 1.2rem;
  h3{
    font-size:0.9rem;
    font-weight: 400;
    color:#aaa;
    margin-bottom: 10px;
  }
  p{
    font-weight: 600;
  }
`;

interface RouteState {
  state:{
    price: IPriceData;
  }
}

function Price(){
  const {state} = useLocation() as RouteState;
  const d = new Date(state.price.quotes.USD.ath_date).toLocaleDateString();
  return (
    <Quotes>
      <RoundBox>
        <h3>15분</h3>
        <p>{state.price.quotes.USD.percent_change_15m} %</p>
      </RoundBox>
      <RoundBox>
        <h3>30분</h3>
        <p>{state.price.quotes.USD.percent_change_30m} %</p>
      </RoundBox>
      <RoundBox>
        <h3>1시간</h3>
        <p>{state.price.quotes.USD.percent_change_1h} %</p>
      </RoundBox>
      <RoundBox>
        <h3>6시간</h3>
        <p>{state.price.quotes.USD.percent_change_6h} %</p>
      </RoundBox>
      <RoundBox>
        <h3>12시간</h3>
        <p>{state.price.quotes.USD.percent_change_12h} %</p>
      </RoundBox>
      <RoundBox>
        <h3>24시간</h3>
        <p>{state.price.quotes.USD.percent_change_24h} %</p>
      </RoundBox>
      <RoundBox>
        <h3>사상 최고</h3>
        <p>$ {state.price.quotes.USD.ath_price.toFixed(3)}</p>
      </RoundBox>
      <RoundBox>
        <h3>사상 최고가 대비</h3>
        <p>{state.price.quotes.USD.percent_from_price_ath} %</p>
      </RoundBox>
      <RoundBox>
        <h3>사상 최고 일</h3>
        <p>{d}</p>
      </RoundBox>
    </Quotes>
  );
}
export default Price;