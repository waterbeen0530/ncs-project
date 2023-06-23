import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function TitleBox() {
  return (
    <Container>
      <Title>오늘의 메뉴</Title>
      <Content>사람들이 추천하는 메뉴를 확인해보세요!</Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: ${theme.BLK};
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
