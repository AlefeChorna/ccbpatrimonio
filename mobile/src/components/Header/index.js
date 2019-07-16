import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  StatusBar,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import styles from './styles';

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.searchMarginLeftAnimated =
      new Animated.Value(styles.searchContainerMarginLeft.marginLeft);
  }

  state={
    showContainerSearch: false,
    searchText: '',
    showButtonDelete: false
  }

  _toogleAnimetedSearch = async () => {
    const { showContainerSearch } = this.state;
    const show = !showContainerSearch;

    if (!showContainerSearch) {
      await this.setState({
        showContainerSearch: true,
      })
    }

    if (show) {
      Animated.spring(this.searchMarginLeftAnimated, {
        toValue: 0,
        speed: 0.3,
        bounciness: 10,
      }).start();
    } else {
      Animated.timing(this.searchMarginLeftAnimated, {
        toValue: styles.searchContainerMarginLeft.marginLeft,
        duration: 450
      }).start(() => {
        this.setState({
          showContainerSearch: false,
          showButtonDelete: false,
          searchText: '',
        });
      });
    }
  }

  _toogleSearch = async () => {
    const { showContainerSearch } = this.state;
    const { animatedSearch } = this.props;

    if (animatedSearch) {
      this._toogleAnimetedSearch();
    } else {
      this.setState({
        showContainerSearch: !showContainerSearch,
        showButtonDelete: false,
        searchText: '',
      })
    }
  }

  _onChangeText = _prText => {
    const { onChangeText } = this.props;

    this.setState({
      searchText: _prText,
      showButtonDelete: _prText.length > 0
    });

    onChangeText && onChangeText(_prText);
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      const { showContainerSearch } = this.state;

      if (showContainerSearch) this._toogleSearch();

      return showContainerSearch;
    });
  }

  componentWillUnmount() {
    if (this.backHandler) this.backHandler.remove();
  }

  render() {
    const {
      showContainerSearch,
      searchText,
      showButtonDelete
    } = this.state;

    const {
      title,
      containerTitleStyle,
      showIconClose,
      onClose,
      showIconSearch,
      containerButtonSearch,
      showIconSave,
      animatedSearch,
      containerButtonSave,
      onSave,
      onChangeText,
    } = this.props;

    const Search = animatedSearch ? Animated.View : View;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        {!showContainerSearch &&
          <>
            <TouchableOpacity
              style={{ ...styles.containerButton, opacity: showIconClose ? 1 : 0 }}
              onPress={showIconClose ? () => onClose() : null}
            >
              {showIconClose && <Icon name="arrow-left" color="#FFF" size={28} />}
            </TouchableOpacity>

            <View style={[styles.containerContent, containerTitleStyle]}>
              <Text style={styles.title}>{title}</Text>
            </View>

            {showIconSearch
              ? <TouchableOpacity
                  style={[
                    styles.containerButton,
                    containerButtonSearch,
                  ]}
                  onPress={() => this._toogleSearch()}
                >
                  <Icon name="magnify" color="#FFF" size={26} />
                </TouchableOpacity>
              : <Icon style={styles.containerButton} name="magnify" color="transparent" />
            }

            {showIconSave &&
              <TouchableOpacity
                style={[
                  styles.containerButton,
                  containerButtonSave
                ]}
                onPress={() => onSave()}
              >
                <Icon name="check" color="#FFF" size={26} />
              </TouchableOpacity>
            }
          </>
        }

        {showContainerSearch &&
          <Search
            style={{
              marginLeft: animatedSearch
                ? this.searchMarginLeftAnimated
                : 0
            }}
          >
            <View style={styles.containerSearch}>
              <TouchableOpacity
                style={{ ...styles.containerButton }}
                onPress={() => this._toogleSearch()}
              >
                <Icon name="arrow-left" color="#FFF" size={25} />
              </TouchableOpacity>

              <TextInput
                style={styles.inputSearch}
                autoFocus
                placeholder="Digite algo para pesquisar..."
                placeholderTextColor="rgba(245, 245, 245, 0.3)"
                selectionColor='rgba(250, 250, 250, 0.7)'
                value={searchText}
                onChangeText={text => this._onChangeText(text)} />

              {showButtonDelete &&
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      searchText: '',
                      showButtonDelete: false,
                    });
                  }}
                  style={styles.buttonDelete}
                >
                  <Icon name="alpha-x-circle" color="#FFF" size={20} />
                </TouchableOpacity>
              }
            </View>
          </Search>
        }
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  containerTitleStyle: PropTypes.object,
  showIconClose: PropTypes.bool,
  animatedSearch: PropTypes.bool,
  onClose: PropTypes.func,
  showIconSearch: PropTypes.bool,
  containerButtonSearch: PropTypes.object,
  showIconSave: PropTypes.bool,
  containerButtonSave: PropTypes.object,
  onSave: PropTypes.func,
  onChangeText: PropTypes.func
}

Header.defaultProps = {
  animatedSearch: true,
}

export default Header;
