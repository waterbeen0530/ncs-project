import { recommendationItem } from "@/docs/main/recommendation";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Recommendation() {
  return (
    <Container>
      <TitleBox>
        <Title>메뉴를 추천받아보세요!</Title>
        <Content>정말 야무지고 맛있는 식사 메뉴!</Content>
      </TitleBox>

      <Wrapper>
        <LeftFog></LeftFog>
        <RightFog></RightFog>
        {recommendationItem.map((arr, i) => (
          <Image key={i} src={arr} />
        ))}
      </Wrapper>

      <Link href="/todayMenu/main">
        <PlusButton>식사 메뉴 더 보러가기 {">"}</PlusButton>
      </Link>
      <Button>메뉴 추천 받기</Button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  margin-bottom: 60px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.BLK};
`;

const Title = styled.h1``;

const Content = styled.p``;

const Fog = styled.div`
  position: absolute;
  width: 240px;
  height: 460px;
  background: linear-gradient(to right, #fff, #ffffff00);
`;

const LeftFog = styled(Fog)`
  left: 0;
`;

const RightFog = styled(Fog)`
  right: 0;
  transform: rotate(180deg);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 460px;
  display: grid;
  grid-template-columns: repeat(5, 280px);
  grid-row-gap: 20px;
  grid-column-gap: 16px;
`;

const Image = styled.img`
  width: 280px;
  height: 220px;
`;

const PlusButton = styled.button`
  width: 230px;
  height: 50px;
  margin: 30px 0;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.GRY2};
  background-color: ${theme.GRY5};
  cursor: pointer;
`;

const Button = styled.button`
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.WHT};
  background-color: ${theme.RED1};
  cursor: pointer;
`;
