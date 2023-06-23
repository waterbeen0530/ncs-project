import Header from "@/components/common/header";
import ItemBox from "@/components/todayMenu/lunch/itemBox";
import TitleBox from "@/components/todayMenu/lunch/titleBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Lunch() {
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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${theme.WHT};
`;

const Wrapper = styled.div`
  width: 880px;
  margin-top: 110px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
