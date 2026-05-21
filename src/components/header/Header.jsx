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

      <EmptyBox />

      <MenuBox>
        <TextStyle onClick={() => navigate("/recruit")}>지원하기</TextStyle>
        <TextStyle onClick={() => navigate("/project")}>프로젝트</TextStyle>
        <TextStyle onClick={() => navigate("/members")}>구성원</TextStyle>
      </MenuBox>

      <LoginTextStyle onClick={() => navigate("/login")}>
        마이페이지
      </LoginTextStyle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 68px;
  border-bottom: 1px solid #1a1a1a;
  background-color: white;
`;

const LogoBox = styled.div`
  width: 408px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-right: 1px solid #1a1a1a;
  margin-left: 55px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 46px;
  height: 46px;
`;

const TitleStyle = styled.div`
  color: #1a1a1a;
  font-size: 22px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
`;

const EmptyBox = styled.div`
  flex: 1;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-left: 1px solid #1a1a1a;
  border-right: 1px solid #1a1a1a;
  width: 410px;
`;

const TextStyle = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const LoginTextStyle = styled.div`
  width: 204px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
