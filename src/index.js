import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  highlight: {
    fontWeight: '700',
  },
});

console.tron.warn('Hello World fdfsfsf');
const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
