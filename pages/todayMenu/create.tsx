import Header from "@/components/common/header";
import ItemBox from "@/components/todayMenu/create/itemBox";
import TitleBox from "@/components/todayMenu/create/titleBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Create() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <TitleBox />
        <ItemBox />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.WHT};

  @media only screen and (max-height: 694px) {
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  width: 880px;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-height: 694px) {
    margin-top: 90px;
  }
`;
