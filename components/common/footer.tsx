import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <ItemBox>
          <Logo src="/imgs/footer/logo.png" />
          <Text>
            @2023 Team.파꽃 <br />
            <br />
            개인 정보 처리 방침 | 이용약관
            <br /> (34111) 대전광역시 유성구 가정북로 76(장동 23-9) <br />
            이메일: heimerdinger@gmail.com <br />
            <br />
            Developer
          </Text>
        </ItemBox>

        <RouteBox>
          <Route>
            <Image src="/imgs/footer/github.png" />
          </Route>
          <Route>
            <Image src="/imgs/footer/notion.png" />
          </Route>
        </RouteBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.softBlack};
`;

const Wrapper = styled.div`
  width: 1000px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.whiteColor};
`;

const ItemBox = styled.div``;

const Logo = styled.img`
  width: 80px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: ${theme.whiteColor};
`;

const RouteBox = styled.div`
  height: 100%;
  margin-bottom: 40px;
  display: flex;
  gap: 14px;
  align-items: flex-end;
  justify-content: center;
`;

const Route = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
`;

const Image = styled.img`
  width: 32px;
`;
