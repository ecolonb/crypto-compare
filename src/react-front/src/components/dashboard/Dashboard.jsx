import { useContext, useEffect } from "react"
import useFormInput from "../../hooks/useFormInput"
import useCurrentCoinsValue from "../../hooks/useCurrentCoinsValue"
import GlobalContext from "../../context/globalContext"
import InputFloatingLabel from "../styled-components/input-floating-label/InputFloatingLabel"

import {
  RowTabs,
  Tab,
  DashboardWrapper,
  ScoreSection,
  ItemScore,
} from "../styled-components/layout"
import { Label } from "../styled-components/text"

function Dashboard() {
  const { setIsLoading } = useContext(GlobalContext)
  const { allCurrentCoinsValue, lastUpdateCoinsValue } =
    useCurrentCoinsValue("MXN")
  const valueToConvert = useFormInput("")

  useEffect(() => {
    if (allCurrentCoinsValue.length > 0) setIsLoading(false)
  }, [allCurrentCoinsValue, setIsLoading])

  return (
    <DashboardWrapper>
      <RowTabs width='100%'>
        <Tab width='89px' height='25px' border={true}>
          <Label>BTC</Label>
        </Tab>
        <Tab width='89px' height='25px' border={true}>
          <Label>ETH</Label>
        </Tab>
        <Tab width='89px' height='25px' border={true}>
          <Label>XRP</Label>
        </Tab>
      </RowTabs>
      <ScoreSection>
        <ItemScore>
          {allCurrentCoinsValue.map((item, key) => {
            let formatedDate = new Date(item.current_time)
            formatedDate = `${formatedDate.getHours()}:${formatedDate.getMinutes()}:${formatedDate.getSeconds()}`
            return (
              <p key={key}>
                {formatedDate} / {item.coins_value["BTC"]["MXN"]}{" "}
              </p>
            )
          })}
        </ItemScore>
        <ItemScore>
          {" "}
          {allCurrentCoinsValue.map((item, key) => {
            let formatedDate = new Date(item.current_time)
            formatedDate = `${formatedDate.getHours()}:${formatedDate.getMinutes()}:${formatedDate.getSeconds()}`
            return (
              <p key={key}>
                {formatedDate} / {item.coins_value["BTC"]["MXN"]}{" "}
              </p>
            )
          })}
        </ItemScore>
        <ItemScore>
          {" "}
          {allCurrentCoinsValue.map((item, key) => {
            let formatedDate = new Date(item.current_time)
            formatedDate = `${formatedDate.getHours()}:${formatedDate.getMinutes()}:${formatedDate.getSeconds()}`
            return (
              <p key={key}>
                {formatedDate} / {item.coins_value["BTC"]["MXN"]}{" "}
              </p>
            )
          })}
        </ItemScore>
      </ScoreSection>
      <RowTabs bgColor='#d8d8d7' padding='5px' width='calc(100% - 10px)'>
        <Tab width='144px' height='87px'>
          Convert
          <br />
          <InputFloatingLabel
            name='valueToConvert'
            {...valueToConvert}
            width='90%'
            placeholder='MXN'
            data-validate='number'
            margin='0 0 34px 0'
          />
        </Tab>
        <Tab width='89px' height='87px' align='center' margin='0 0 0 10px'>
          BITSO
          <br />
          <InputFloatingLabel
            value={(
              Number(lastUpdateCoinsValue?.BTC["MXN"]) *
              Number(valueToConvert.value !== "" ? valueToConvert.value : 0)
            ).toFixed(2)}
            margin='19px 0 0 0 '
            disabled
          />
        </Tab>
        <Tab width='89px' height='87px' align='center' margin='0 0 0 10px'>
          COINREX
          <br />
          <InputFloatingLabel
            value={(
              Number(lastUpdateCoinsValue?.BTC["MXN"]) *
              Number(valueToConvert.value !== "" ? valueToConvert.value : 0)
            ).toFixed(2)}
            margin='19px 0 0 0 '
            disabled
          />
        </Tab>
        <Tab width='89px' height='87px' align='center' margin='0 0 0 10px'>
          BITLEM
          <br />
          <InputFloatingLabel
            value={(
              Number(lastUpdateCoinsValue?.BTC["MXN"]) *
              Number(valueToConvert.value !== "" ? valueToConvert.value : 0)
            ).toFixed(2)}
            margin='19px 0 0 0 '
            disabled
          />
        </Tab>
      </RowTabs>
    </DashboardWrapper>
  )
}

export default Dashboard
