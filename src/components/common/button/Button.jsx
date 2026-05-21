import styled from "styled-components";

export default function Button({ selectedGeneration, setSelectedGeneration }) {
  const generations = [14, 13, 12, 11];

  return (
    <Option>
      {generations.map((generation) => (
        <OptionBox
          key={generation}
          $active={selectedGeneration === generation}
          onClick={() => setSelectedGeneration(generation)}
        >
          <OptionSpan>{generation}기</OptionSpan>
        </OptionBox>
      ))}
    </Option>
  );
}

const Option = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

const OptionBox = styled.button`
  width: 92px;
  height: 44px;
  background: ${(props) => (props.$active ? "#c6e400" : "white")};

  border: ${(props) =>
    props.$active ? "2px solid #1a1a1a" : "1px solid #1a1a1a"};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const OptionSpan = styled.span`
  color: #1a1a1a;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
`;
