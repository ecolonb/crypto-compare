import {
  ScoreSection,
  ItemScore,
  CardTitleWrapper,
  UpdatingSection,
  RowScore,
} from "../styled-components/layout"

import { Label } from "../styled-components/text"

function XRP({ allCurrentCoinsValue }) {
  return (
    <ScoreSection>
      <ItemScore>
        <CardTitleWrapper>
          <Label fontSize='18px'>
            $&nbsp;
            {allCurrentCoinsValue.length > 0
              ? allCurrentCoinsValue[0]["coins_value"]["XRP"]["MXN"]
              : ""}
            &nbsp;MXN
          </Label>
          <Label fontSize='10px'>BITSO</Label>
        </CardTitleWrapper>
        <UpdatingSection>
          {allCurrentCoinsValue.map((item, key) => {
            return (
              <RowScore key={key}>
                <Label fontSize='10px'>
                  {item.current_time.replace("T", " ").replace("Z", "")}{" "}
                  &nbsp;&nbsp; ${item.coins_value["XRP"]["MXN"]} MXN
                </Label>
              </RowScore>
            )
          })}
        </UpdatingSection>
      </ItemScore>
      <ItemScore>
        <CardTitleWrapper>
          <Label fontSize='18px'>
            $&nbsp;
            {allCurrentCoinsValue.length > 0
              ? allCurrentCoinsValue[0]["coins_value"]["XRP"]["MXN"]
              : ""}
            &nbsp;MXN
          </Label>
          <Label fontSize='10px'>COINREX</Label>
        </CardTitleWrapper>
        <UpdatingSection>
          {allCurrentCoinsValue.map((item, key) => {
            return (
              <RowScore key={key}>
                <Label fontSize='10px'>
                  {item.current_time.replace("T", " ").replace("Z", "")}{" "}
                  &nbsp;&nbsp; ${item.coins_value["XRP"]["MXN"]} MXN
                </Label>
              </RowScore>
            )
          })}
        </UpdatingSection>
      </ItemScore>
      <ItemScore>
        <CardTitleWrapper>
          <Label fontSize='18px'>
            $&nbsp;
            {allCurrentCoinsValue.length > 0
              ? allCurrentCoinsValue[0]["coins_value"]["XRP"]["MXN"]
              : ""}
            &nbsp;MXN
          </Label>
          <Label fontSize='10px'>BITLEM</Label>
        </CardTitleWrapper>
        <UpdatingSection>
          {allCurrentCoinsValue.map((item, key) => {
            return (
              <RowScore key={key}>
                <Label fontSize='10px'>
                  {item.current_time.replace("T", " ").replace("Z", "")}{" "}
                  &nbsp;&nbsp; ${item.coins_value["XRP"]["MXN"]} MXN
                </Label>
              </RowScore>
            )
          })}
        </UpdatingSection>
      </ItemScore>
    </ScoreSection>
  )
}

export default XRP
