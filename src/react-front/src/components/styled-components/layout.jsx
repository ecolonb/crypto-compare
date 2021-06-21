import styled from "styled-components"

export const Row = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
`

export const StandardUserForm = styled.form`
  width: ${(props) => (props.width ? props.width : "100%")};
  max-width: 550px;
  border: 1px solid gray;
  padding: 21px;
  border-radius: 8px;
`

export const RowTabs = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  justify-content: flex-start;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  padding: ${(props) => (props.padding ? props.padding : "unset")};
`

export const Tab = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border: ${(props) => (props.border ? "1px solid gray" : "unset")};
  cursor: pointer;
  text-align: ${(props) => (props.align ? props.align : "unset")};
  margin: ${(props) => (props.margin ? props.margin : "unset")};
`

export const DashboardWrapper = styled.section`
  width: 80%;
  max-width: 555px;
  margin: 0 auto;
`

export const ScoreSection = styled.section`
  border: 1px solid gray;
  min-height: 100px;
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 34px;
  background-color: #989696;
`

export const ItemScore = styled.section`
  width: 30%;
  height: 189px;
  background-color: #d8d8d7;
  border: 1px solid gray;
  overflow-x: hidden;
`
