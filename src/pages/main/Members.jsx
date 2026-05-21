import styled from "styled-components";
import { useState } from "react";
import TopSection from "../topSection/TopSection";
import InfoBox from "../../components/common/infoBox/InfoBox";
import data from "../../components/common/dummydata/dummyData";

export default function Members() {
  const [selectedGeneration, setSelectedGeneration] = useState(14);

  const currentManagement =
    selectedGeneration === 14 ? data.management : data.members;

  const currentBabylion =
    selectedGeneration === 14 ? data.babylion : data.babymembers;

  const boss = currentManagement.filter(
    (member) => member.role === "대표" || member.role === "부대표",
  );

  const managementPO = currentManagement.filter(
    (member) => member.role === "PO",
  );

  const managementFE = currentManagement.filter(
    (member) => member.role === "FRONTEND",
  );

  const managementBE = currentManagement.filter(
    (member) => member.role === "BACKEND",
  );

  const babylionPO = currentBabylion.filter((member) => member.role === "PO");

  const babylionFE = currentBabylion.filter(
    (member) => member.role === "FRONTEND",
  );

  const babylionBE = currentBabylion.filter(
    (member) => member.role === "BACKEND",
  );

  return (
    <Wrapper>
      <TopSection
        selectedGeneration={selectedGeneration}
        setSelectedGeneration={setSelectedGeneration}
      />

      <ContentContainer>
        <PositionText>운영진</PositionText>

        <InfoContainer>
          {boss.map((member) => (
            <Card key={member.id}>
              <TrackText>{member.role}</TrackText>
              <InfoBox member={member} />
            </Card>
          ))}
        </InfoContainer>

        <TrackText>PO</TrackText>
        <InfoContainer>
          {managementPO.map((member) => (
            <InfoBox key={member.id} member={member} />
          ))}
        </InfoContainer>

        <TrackText>FRONTEND</TrackText>
        <InfoContainer>
          {managementFE.map((member) => (
            <InfoBox key={member.id} member={member} />
          ))}
        </InfoContainer>

        <TrackText>BACKEND</TrackText>
        <InfoContainer>
          {managementBE.map((member) => (
            <InfoBox key={member.id} member={member} />
          ))}
        </InfoContainer>

        <PositionText>아기사자</PositionText>

        <TrackText>PO</TrackText>
        <InfoContainer>
          {babylionPO.map((member) => (
            <InfoBox key={member.id} member={member} />
          ))}
        </InfoContainer>

        <TrackText>FRONTEND</TrackText>
        <InfoContainer>
          {babylionFE.map((member) => (
            <InfoBox key={member.id} member={member} />
          ))}
        </InfoContainer>

        <TrackText>BACKEND</TrackText>
        <InfoContainer>
          {babylionBE.map((member) => (
            <InfoBox key={member.id} member={member} />
          ))}
        </InfoContainer>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #fafbf8;
`;

const ContentContainer = styled.div`
  padding: 0 58px 75px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  margin-bottom: 47px;
`;

const PositionText = styled.div`
  margin-top: 47px;
  margin-bottom: 47px;
  color: #1a1a1a;
  font-size: 30px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const TrackText = styled.div`
  color: #1a1a1a;
  font-size: 24px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  margin-bottom: 21px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
