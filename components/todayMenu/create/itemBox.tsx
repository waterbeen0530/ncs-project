import { createReqModel, dataType } from "@/model/create";
import { theme } from "@/styles/theme";
import { createPost } from "@/util/api/create";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ItemBox() {
  const [createData, setCreateData] = useState<createReqModel>({
    title: "",
    content: "",
    dataType: null,
  });

  /* ===== 시간 태그 선택 ===== */
  const tagItem = [
    { title: "아침", state: "MORNING" },
    { title: "점심", state: "LUNCH" },
    { title: "저녁", state: "EVENING" },
  ];
  const [tagState, setTagState] = useState<number>(-1);

  useEffect(() => {
    if (tagState !== -1) {
      setCreateData((pre) => ({
        ...pre,
        dataType: tagItem[tagState].state as dataType,
      }));
    }
  }, [tagState]);

  const showTag = tagItem.map((tag, i) => (
    <div
      key={i}
      onClick={() => {
        setTagState(i);
      }}
    >
      {i === tagState ? (
        <ClickTimeTag>{tag.title}</ClickTimeTag>
      ) : (
        <TimeTag>{tag.title}</TimeTag>
      )}
    </div>
  ));

  /* ===== img 선택 ===== */
  const [imgView, setImgView] = useState<string>("");
  const [imgFile, setImgFile] = useState<File | null>(null);

  const changeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as FileList;
    const theFile = fileList[0];

    setImgFile(theFile);

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;

      setImgView(result);
    };
    await reader.readAsDataURL(theFile);
  };

  /* ===== api 연동 ===== */

  const { title, content, dataType } = createData;
  const router = useRouter();

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    if (value === "") {
      toast.error("공백은 입력할 수 없습니다.");
    } else {
      console.log("게시글 생성 두 배로 먹어~");
    }

    setCreateData((pre) => ({ ...pre, [name]: value }));
  };

  const submitData = async () => {
    if (imgFile === null) {
      toast.error("이미지를 추가해주세요.");
      return null;
    }
    if (dataType === null) {
      toast.error("시간을 선택해주세요.");
    }
    if (title === "" || content === "") {
      toast.error("채워지지 않은 입력칸이 있습니다.");
      return null;
    }
    try {
      await createPost(createData, imgFile);
      toast.success("게시글 생성에 성공했습니다!");
      router.push("/todayMenu/main");
      // console.log(imgFile);
      // console.log(createData);
    } catch (error) {
      toast.error("게시글 생성에 실패했습니다.");
    }
  };
  return (
    <Container>
      <Wrapper>
        <ImageBox>
          <ImageDiv img={imgView || "/imgs/todayMenu/plusImage.png"}></ImageDiv>
          <ImageInput
            id="ImageFile"
            type="file"
            accept="image/*"
            onChange={changeImage}
          />
          <ImageLabel htmlFor="ImageFile">이미지 업로드</ImageLabel>
        </ImageBox>

        <InputBox>
          <ElementBox>
            <TextBox>
              <Text>시간</Text>
              <Emphasis>*</Emphasis>
            </TextBox>
            <TimeTagBox>{showTag}</TimeTagBox>
          </ElementBox>

          <ElementBox>
            <TextBox>
              <Text>제목</Text>
              <Emphasis>*</Emphasis>
            </TextBox>
            <TitleInput
              name="title"
              value={title}
              placeholder="글 제목을 입력해주세요."
              onChange={changeInput}
            />
          </ElementBox>

          <ElementBox>
            <TextBox>
              <Text>내용</Text>
              <Emphasis>*</Emphasis>
            </TextBox>
            <Textarea
              name="content"
              value={content}
              placeholder="글 내용을 입력해주세요."
              onChange={changeInput}
            />
          </ElementBox>
        </InputBox>
      </Wrapper>

      <Button onClick={submitData}>메뉴 작성 하기</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  gap: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ImageDiv = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 6px;
  background: ${theme.RED1} url(${({ img }: { img: string }) => img}) no-repeat
    center/cover;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  width: max-content;
  height: 58px;
  padding: 16px 81px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.GRY3};
  background-color: ${theme.GRY4};
  cursor: pointer;
`;

const InputBox = styled.div`
  width: 580px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ElementBox = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
`;

const Text = styled.strong`
  color: ${theme.BLK};
`;

const Emphasis = styled.strong`
  color: ${theme.RED1};
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

const TitleInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 14px;
  border: 1px solid ${theme.GRY3};
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 14px;
  border: 1px solid ${theme.GRY3};
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  resize: none;
`;

const Button = styled.button`
  width: 400px;
  height: 54px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.WHT};
  background-color: ${theme.RED1};
  cursor: pointer;
`;
