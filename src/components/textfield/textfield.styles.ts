import styled from 'styled-components';

export const Label = styled.label`
  color: ${(props: any) => props.theme.labelColor};
  font-family: ${(props: any) => props.theme.fontfamily};
`;

export const Input = styled.input`
  display: block;
  line-height: 30px;
  font-family: ${(props: any) => props.theme.fontfamily};
  font-size: ${(props: any) => props.theme.inputFontsize};
  color: ${(props: any) => props.theme.labelColor};
`;
