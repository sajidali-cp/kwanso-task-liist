import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 10px;
  width: 30%;
  max-width: 300px;
  min-width: 300px;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
