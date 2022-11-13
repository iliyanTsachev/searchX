import styled from "@emotion/styled";
import { ReactComponent as EyeglassIconSvg } from "../../assets/iconSearch.svg";
import { ReactComponent as CrossButtonSvg } from "../../assets/iconCancel.svg";

export const Wrapper = styled.div<{ shoudlShowShadow: boolean }>`
  position: relative;
  width: 550px;
  border-radius: 10px;
  box-shadow: ${(props) => props.shoudlShowShadow && "0px 0px 5px #a7a7a7bf"};
  padding-bottom: 10px;
  background-color: white;
`;

export const SearchInput = styled((props: any) => <input {...props} />)<{
  shoudlshowshadow: boolean;
}>`
  box-shadow: ${(props) => props.shoudlshowshadow && "0px 0px 5px #a7a7a7bf"};
  padding: 15px 20px 15px 46px;
  font-size: 16px;
  width: 100%;
  border-radius: 100px;
`;

export const DeletelButton = styled(CrossButtonSvg)`
  cursor: pointer;
  width: 20px;
  padding: 5px;
`;

export const DeletelButtonSearchInput = styled(DeletelButton)`
  position: absolute;
  top: 13px;
  right: 16px;
`;

export const EyeglassIcon = styled(EyeglassIconSvg)`
  width: 16px;
`;

export const EyeglassIconSearchInput = styled(EyeglassIcon)`
  position: absolute;
  top: 12px;
  left: 16px;
`;

export const Hr = styled.hr`
  margin-top: 0px;
  border: 0.5px solid #dedede;
  width: 94%;
`;
