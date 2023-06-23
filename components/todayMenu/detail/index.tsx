import { postDetail } from "@/model/detail";
import { theme } from "@/styles/theme";
import instance from "@/util/axios/instance";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Index() {
  const router = useRouter();
  const [menuList, setMenuList] = useState<postDetail>({
    title: "",
    content: "",
    nickname: "",
    userId: "",
    dataType: "MORNING",
    image: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(menuList);
  }, [menuList]);

  useEffect(() => {
    if (typeof router.query.id === "string") {
      setId(router.query.id as string);
      PostList(router.query.id as string);
    }
  }, [router.isReady]);

  const PostList = async (id: any) => {
    try {
      const res = await instance.get(`/post/${id}`);
      console.log("call");
      console.log(res.data);
      setMenuList(res.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // useEffect(() => {
  //   PostList();
  // }, [id]);

  const dataTypeMap = new Map();
  dataTypeMap.set("아침", theme.RED1);
  dataTypeMap.set("점심", theme.ORG);
  dataTypeMap.set("저녁", theme.YEW);

  return (
    <Container>
      <Item>
        <Image src={menuList.image} />
        <TextBox>
          <Title>{menuList.title}</Title>
          <Tag color={dataTypeMap.get(menuList.dataType)}>
            {menuList.dataType}
          </Tag>
          <UserBox>
            <Nickname>{menuList.nickname}</Nickname>
            <UserId>{menuList.userId}</UserId>
          </UserBox>
          <Content>{menuList.content}</Content>
          <Link href="/todayMenu/main">
            <Button>목록보기</Button>
          </Link>
        </TextBox>
      </Item>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 420px;
  height: 420px;
  object-fit: cover;
`;

const TextBox = styled.div`
  position: relative;
  width: 420px;
  height: 420px;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  color: ${theme.BLK};
`;

const Tag = styled.p`
  width: 70px;
  height: 30px;
  margin-top: 30px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  color: ${theme.WHT};
  background-color: ${({ color }: { color: string }) => color};
`;

const UserBox = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid ${theme.GRY4};
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

const Content = styled.p`
  width: 420px;
  height: 200px;
  overflow-y: scroll;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.BLK};
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.WHT};
  background-color: ${theme.RED1};
  cursor: pointer;
`;
