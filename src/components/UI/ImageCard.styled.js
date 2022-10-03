import styled from "styled-components";
export const ImageCard = styled.img`
  float: ${(props) => props.float};
  grid-template-columns: ${(props) => props.gridC};
  grid-template-rows: ${(props) => props.gridR};
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.fs};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cl};
  margin: ${(props) => props.mg};
  padding: ${(props) => props.pd};
  border: ${(props) => props.bd};
  height: ${(props) => props.height};

  border-radius: ${(props) => props.br};
  width: ${(props) => props.width};
  transition: ${(props) => props.tr};
  vertical-align: ${(props) => props.va};
  position: ${(props) => props.ps};
  overflow-y: ${(props) => props.ovfy};
  overflow-x: ${(props) => props.ovfx};
  top: ${(props) => props.pstp};
  right: ${(props) => props.psrt};
  bottom: ${(props) => props.psbt};
  left: ${(props) => props.pslf};
  display: ${(props) => props.dp};
  text-align: ${(props) => props.ta};
  &:hover {
    color: ${(props) => props.hvcl};
    background-color: ${(props) => props.hvbg};
    font-size: ${(props) => props.hvfs};
    height: ${(props) => props.hvheight};
    width: ${(props) => props.hvwidth};
    border: ${(props) => props.hvbd};
    height: ${(props) => props.hvheight};
    width: ${(props) => props.hvwidth};
  }
  &:active {
    color: ${(props) => props.acl};
    background-color: ${(props) => props.abg};
    font-size: ${(props) => props.afs};
    height: ${(props) => props.aheight};
    width: ${(props) => props.awidth};
    border: ${(props) => props.abd};
    height: ${(props) => props.aheight};
    width: ${(props) => props.awidth};
  }
  /* &:visited {
    border-color: ${(props) => props.bcl};
    background-color: ${(props) => props.vbg};
    font-size: ${(props) => props.vfs};
    height: ${(props) => props.vheight};
    width: ${(props) => props.vwidth};
    border: ${(props) => props.vbd};
    height: ${(props) => props.vheight};
    width: ${(props) => props.vwidth};
  } */

  -webkit-transform: rotate(${(props) => props.rdeg});
  -moz-transform: rotate(${(props) => props.rdeg});
  -o-transform: rotate(${(props) => props.rdeg});
  transform: rotate(${(props) => props.rdeg});
  box-sizing: border-box;
`;
