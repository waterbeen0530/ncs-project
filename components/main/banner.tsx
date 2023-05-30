import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Title>
            하루를 기록하다
            <br />
            나만의 일기장 GOT IT
          </Title>
          <Button>하루 기록하기</Button>
        </TitleBox>
        <Image src="/imgs/main/hand.png" />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.mainYellowColor};
`;

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: center;
  line-height: 46px;
  font-size: 30px;
  font-weight: 900;
  color: ${theme.blackColor};
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainOrangeColor};
  cursor: pointer;
`;

const Image = styled.img`
  width: 300px;
`;
