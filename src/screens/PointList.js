import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

export const PointList = ({navigation}) => {
  const {list} = useSelector(state => state.listReducer);

  const Item = ({prop}) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.txtItem}>
        {'ID: ' +
          prop.id +
          ' | Team: ' +
          prop.team +
          ' | Before: ' +
          prop.before +
          ' | Added: ' +
          prop.ponto +
          ' | After: ' +
          prop.after +
          ' | Data: ' +
          prop.date}
      </Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item prop={item} />;

  return (
    <View style={styles.mainView}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff3e6',
  },
  item: {
    height: 50,
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
  txtItem: {
    fontSize: 20,
    width: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#800000',
  },
});
