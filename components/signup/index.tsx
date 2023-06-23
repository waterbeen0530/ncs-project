import { singupReqModel } from "@/model/signup";
import { theme } from "@/styles/theme";
import { postSignup } from "@/util/api/signup";
import { formatInput } from "@/util/functions/formatInput";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Index() {
  const [signupData, setSignupData] = useState<singupReqModel>({
    nickname: "",
    userId: "",
    password: "",
  });

  const { nickname, userId, password } = signupData;

  const router = useRouter();
  const toastId = useRef<any>(null);

  const ChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (
      name === "nickname" &&
      /[^a-zA-Z0-9ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test(value) &&
      !toast.isActive(toastId.current)
    ) {
      toastId.current = toast.error("특수문자는 입력할 수 없습니다.");
    }
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

    setSignupData({
      ...signupData,
      [name]: formmatedVlaue,
    });
  };

  const submitSignup = async () => {
    if (nickname === "" || userId === "" || password === "") {
      toast.error("채워지지 않은 입력칸이 있습니다.");
    } else {
      try {
        await postSignup({
          nickname: nickname,
          userId: userId,
          password: password,
        });

        toast.success("회원가입에 성공했습니다!");
        router.push("/");
      } catch (error) {
        toast.error("회원가입에 실패했습니다!");
        setSignupData({
          nickname: "",
          userId: "",
          password: "",
        });
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Logo src="/imgs/todayMenu/logo.png" />
          <Text>
            모두를 위한
            <br />
            메뉴 추천 서비스.
          </Text>
        </TextBox>

        <ItemBox>
          <InputBox>
            <Title>닉네임</Title>
            <Input
              name="nickname"
              value={nickname}
              onChange={ChangeInput}
              placeholder="닉네임을 입력해주세요."
              autoComplete="off"
            />
          </InputBox>
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
              name="password"
              value={password}
              onChange={ChangeInput}
              placeholder="비밀번호를 입력해주세요."
              autoComplete="off"
              type="password"
            />
          </InputBox>
        </ItemBox>

        <Button onClick={submitSignup}>회원가입</Button>
        <RouteBox>
          <Question>기존 회원이신가요?</Question>

          <Link href="/">
            <Login>로그인</Login>
          </Link>
        </RouteBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 600px;
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

const Login = styled.p`
  font-weight: 700;
  text-decoration: underline;
  color: ${theme.RED1};
`;
