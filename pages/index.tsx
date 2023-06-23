import Index from "@/components/login";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Login() {
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
