import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    borderWidth: 2,
  },
  drawerContainer: { flex: 1, flexDirection: 'column', paddingTop: 10 },
  drawerListContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  drawerListTitle: {
    color: '#ffffff',
    fontSize: 20,
    paddingBottom: 8,
  },
  drawerListItem: {
    color: '#868e91',
    fontSize: 16,
    paddingBottom: 16,
  },
  drawerBreakline: {
    flex: 1,
    backgroundColor: '#868e91',
    height: 0.25,
  },
  drawerListOthers: {
    paddingTop: 8,
    color: '#868e91',
    fontSize: 18,
  },
});

export default styles;
