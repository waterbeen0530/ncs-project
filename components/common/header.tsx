import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <ItemBox>
          <Logo src="/imgs/header/logo.png" />
          <TextBox>
            <Text>일기훔쳐보기</Text>
            <Text>일기작성하기</Text>
            <Text>마이페이지</Text>
          </TextBox>
        </ItemBox>
        <Button>로그인</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemBox = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 100px;
`;

const TextBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.blackColor};
  cursor: pointer;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.blackColor};
  background-color: ${theme.grayColor};
  cursor: pointer;
`;
