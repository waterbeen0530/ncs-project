import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Banner() {
  return (
    <Container>
      <Wrapepr>
        <TitleBox>
          <Title>
            오늘 뭐먹지? 고민,
            <br />
            찬eat에서 해결하세요!
          </Title>
          <Content>
            식사 메뉴를 고르기 어려운 사람들을 위해 <br />
            다양한 솔루션을 제공합니다.
          </Content>
        </TitleBox>
        <Image src="/imgs/main/banner/food.png" />
      </Wrapepr>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #f5594e, #ffaa63);
`;

const Wrapepr = styled.div`
  width: 880px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  gap: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: ${theme.WHT};
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Image = styled.img`
  width: 340px;
`;
