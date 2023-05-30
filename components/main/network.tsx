import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Network() {
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Title>오늘 기분은 어떠셨나요?</Title>
          <Content>오늘의 감정을 일기와 함께 기록해보세요.</Content>
        </TitleBox>
        <ItemBox>
          <Item>
            <Face src="/imgs/main/face/smail.png" />
            <Text>행복해요</Text>
          </Item>
          <Item>
            <Face src="/imgs/main/face/love.png" />
            <Text>사랑스러워요</Text>
          </Item>
          <Item>
            <Face src="/imgs/main/face/sad.png" />
            <Text>슬퍼요</Text>
          </Item>
        </ItemBox>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.lightOrangeColor};
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Content = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
`;

const ItemBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: 280px;
  height: 180px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.whiteColor};
`;

const Face = styled.img`
  width: 100px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.blackColor};
`;
