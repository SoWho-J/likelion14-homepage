import styled from "styled-components";
import Button from "../../components/common/button/Button";

export default function TopSection({
  selectedGeneration,
  setSelectedGeneration,
}) {
  return (
    <WholeContainer>
      <Container>
        <Members>
          <Member>
            <LeftSquare>
              <Square />
              <Square />
            </LeftSquare>

            <Content>
              <Frame>
                <Span>구성원</Span>
              </Frame>
            </Content>

            <RightSquare>
              <Square />
              <Square />
            </RightSquare>
          </Member>

          <ExplainText>
            서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.
          </ExplainText>
        </Members>

        <Button
          selectedGeneration={selectedGeneration}
          setSelectedGeneration={setSelectedGeneration}
        />
      </Container>
    </WholeContainer>
  );
}

const WholeContainer = styled.div`
  width: 100%;
  padding: 76px 57px 45px;
  box-sizing: border-box;
  border-bottom: 1px solid #1a1a1a;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 59px;
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
`;

const LeftSquare = styled.div`
  display: flex;
  flex-direction: column;
  gap: 53px;
`;

const RightSquare = styled.div`
  display: flex;
  flex-direction: column;
  gap: 53px;
`;

const Square = styled.div`
  width: 7px;
  height: 7px;
  background: #1a1a1a;
`;

const Content = styled.div`
  width: 128px;
  height: 59px;
`;

const Frame = styled.div`
  width: 130px;
  height: 59px;
  outline: 2px #1a1a1a solid;
  outline-offset: -1px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
`;
const Span = styled.span`
  color: #1a1a1a;
  font-size: 36px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
`;

const ExplainText = styled.p`
  margin: 0;
  color: #1a1a1a;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
`;
