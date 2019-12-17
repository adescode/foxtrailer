/* eslint-disable no-use-before-define */
import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

const Loader = props => {
  const {loading} = props;
  return (
    <Modal transparent animationType="none" visible={loading}>
      <View style={styles.modalBackground}>
        <ActivityIndicator color={Colors.primary} animating={loading} />
      </View>
    </Modal>
  );
};
Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
