import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarTitle}>Memo App</Text>
          <Text style={styles.appBerRight}>Log Out</Text>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>Home Work</Text>
            <Text style={styles.memoListItemDate}>2021/11/26</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>Home Work</Text>
            <Text style={styles.memoListItemDate}>2021/11/26</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>Home Work</Text>
            <Text style={styles.memoListItemDate}>2021/11/26</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#2DD9FF',
    justifyContent: 'flex-end',
  },

  appBarInner: {
    alignItems: 'center',
  },

  appBerRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },

  appBarTitle: {
    margin: 8,
    fontSize: 24,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  memoListItemDate: {
    fontSize: 14,
    lineHeight: 16,
    color: '#848484',
  },

  circleButton: {
    backgroundColor: '#49D1EF',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
