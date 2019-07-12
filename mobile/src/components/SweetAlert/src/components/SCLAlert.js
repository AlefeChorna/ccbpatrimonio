import React from 'react'
import PropTypes from 'prop-types'

import {
  Modal,
  View,
  ViewPropTypes,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

import {
  SCLAlertHeader,
  SCLAlertTitle,
  SCLAlertSubtitle
} from '../components'

import variables from './../config/variables'

class SCLAlert extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    show: PropTypes.bool,
    cancellable: PropTypes.bool,
    onRequestClose: PropTypes.func.isRequired,
    overlayStyle: ViewPropTypes.style
  }

  static defaultProps = {
    children: null,
    show: false,
    cancellable: true,
    overlayStyle: {}
  }

  state = {
    show: false
  }

  componentDidMount () {
    this.props.show && this.show()
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.show !== this.state.show) {
      return this[this.props.show ? 'show' : 'hide']()
    }
  }

  /**
   * @description show modal
   * @return { Void }
   */
  show = () => {
    this.setState({ show: true })
  }

  /**
   * @description hide modal
   * @return { Void }
   */
  hide = async () => {
    this.setState({ show: false })
  }

  /**
   * @description callback after press in the overlay
   * @return { Void }
   */
  handleOnClose = () => {
    this.props.cancellable && this.props.onRequestClose()
  }

  render () {
    return (
      <Modal
        transparent
        animationType="slide"
        visible={this.state.show}
        onRequestClose={this.props.onRequestClose}
      >
        <View style={styles.inner}>
          <TouchableWithoutFeedback onPress={this.handleOnClose}>
            <View
              style={[
                styles.overlay,
                this.props.overlayStyle,
              ]}
            />
          </TouchableWithoutFeedback>
          <View
            style={[
              styles.contentContainer,
            ]}
          >
            <SCLAlertHeader
              {...this.props}
            />
            <View style={styles.innerContent}>
              <SCLAlertTitle
                {...this.props}
              />
              <SCLAlertSubtitle
                {...this.props}
              />
              <View style={styles.bodyContainer}>
                {this.props.children}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  inner: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: variables.containerPadding,
    backgroundColor: 'transparent'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: variables.overlayBackgroundColor,
    justifyContent: 'center',
    zIndex: 100
  },
  contentContainer: {
    flex: 1,
    zIndex: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    position: 'relative',
  },
  innerContent: {
    padding: variables.gutter,
    paddingTop: variables.gutter * 4,
    borderRadius: variables.baseBorderRadius,
    backgroundColor: variables.baseBackgroundColor,
    width: variables.contentWidth
  },
  bodyContainer: {
    marginTop: variables.gutter,
    justifyContent: 'flex-end'
  }
})

export default SCLAlert
