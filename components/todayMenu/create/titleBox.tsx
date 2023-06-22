import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function TitleBox() {
  return (
    <Container>
      <Title>오늘의 메뉴 작성하기</Title>
      <Content>사람들에게 메뉴를 추천해보세요!</Content>
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
