# 코인 트래커 (Coin Tracker)

[**coin-tracker**](https://skyeome.github.io/coin-tracker/)<br/>
Top 50 까지의 코인들의 가격을 실시간 그래프로 볼 수 있는 간단한 React 어플리캐이션 입니다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 사용된 라이브러리 & api

**Library**

- TypeScript (4.6.3)
- React (18.0.0)
- React Router (6.3.0)
- Styled Component (5.3.5)
- ApexCharts (3.35.0)
- React Helmet(6.1.0)

**Api**

- [coinpaprika](https://api.coinpaprika.com/v1) - 코인 정보를 받아옵니다.
- [cryptocurrencyliveprices](https://cryptocurrencyliveprices.com/) - 코인 썸네일을 받아올때 사용했습니다.

## 주요 화면 목록

1. 코인 화면
2. 코인 상세페이지

### 코인 화면

순위 1~50위 까지의 코인 목록을 볼수있는 화면입니다. <br/>
각 코인의 이름을 클릭하면 현재 가격과 차트 등을 볼수있는 상세페이지로 이동합니다.

### 코인 상세페이지

상단에 위치한 차트,가격 탭을 누르면 가격에 대한 그래프를 확인 할 수 있으며, <br/>
그래프 아래에는 현재 코인 순위와 가격이 위치해있으며, 상세설명(영문)과 정보를 확인 할 수있습니다.
