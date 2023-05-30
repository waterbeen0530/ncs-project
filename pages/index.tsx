import Footer from "@/components/common/footer";
import Banner from "@/components/main/banner";
import Edge from "@/components/main/edge";
import Network from "@/components/main/network";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <Banner />
      <Edge />
      <Network />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.whiteColor};
`;
