import React, { FC, useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'

import { ITodoItem, TodoStatus } from '@/store/types'
import { connectBatchThunkTo, rdxConnect } from './hoc/todo'


const Index: FC<rdxConnect> = ({ todo: { list }, _addItem, _removeItem, _itemStatusTransition }) => {
  const [title, setTitle] = useState<string>()

  const onAddItem = () => {
    if (title && title.length > 0) {
      const item: ITodoItem = {
        id: list.length + 1,
        title: title,
        status: TodoStatus.PENDING
      }
      _addItem(item)
      setTitle('')
    }
  }

  const renderItem = ({ item: { id, title, status }}) => (
    <View key={`item-${id}`} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={{ fontSize: 15, color: '#c0c0c0', textTransform: 'uppercase' }}>{`[${TodoStatus[status]}]`}</Text>
        <Text style={{ flex: 1, marginLeft: 5 }}>{title}</Text>
      </View>
      <Button
          onPress={() => _removeItem(id)}
          title="Remove"
          color="#FF4B52"
          accessibilityLabel="Learn more about this purple button"
        />
    </View>
  )

  return (
    <View style={{ height: '100%' }}>
      <View>
        <TextInput
          autoFocus
          placeholder="Item title"
          value={title}
          onChangeText={setTitle}
          style={{ borderWidth: 1, borderColor: '#c0c0c0', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}
        />
        <Button
          onPress={onAddItem}
          title="Add Item"
          color="#841584"
        />
        <Button
          onPress={() => _itemStatusTransition(1)}
          title="Comlete"
          color="#25DB68"
        />
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        style={{ borderTopWidth: 1, borderColor: 'grey',  paddingTop: 20, marginTop: 50 }}
        scrollEnabled
      />
    </View>
  )
}

export default connectBatchThunkTo(Index)