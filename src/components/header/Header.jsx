import LogoUrl from "../../assets/images/likelionLogo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoBox onClick={() => navigate("/")}>
        <Logo src={LogoUrl} />
        <TitleStyle>멋쟁이사자처럼 서경대학교</TitleStyle>
      </LogoBox>

      <span style={{ flex: 1 }}></span>

      <MenuBox>
        <TextStyle onClick={() => navigate("/recruit")}>지원하기</TextStyle>
        <TextStyle onClick={() => navigate("/project")}>프로젝트</TextStyle>
        <TextStyle onClick={() => navigate("/members")}>구성원</TextStyle>
      </MenuBox>
      <LoginTextStyle onClick={() => navigate("/login")}>
        로그인/회원가입
      </LoginTextStyle>
    </HeaderContainer>
  );
}

const Logo = styled.img`
  width: 46px;
  height: 46px;
`;
const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 68px;
  margin: 0 auto;
  border-bottom: 1px solid black;
`;

const LogoBox = styled.div`
  width: 408px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-right: 1px solid black;
  margin-left: 55px;
  cursor: pointer;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-left: 1px solid black;
  border-right: 1px solid black;
  width: 410px;
`;

const TitleStyle = styled.div`
  color: #1a1a1a;
  font-size: 22px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  justify-content: center;
`;
const TextStyle = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  cursor: pointer;
`;

const LoginTextStyle = styled.div`
  width: 204px;
  display: flex;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  cursor: pointer;
`;
