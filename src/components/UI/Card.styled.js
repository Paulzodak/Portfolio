import styled from "styled-components";
export const Card = styled.div`
  font-weight: ${(props) => props.fw};
  justify-content: ${(props) => props.gridjc};
  backdrop-filter: ${(props) => props.bdft};
  float: ${(props) => props.float};
  line-height: ${(props) => props.lh};
  box-shadow: ${(props) => props.bs};
  border-bottom: ${(props) => props.bdbm};
  grid-template-columns: ${(props) => props.gridC};
  grid-template-rows: ${(props) => props.gridR};
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.fs};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cl};
  margin: ${(props) => props.mg};
  padding: ${(props) => props.pd};
  vertical-align: ${(props) => props.va};
  border: ${(props) => props.bd};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  transition: ${(props) => props.tr};
  position: ${(props) => props.ps};
  overflow-y: ${(props) => props.ovfy};
  overflow-x: ${(props) => props.ovfx};
  top: ${(props) => props.pstp};
  border-radius: ${(props) => props.br};
  right: ${(props) => props.psrt};
  bottom: ${(props) => props.psbt};
  left: ${(props) => props.pslf};
  display: ${(props) => props.dp};
  text-align: ${(props) => props.ta};
  -webkit-transform: rotate(${(props) => props.rdeg});
  -moz-transform: rotate(${(props) => props.rdeg});
  -o-transform: rotate(${(props) => props.rdeg});
  transform: rotate(${(props) => props.rdeg});
  box-sizing: border-box;
  z-index: ${(props) => props.zindex};

  &:hover {
    color: ${(props) => props.hvcl};
    border: ${(props) => props.hvbd};
    background-color: ${(props) => props.hvbg};
    font-size: ${(props) => props.hvfs};
    height: ${(props) => props.hvheight};
    width: ${(props) => props.hvwidth};
  }
`;
