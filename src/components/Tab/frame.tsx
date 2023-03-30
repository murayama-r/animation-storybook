import React, { FC, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'

type Props = {}

export const FrameTab: FC<Props> = () => {
  const [display, setDisplay] = useState(0)
  const tabList: { title: string; body: string }[] = [
    {
      title: `基本情報`,
      body: `スカイチケットでは国内すべての路線の航空券が検索できます。東京(羽田)発 福岡着、東京(羽田)発 札幌(新千歳)着、東京(羽田)発 那覇着をはじめとする人気路線や、それ以外のすべての路線の最安値を探すことが可能です。もちろん、国内線の検索・予約だけでなく国際線の検索・予約も可能です。`,
    },
    {
      title: `設備サービス`,
      body: `国内運航の全ての航空会社から、格安航空券を検索できます。利用できる航空会社が多いからこそ、スカイチケットの格安航空券一括検索と一斉比較がとても便利なんです。セール中の特別な格安航空券も検索できます。国内線の格安航空券はANA、JAL、スカイマークはもちろん、ピーチ航空やジェットスター、春秋航空などのLCC格安航空券の最安値や時刻表を比較することが可能です。`,
    },
    {
      title: `ポリシー`,
      body: `skyticketは世界中の旅行者に利用されています。格安航空券サイトとして10年以上の実績を持ち、国内航空券の申込件数は年間約200万件。1600万DLを誇るアプリを使った格安航空券の予約が便利で、多くの方に愛用いただいています。出発地と目的地を選択するだけで、希望に沿った格安航空券の検索が可能です。航空会社のサービスが気になる方は、スカイチケットで航空券を購入したお客様の口コミをご覧ください。とても参考になります。`,
    },
    {
      title: `重要なお知らせ`,
      body: `スカイチケットでは格安航空券購入の際、クレジット決済、コンビニ決済、PayPay、銀行振り込み、ペイジーなど多彩な決済手段の中から、好きな決済方法を選択することができます。詳しいご利用方法は"お支払い方法"よりご確認いただけます。`,
    },
  ]

  const onClickHandle = (index: number) => {
    setDisplay(index)
  }

  return (
    <div>
      <TitleWrapper>
        {tabList.map((t, index) => {
          return (
            <Title
              id={'title' + index}
              className={index === display ? 'active' : ''}
              key={'title' + index}
              onClick={() => onClickHandle(index)}
            >
              {t.title}
            </Title>
          )
        })}
      </TitleWrapper>
      <Body>{tabList[display].body}</Body>
    </div>
  )
}

const TitleWrapper = styled.ul`
  background-color: ${color.blue};
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`

const Title = styled.li`
  cursor: pointer;
  background-color: ${color.white};
  padding: 20px;
  display: flex;
  width: 100%;
  white-space: pre-line;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  border-left: 1px solid ${color.lightGray};
  border-top: 1px solid ${color.lightGray};
  border-bottom: 1px solid ${color.lightGray};
  :last-child {
    border-right: 1px solid ${color.lightGray};
  }
  &.active {
    margin-top: 5px;
    border-top: none;
    border-bottom: none;
  }
`
const Body = styled.div`
  font-size: 12px;
  padding: 20px;
  border-left: 1px solid ${color.lightGray};
  border-right: 1px solid ${color.lightGray};
  border-bottom: 1px solid ${color.lightGray};
`
