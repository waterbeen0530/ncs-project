import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Header() {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 240px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background-color: ${theme.WHT};
`;

const Wrapper = styled.div`
  width: 180px;
  height: 100%;
  margin-top: 70px;
`;
