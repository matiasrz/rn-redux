import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'

import { store } from '@/store'
import Index from './src'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <SafeAreaView style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Index />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}
