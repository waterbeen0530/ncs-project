import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Test from "@/components/main/Test";
import Banner from "@/components/main/banner";
import Description from "@/components/main/description";
import Recommendation from "@/components/main/recommendation";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <Header />
      <Banner />
      <Description />
      <Recommendation />
      <Test />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${theme.WHT};
`;
