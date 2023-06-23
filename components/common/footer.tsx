import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Frame>
          <Logo src="/imgs/footer/logo.png" />
          <Text>
            @2023 DSM 3학년 임수빈 이메일: hange253@gmail.com Developer
          </Text>
          <Text>
            대덕소프트웨어마이스터고등학교 정보보안과
            <br />
            (34111) 대전광역시 유성구 가정북로 76(장동 23-9)
            <br />
            이메일: hange253@gmail.com
          </Text>
          <Text>Developer</Text>
        </Frame>
        <Route>
          <Link href="https://www.instagram.com/subin_253/">
            <Image src="/imgs/footer/instagram.svg" />
          </Link>
          <Link href="https://github.com/waterbeen0530">
            <Image src="/imgs/footer/github.svg" />
          </Link>
        </Route>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.GRY2};
`;

const Wrapper = styled.div`
  width: 880px;
  padding: 40px 0 40px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Frame = styled.div``;

const Logo = styled.img`
  width: 90px;
`;

const Text = styled.div`
  margin-top: 20px;
  line-height: 26px;
  &:nth-child(3) {
    margin: 10px 0;
  }
  &:last-child {
    margin-top: 10px;
  }
`;

const Route = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.GRY2};
  cursor: pointer;
`;

const Image = styled.img`
  width: 42px;
  padding: 6px;
`;
