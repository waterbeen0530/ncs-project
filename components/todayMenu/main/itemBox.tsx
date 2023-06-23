import { todayMenuItem } from "@/docs/todayMenu";
import { dataType } from "@/model/create";
import { menuListModel } from "@/model/menuList";
import { theme } from "@/styles/theme";
import instance from "@/util/axios/instance";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ItemBox() {
  const [menuList, setMenuList] = useState<menuListModel[]>([]);
  const [tagState, setTagState] = useState<number>(0);
  const router = useRouter();

  const PostList = async () => {
    try {
      const res = await instance.get("/post");
      console.log("call");
      console.log(res.data);
      setMenuList(res.data.postResponses);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const dataTypeMap = new Map();
  dataTypeMap.set("아침", theme.RED1);
  dataTypeMap.set("점심", theme.ORG);
  dataTypeMap.set("저녁", theme.YEW);

  useEffect(() => {
    PostList();
  }, []);

  const onclickItem = () => {
    router;
  };

  return (
    <Container>
      <MenuBox>
        <TimeTagBox>
          <Link href="/todayMenu/main">
            <ClickTimeTag>전체</ClickTimeTag>
          </Link>
          <Link href="/todayMenu/morning">
            <TimeTag>아침</TimeTag>
          </Link>
          <Link href="/todayMenu/lunch">
            <TimeTag>점심</TimeTag>
          </Link>
          <Link href="/todayMenu/dinner">
            <TimeTag>저녁</TimeTag>
          </Link>
        </TimeTagBox>
        <Link href="/todayMenu/create">
          <Button>+ 메뉴 작성하기</Button>
        </Link>
      </MenuBox>
      <ListBox>
        {[...menuList].reverse().map((menu, i) => (
          <Link href={`/todayMenu/detail/${menu.id}`} key={i}>
            <List>
              <Image src={menu.image} />
              <Tag color={dataTypeMap.get(menu.dataType)}>{menu.dataType}</Tag>
              <Title>{menu.title}</Title>
              <UserBox>
                <Nickname>{menu.nickname}</Nickname>
                <UserId>{menu.userId}</UserId>
              </UserBox>
            </List>
          </Link>
        ))}
      </ListBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MenuBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TimeTagBox = styled.div`
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimeTag = styled.button`
  width: 80px;
  height: 34px;
  border: 1px solid ${theme.RED1};
  border-radius: 17px;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.RED1};
  background-color: ${theme.WHT};
  transition: 0.3s;

  &:hover {
    color: ${theme.WHT};
    background-color: ${theme.RED1};
    cursor: pointer;
  }
`;

const ClickTimeTag = styled.button`
  width: 80px;
  height: 34px;
  border: 1px solid ${theme.RED1};
  border-radius: 17px;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.WHT};
  background-color: ${theme.RED1};
  cursor: pointer;
`;

const Button = styled.button`
  width: 180px;
  height: 44px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.WHT};
  background-color: ${theme.RED1};
  cursor: pointer;
`;

const ListBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
`;

const List = styled.div``;

const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`;

const Tag = styled.p`
  width: 60px;
  height: 24px;
  margin-top: 10px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${theme.WHT};
  background-color: ${({ color }: { color: string }) => color};
`;

const Title = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.BLK};
`;

const UserBox = styled.div`
  margin-top: 18px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.GRY3};
`;

const Nickname = styled.p`
  font-weight: 700;
  color: ${theme.GRY2};
`;

const UserId = styled.p`
  font-weight: 500;
`;
