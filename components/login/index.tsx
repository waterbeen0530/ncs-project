import { loginReqModel } from "@/model/login";
import { theme } from "@/styles/theme";
import { postLogin } from "@/util/api/login";
import { formatInput } from "@/util/functions/formatInput";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Index() {
  const [loginData, setLoginData] = useState<loginReqModel>({
    userId: "",
    password: "",
  });

  const { userId, password } = loginData;

  const toastId = useRef<any>(null);
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const ChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (
      name === "userId" &&
      /[^a-zA-Z0-9]/.test(value) &&
      !toast.isActive(toastId.current)
    ) {
      toastId.current = toast.error(
        "아이디는 영문, 숫자 형식으로 구성되어야 합니다."
      );
    }
    if (
      name === "password" &&
      /[^a-zA-Z0-9\d@$!%*#?&]/.test(value) &&
      !toast.isActive(toastId.current)
    ) {
      toastId.current = toast.error(
        "비밀번호는 영문, 숫자, 특수문자 형식으로 구성되어야 합니다."
      );
    }

    const formmatedVlaue = formatInput(value, name);

    setLoginData({
      ...loginData,
      [name]: formmatedVlaue,
    });
  };

  const submitLogin = async () => {
    if (userId === "" || password === "") {
      toast.error("채워지지 않은 입력칸이 있습니다.");
    } else {
      try {
        await postLogin({
          userId,
          password,
        });
        toast.success("로그인에 성공했습니다!");
        router.push("/main");
      } catch (error) {
        toast.error("id, password가 일치하지 않습니다.");
        setLoginData({
          userId,
          password: "",
        });
        ref.current?.focus();
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Logo src="/imgs/todayMenu/logo.png" />
          <Text>
            오늘 뭐 먹지?
            <br />
            식사 메뉴 고민 될때!
          </Text>
        </TextBox>

        <ItemBox>
          <InputBox>
            <Title>아이디</Title>
            <Input
              name="userId"
              value={userId}
              onChange={ChangeInput}
              placeholder="아이디를 입력해주세요."
              autoComplete="off"
            />
          </InputBox>
          <InputBox>
            <Title>비밀번호</Title>
            <Input
              ref={ref}
              name="password"
              value={password}
              onChange={ChangeInput}
              placeholder="비밀번호를 입력해주세요."
              autoComplete="off"
              type="password"
            />
          </InputBox>
        </ItemBox>

        <Button onClick={submitLogin}>로그인</Button>
        <RouteBox>
          <Question>찬eat이 처음이신가요?</Question>

          <Link href="/signup">
            <Signup>회원가입</Signup>
          </Link>
        </RouteBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 530px;
  border: 1px solid ${theme.GRY4};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.WHT};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  width: 320px;
`;

const TextBox = styled.div``;

const Logo = styled.img`
  width: 90px;
`;

const Text = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  color: ${theme.BLK};
`;

const ItemBox = styled.div`
  margin-top: 40px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.BLK};
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding-left: 12px;
  border: 1px solid ${theme.GRY3};
  border-radius: 6px;
  outline: none;
  color: ${theme.BLK};
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 40px;
  padding-left: 12px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.WHT};
  background-color: ${theme.RED1};
  cursor: pointer;
`;

const RouteBox = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Question = styled.p`
  color: ${theme.BLK};
`;

const Signup = styled.p`
  font-weight: 700;
  text-decoration: underline;
  color: ${theme.RED1};
`;
