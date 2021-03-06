import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import Head from "../Components/Head";
import ToggleDark from "../Components/ToggleDark";


const Container = styled.div`
  padding:0 20px;
  max-width: 480px;
  margin:0 auto;
`;

const Title = styled.h1`
  font-size:48px;
`;
const Header = styled.header`
  height:10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const CoinList = styled.ul``;
const CoinItem = styled.li`
  border-radius: ${props=>props.theme.borderRadius};
  margin-bottom: 10px;
  background-color: ${props=>props.theme.colors.cardBg};
  color:${props=>props.theme.colors.cardText};
  a{
    display: block;
    padding:20px;
    transition:color .2s ease;
  }
  &:hover{
    a{
      color:${props=>props.theme.colors.main};
    }
  }
`;
const Loaders = styled.div`
  text-align: center;
`;
const Img = styled.img`
  width:30px;
  height:30px;
  vertical-align: middle;
  margin-right: 8px;
`;

interface ICoin {
  id:string;
  name:string;
  symbol:string;
  rank:number;
  is_new:boolean;
  is_active:boolean;
  type:string;
}

function Coins(){
  const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Head title="코인 목록" />
      <Header>
        <Title>코인</Title>
        <ToggleDark />
      </Header>
      <CoinList>
        {isLoading ? <Loaders>Loading...</Loaders> : data?.slice(0,50).map(coin=>
        <CoinItem key={coin.name}>
          <Link to={`/${coin.id}/chart`} state={{name:coin.name}} >
            <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
            {coin.name} &nbsp;&nbsp; <i className="fa-solid fa-angle-right"></i>
          </Link>
        </CoinItem>
        )}
      </CoinList>
    </Container>
  );
}
export default Coins;