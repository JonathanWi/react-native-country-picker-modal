// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import { getWidthPercent } from './ratio';

const styles = StyleSheet.create({
  closeButton: {
    height: 48,
    width: getWidthPercent(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 35,
    lineHeight: 35,
    fontWeight: '300'
  },
});

const CloseButton = (props) => (
  <View style={styles.closeButton}>
    <TouchableOpacity
      {...props}
    >
      <Text style={[styles.closeButtonText, props.closeButtonTextStyles]}>×</Text>
    </TouchableOpacity>
  </View>
);


export default CloseButton;
