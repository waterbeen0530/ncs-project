import Index from "@/components/signup";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Signup() {
  return (
    <Container>
      <Wrapper>
        <Index />
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
`;

const Wrapper = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
