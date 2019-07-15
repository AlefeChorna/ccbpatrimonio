import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  findNodeHandle
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import PhotoUpload from 'react-native-photo-upload';

import Header from '../../components/Header';

import { formatDate } from '../../helpers/format';

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

export default class AddFireExtinguisher extends Component {
  state={
    dropdownLabelChurch: 'Selecione uma igreja',
    extinguisherName: '',
    extinguisherError: '',
    dueDate: '',
    dueDateError: '',
    extinguisherImage: '',
  }

  _changeLabelDropdownChurch = () => {
    const { dropdownLabelChurch } = this.state;

    if (dropdownLabelChurch.indexOf('Selecione') !== -1) {
      this.setState({ dropdownLabelChurch: 'Igreja' });
    }
  }

  _scrollToInput = (reactNode, offset = 88) => {
    setTimeout(() => {
      const response = this.refs.scrool.getScrollResponder();

      response.scrollResponderScrollNativeHandleToKeyboard(
        reactNode,
        offset,
        true
      );
    }, 250);
  }

  _goBack = () => {
    const { navigation } = this.props;

    navigation.navigate('FireExtinguisher')
  }

  _handlerSaveFireExtinguisher = () => {
    const {
      extinguisherName,
      dueDate,
    } = this.state;

    if (!extinguisherName) {
      this.setState({ extinguisherError: 'Campo obrigatório' });
      return;
    }

    if (!dueDate) {
      this.setState({ dueDateError: 'Campo obrigatório' });
      return;
    }

    this._goBack();
  }

  render() {
    const {
      dropdownLabelChurch,
      extinguisherName,
      extinguisherError,
      dueDate,
      dueDateError,
      extinguisherImage
    } = this.state;

    return (
      <View style={styles.container}>
        <Header
          title="Adicionar Extintor"
          showIconClose
          showIconSave
          onClose={() => this._goBack()}
          onSave={() => this._handlerSaveFireExtinguisher()} />

        <ScrollView
          ref="scrool"
          extraScrollHeight={25}
          style={styles.content}
        >
          <PhotoUpload
            quality={100}
            imagePickerProps={{
              title: 'Selecione uma opção',
              takePhotoButtonTitle: 'Tirar uma foto',
              chooseFromLibraryButtonTitle: "Abrir minha galeria",
              cancelButtonTitle: 'Cancelar',
              allowsEditing: true,
              permissionDenied: {
                title: 'Permissão',
                text: 'Para poder tirar fotos com sua câmera e escolher imagens da sua biblioteca',
                reTryTitle: 'NÃO',
                okTitle: 'SIM',
              }
            }}
            containerStyle={styles.extinguisherPhotoContainer}
            onPhotoSelect={avatar => {
              if (avatar) {
                this.setState({ extinguisherImage: avatar });
                console.log('Image base64 string: ', avatar)
              }
            }}
          >
            <Image
              style={extinguisherImage
                ? styles.standardExtinguisherImage
                : styles.secundaryExtinguisherImage
              }
              resizeMode='cover'
              source={require('../../assets/take-photo.png')}
            />
          </PhotoUpload>

          <Dropdown
            label={dropdownLabelChurch}
            onChangeText={label => this._changeLabelDropdownChurch()}
            data={data} />

          <TextField
            label='Digite o nome do extintor'
            autoCorrect={false}
            error={extinguisherError}
            value={extinguisherName}
            maxLength={70}
            blurOnSubmit={false}
            returnKeyType="next"
            characterRestriction={70}
            tintColor={styles.labelColor.color}
            onFocus={event => {
              this._scrollToInput(findNodeHandle(event.target), 105)
            }}
            onSubmitEditing={() => this.dueDate.focus()}
            onChangeText={text => {
              this.setState({ extinguisherName: text, extinguisherError: '' })
            }} />

          <TextField
            ref={input => this.dueDate = input}
            label='Digite a data de vencimento'
            error={dueDateError}
            value={dueDate}
            maxLength={10}
            returnKeyType="done"
            keyboardType="number-pad"
            tintColor={styles.labelColor.color}
            onFocus={event => {
              this._scrollToInput(findNodeHandle (event.target));
            }}
            onChangeText={text =>{
              this.setState({ dueDate: formatDate(text), dueDateError: '' })
            }} />
        </ScrollView>
      </View>
    );
  }
}
