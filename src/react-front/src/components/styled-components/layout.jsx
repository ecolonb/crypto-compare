import styled from "styled-components"

const CardTitleWrapperSize = "44px"

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
  align-items: center;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  padding: ${(props) => (props.padding ? props.padding : "unset")};
`

export const Tab = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "unset"};
  cursor: ${(props) => props.cursor || "default"};
  text-align: ${(props) => (props.align ? props.align : "unset")};
  margin: ${(props) => (props.margin ? props.margin : "unset")};

  &.selected {
    background-color: #989696;
    border-bottom-color: transparent;
  }
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
  font-size: 1em;
`

export const DashboardWrapper = styled.section`
  width: 80%;
  max-width: 755px;
  margin: 34px auto;
  @media (min-width: 1px) and (max-width: 534px) {
    width: 90%;
    ${ScoreSection} {
      flex-direction: column;
      padding: 34px;
      ${ItemScore} {
        width: 100%;
        margin: 21px 0;
      }
    }
  }

  @media (min-width: 535px) and (max-width: 768px) {
    width: 90%;
    ${ScoreSection} {
      padding: 8px;
      ${ItemScore} {
        width: 31%;
      }
    }
  }
`

export const CardTitleWrapper = styled.section`
  border: 0;
  border-bottom: 1px solid gray;
  height: 34px;
  padding: 5px;
`

export const UpdatingSection = styled.section`
  padding: 0 4px;
  overflow-y: auto;
  height: calc(189px - ${CardTitleWrapperSize});
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`

export const RowScore = styled.section`
  height: auto;
  border-bottom: 1px solid #b0afaf;
`
