import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

import styles from './styles';

let data = [
  {
    value: 'Alvorada',
  }, {
    value: 'Marmeleiro',
  }, {
    value: 'Santa Terezinha',
  }, {
    value: 'Da luz',
  }, {
    value: 'São Francisco Xavier',
  },{
    value: 'Paranhos',
  }, {
    value: 'Três de Maio',
  }
];

export default class AddVerification extends Component {
  state={
    dropdownChurch: '',
    dropdownLabelChurch: 'Selecione uma igreja',
    dropdownErrorChurch: '',
    verificationName: '',
    verificationError: '',
  }

  _goBack = () => {
    const { navigation } = this.props;

    navigation.navigate('FireExtinguisher')
  }

  _changeLabelDropdownChurch = _prChurch => {
    const { dropdownLabelChurch } = this.state;

    if (dropdownLabelChurch.indexOf('Selecione') !== -1) {
      this.setState({
        dropdownChurch: _prChurch,
        dropdownLabelChurch: 'Igreja',
        dropdownErrorChurch: ''
      });
    }
  }

  _handlerSaveVerification = () => {
    const { verificationName, dropdownChurch } = this.state;
    const { navigation } = this.props;

    if (!dropdownChurch) {
      this.setState({ dropdownErrorChurch: 'Campo obrigatório' });

      return;
    }

    if (!verificationName) {
      this.setState({ verificationError: 'Campo obrigatório' });

      return;
    }

    navigation.navigate('AddItemsVerification');
  }

  render() {
    const {
      dropdownLabelChurch,
      dropdownErrorChurch,
      verificationName,
      verificationError
    } = this.state;

    return (
      <View style={styles.container}>
        <Header
          title="Adicionar Verificação"
          showIconClose
          onClose={this._goBack} />

        <ScrollView style={styles.content}>
          <TextField
            label='Data da verificação'
            autoCorrect={false}
            editable={false}
            value={'15/07/2019'}
            maxLength={10} />

          <Dropdown
            label={dropdownLabelChurch}
            error={dropdownErrorChurch}
            onChangeText={label => this._changeLabelDropdownChurch(label)}
            data={data} />

          <TextField
            label='Digite o nome da verificação'
            autoCorrect={false}
            error={verificationError}
            value={verificationName}
            maxLength={70}
            blurOnSubmit={true}
            returnKeyType="done"
            characterRestriction={70}
            tintColor={styles.labelColor.color}
            onSubmitEditing={() => {}}
            onChangeText={text => {
              this.setState({ verificationName: text, verificationError: '' })
            }} />
        </ScrollView>
        <View style={styles.containerButtonSave}>
          <TouchableOpacity
            style={styles.buttonSave}
            onPress={this._handlerSaveVerification}
          >
            <Icon name="arrow-right" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
