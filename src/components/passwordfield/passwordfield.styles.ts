import styled from 'styled-components';

export const Label = styled.label`
  color: ${(props: any) => props.theme.labelColor};
  font-family: ${(props: any) => props.theme.fontfamily};
`;

export const Password = styled.input`
  display: block;
  line-height: 30px;
  padding-left: 0.25em;
  font-family: ${(props: any) => props.theme.fontfamily};
  font-size: ${(props: any) => props.theme.inputFontsize};
  color: ${(props: any) => props.theme.labelColor};
  padding-right: 50px;
`;

export const ShowHideButton = styled.button`
  position: absolute;
  top: 28px;
  right: 5px;
  border: none;
  background: none;
  width: 56px;
  text-align: left;
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
`;
