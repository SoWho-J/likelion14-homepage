import styled from "styled-components";
import Profile from "../../../assets/images/profile.png";

export default function InfoBox({ member }) {
  const majorParts = member.major.split(" ");
  const grade = majorParts[majorParts.length - 1];
  const major = majorParts.slice(0, majorParts.length - 1).join(" ");

  return (
    <ProfileBox>
      <Rectangle>
        <ProfileIcon src={Profile} />
      </Rectangle>

      <Frame>
        <NameSpan>{member.name}</NameSpan>
        <MajorBox>{major}</MajorBox>
        <GradeSpan>{grade}</GradeSpan>
      </Frame>
    </ProfileBox>
  );
}

const ProfileBox = styled.div`
  width: 236px;
  height: 340px;
  display: flex;
  flex-direction: column;
`;

const Rectangle = styled.div`
  width: 100%;
  height: 216px;
  background: #f9f9f9;
  border-left: 2px #1a1a1a solid;
  border-top: 2px #1a1a1a solid;
  border-right: 2px #1a1a1a solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;

const ProfileIcon = styled.img`
  width: 170px;
  height: 150px;
  position: relative;
  z-index: 2;
`;

const ProfileIcon2 = styled.img`
  width: 180px;
  height: 150px;
  position: absolute;
  z-index: 1;
`;

const Frame = styled.div`
  width: 100%;
  height: 130px;
  padding: 24px 24px;
  background: #f8fbe7;
  outline: 2px #1a1a1a solid;
  outline-offset: -2px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const NameSpan = styled.span`
  color: #1a1a1a;
  font-size: 22px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 14px;
`;

const MajorBox = styled.div`
  color: #1a1a1a;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 300;

  line-height: 28px;
  margin-bottom: 3px;
`;

const GradeSpan = styled.span`
  color: #1a1a1a;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
  line-height: 15px;
`;
