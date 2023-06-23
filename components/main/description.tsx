import { descriptionItem } from "@/docs/main/description";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Description() {
  return (
    <Container>
      {descriptionItem.map((arr, i) => (
        <Item key={i}>
          <Image src={arr.img} />
          <Title>{arr.title}</Title>
          <Content>{arr.content}</Content>
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 880px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 70px;
`;

const Title = styled.h1`
  margin-top: 26px;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.BLK};
`;

const Content = styled.p`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.GRY1};
`;
