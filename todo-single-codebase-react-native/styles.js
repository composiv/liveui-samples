const React = require('react-native');

const {StyleSheet} = React;

export default {
  listContainer: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#5885ff',
  },
  listFirstWrapper: {flex: 2, justifyContent: 'flex-end', paddingLeft: 20},
  listSecondWrapper: {
    flex: 3,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  addButtonLocation: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
    right: 20,
  },
  tasksHeader: {fontSize: 20, paddingLeft: 20, marginTop: 20},
  tasksView: {flex: 1, flexDirection: 'row'},
  trashBin: {flex: 0.12, marginTop: 20, paddingLeft: 20},
  tasks: {fontSize: 15, paddingLeft: 20, marginTop: 20, flex: 0.88},
  listNameHeader: {fontWeight: 'bold', fontSize: 30, color: 'white'},
  listCount: {
    fontSize: 15,
    fontWeight: '100',
    marginBottom: 20,
    color: 'white',
  },
};
