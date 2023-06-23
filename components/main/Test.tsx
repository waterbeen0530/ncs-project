import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Test() {
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Title>취향에 맞게 메뉴를 추천 받으세요!</Title>
          <Content>내 MBTI와 어울리는 메뉴는 뭘까?</Content>
        </TitleBox>

        <ItemBox>
          <Item>
            <Image src="/imgs/main/mbtiTest/test.png" />
            <Text>MBTI 테스트</Text>
            <SubText>
              자체 알고리즘으로 개발한
              <br />
              MBTI 테스트를 진행합니다.
            </SubText>
          </Item>
          <Arrow src="/imgs/main/mbtiTest/arrow.png" />
          <Item>
            <Image src="/imgs/main/mbtiTest/plate.png" />
            <Text>MBTI 메뉴 추천</Text>
            <SubText>
              MBTI 테스트 결과를 <br />
              토대로 메뉴를 추천합니다.
            </SubText>
          </Item>
        </ItemBox>

        <Button>메뉴 추천 받기</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.RED2};
`;

const Wrapper = styled.div`
  width: 880px;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.BLK};
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const ItemBox = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  gap: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.WHT};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100px;
`;

const Text = styled.p`
  margin: 10px 0 20px 0;
  font-size: 24px;
  font-weight: 700;
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Arrow = styled.img`
  width: 130px;
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
