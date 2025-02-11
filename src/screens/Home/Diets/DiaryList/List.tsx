import * as React from 'react'

import Item, { Props as DiaryItem } from './Item'

import { ScrollView } from 'react-native'

import { checkIndexIsEven } from '../../../../helpers/someFunctions'

export interface Props {
  dietsItems: DiaryItem[]
  navigation?: any
}

export interface Dispatch {
  toMealsInDiet: (nav, id) => void
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  public render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        {this.renderItems()}
      </ScrollView>
    )
  }
  private onPressItem = (id: string) => {
    this.props.toMealsInDiet(this.props.navigation, id)
  }

  private renderItem = (item, index) => {
    const itemProps = {
      id: item.id,
      title: item.title,
      totalKK: item.totalKK,
      totalProtein: item.totalProtein,
      totalFat: item.totalFat,
      totalCRBH: item.totalCRBH,
      onPressItem: this.onPressItem,
    }

    return (
      <Item
        key={item.id}
        style={{
          paddingLeft: checkIndexIsEven(index) ? 20 : 5,
          paddingRight: checkIndexIsEven(index) ? 5 : 20,
        }}
        {...itemProps}
      />
    )
  }

  private renderItems = () => {
    return this.props.dietsItems.map((item, index) => {
      return this.renderItem(item, index)
    })
  }
}
