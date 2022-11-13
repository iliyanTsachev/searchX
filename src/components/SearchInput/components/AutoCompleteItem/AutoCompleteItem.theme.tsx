import styled from "@emotion/styled";
import { ReactComponent as ClockIconSvg } from "../../../../assets/iconClock.svg";

export const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Title = styled.div`
  margin-left: 10px;
  margin-bottom: 4px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ClockIcon = styled(ClockIconSvg)`
  width: 15px;
  fill: #a7a5a5;
`;
