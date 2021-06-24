import { useContext, useEffect } from "react"
import useFormInput from "../../hooks/useFormInput"
import useCurrentCoinsValue from "../../hooks/useCurrentCoinsValue"
import GlobalContext from "../../context/globalContext"
import InputFloatingLabel from "../styled-components/input-floating-label/InputFloatingLabel"
import useTabsCoins from "../../hooks/useTabsCoins"
import BTC from "./BTC"
import ETH from "./ETH"
import XRP from "./XRP"
import { RowTabs, Tab, DashboardWrapper } from "../styled-components/layout"
import { Label } from "../styled-components/text"

import "./dashboard.scss"

function Dashboard() {
  const { setIsLoading } = useContext(GlobalContext)
  const { currentTabIndex, setNewIndex } = useTabsCoins("BTC")

  const { allCurrentCoinsValue, lastUpdateCoinsValue } =
    useCurrentCoinsValue("MXN")
  const valueToConvert = useFormInput("")

  useEffect(() => {
    if (allCurrentCoinsValue.length > 0) setIsLoading(false)
  }, [allCurrentCoinsValue, setIsLoading])

  const handleTabClick = (newIndex) => {
    setNewIndex(newIndex)
  }
  return (
    <DashboardWrapper>
      <RowTabs width='100%'>
        <Tab
          width='89px'
          height='25px'
          border='1px solid gray'
          cursor='pointer'
          onClick={() => handleTabClick("BTC")}
          className={currentTabIndex === "BTC" ? "selected" : ""}
        >
          <Label cursor='pointer'>BTC</Label>
        </Tab>
        <Tab
          width='89px'
          height='25px'
          border='1px solid gray'
          cursor='pointer'
          onClick={() => handleTabClick("ETH")}
          className={currentTabIndex === "ETH" ? "selected" : ""}
        >
          <Label cursor='pointer'>ETH</Label>
        </Tab>
        <Tab
          width='89px'
          height='25px'
          border='1px solid gray'
          cursor='pointer'
          onClick={() => handleTabClick("XRP")}
          className={currentTabIndex === "XRP" ? "selected" : ""}
        >
          <Label cursor='pointer'>XRP</Label>
        </Tab>
      </RowTabs>
      {currentTabIndex === "BTC" && (
        <BTC allCurrentCoinsValue={allCurrentCoinsValue} />
      )}
      {currentTabIndex === "ETH" && (
        <ETH allCurrentCoinsValue={allCurrentCoinsValue} />
      )}

      {currentTabIndex === "XRP" && (
        <XRP allCurrentCoinsValue={allCurrentCoinsValue} />
      )}

      <RowTabs
        className='bottom-area'
        bgColor='#d8d8d7'
        padding='5px'
        width='calc(100% - 10px)'
      >
        <Tab width='144px' height='87px' className='convert-area'>
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
        <Tab width='144px' height='45px' align='center' margin='21px 0 0 10px'>
          BITSO
          <br />
          <Label fontSize='14px'>
            {`$ ${(
              Number(lastUpdateCoinsValue?.BTC["MXN"]) *
              Number(valueToConvert.value !== "" ? valueToConvert.value : 0)
            ).toFixed(2)} MXN`}
          </Label>
        </Tab>
        <Tab width='144px' height='45px' align='center' margin='21px 0 0 10px'>
          COINREX
          <br />
          <Label fontSize='14px'>
            {`$ ${(
              Number(lastUpdateCoinsValue?.BTC["MXN"]) *
              Number(valueToConvert.value !== "" ? valueToConvert.value : 0)
            ).toFixed(2)} MXN`}
          </Label>
        </Tab>
        <Tab width='144px' height='45px' align='center' margin='21px 0 0 10px'>
          BITLEM
          <br />
          <Label fontSize='14px'>
            {`$ ${(
              Number(lastUpdateCoinsValue?.BTC["MXN"]) *
              Number(valueToConvert.value !== "" ? valueToConvert.value : 0)
            ).toFixed(2)} MXN`}
          </Label>
        </Tab>
      </RowTabs>
    </DashboardWrapper>
  )
}

export default Dashboard
