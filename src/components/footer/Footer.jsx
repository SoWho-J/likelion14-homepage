import styled from "styled-components";
import iconurl from "../../assets/images/skon.png";
import copyRighturl from "../../assets/images/copyright.png";

export default function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <Image src={copyRighturl} />
        <IconBox>
          <Icon src={iconurl} />
        </IconBox>
      </FooterContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #1a1a1a;
  background-color: white;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1400px;
  height: 160px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 635px;
`;

const IconBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;
