import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Edge() {
  return (
    <Container>
      <Wrapper>
        <Container1>
          <TitleBox>
            <Text>일기 구경하기</Text>
            <Title>
              하루를 기록하고
              <br />
              하루를 공유하다
            </Title>
            <Content>하루를 기록하고 공유할 수 있습니다.</Content>
            <Button>바로가기</Button>
          </TitleBox>
          <Image src="/imgs/main/list/1.jpg" />
          <Image src="/imgs/main/list/7.webp" />
          <Image src="/imgs/main/list/3.png" />
        </Container1>
        <Container2>
          <Image src="/imgs/main/list/3.png" />
          <Image src="/imgs/main/list/4.jpg" />
          <Image src="/imgs/main/list/5.webp" />
          <Image src="/imgs/main/list/6.jpg" />
        </Container2>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  margin: 100px 0 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container1 = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  transform: translateX(134px);
`;

const TitleBox = styled.div`
  width: 250px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.dailyGrayColor};
`;

const Title = styled.div`
  margin-top: 8px;
  font-size: 26px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Content = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
`;

const Button = styled.button`
  width: 110px;
  height: 30px;
  margin-top: 16px;
  border: 1px solid ${theme.strongGrayColor};
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
  background-color: ${theme.whiteColor};
  cursor: pointer;
`;

const Image = styled.img`
  width: 250px;
  height: 170px;
  border-radius: 10px;
`;

const Container2 = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  transform: translateX(-134px);
`;
