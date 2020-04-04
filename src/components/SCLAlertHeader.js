import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  ViewPropTypes,
  StyleSheet,
  Image
} from 'react-native'

import images from '../config/images'
import variables from '../config/variables'

import {
  themeType,
  defaultThemeType
} from '../config/types'

SCLAlertHeader.propTypes = {
  headerContainerStyles: ViewPropTypes.style,
  headerInnerStyles: ViewPropTypes.style,
  theme: themeType,
  headerIconComponent: PropTypes.node
}

SCLAlertHeader.defaultProps = {
  headerContainerStyles: {},
  headerInnerStyles: {},
  theme: defaultThemeType,
  headerIconComponent: null
}

function SCLAlertHeader(props) {
  return (
     <View style={[styles.container, styles.headerContainerStyles]}>
       <View style={[styles.container, styles.headerContainerStyles,{backgroundColor:variables.white,width:null,padding:4}]}>
         <View
            style={[
              styles.inner,
              styles.headerInnerStyles,
              {backgroundColor: variables[`${props.theme}Background`]}
            ]}
         >
           {!props.headerIconComponent && (
              <Image source={{uri: images[props.theme]}} style={styles.image}/>
           )}
           {props.headerIconComponent}
         </View>
       </View>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 150,
    width: '100%',
    alignItems: 'center',
    top: 0,
    borderRadius: variables.headerCircleSize,
  },
  inner: {
    width: variables.headerCircleSize,
    height: variables.headerCircleSize,
    borderRadius: variables.headerCircleSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 32,
    width: 32
  }
})

export default SCLAlertHeader
