import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <ItemBox>
          <Link href="/main">
            <Logo src="/imgs/header/logo.png" />
          </Link>
          <TextBox>
            <Text>랜덤 메뉴 추천</Text>
            <Text>메뉴 MBTI</Text>
            <Link href="/todayMenu/main">
              <Text>오늘의 메뉴</Text>
            </Link>
          </TextBox>
        </ItemBox>
        <Link href="/">
          <Button>로그아웃</Button>
        </Link>
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
  background-color: ${theme.WHT};
  z-index: 10;
`;

const Wrapper = styled.div`
  width: 880px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemBox = styled.div`
  gap: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 90px;
`;

const TextBox = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.BLK};
`;

const Button = styled.button`
  width: 120px;
  height: 38px;
  border: none;
  border-radius: 19px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.WHT};
  background-color: ${theme.RED1};
  cursor: pointer;
`;
