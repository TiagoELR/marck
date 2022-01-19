import moment from 'moment';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setList} from '../redux/actions';
import Tts from 'react-native-tts';

export const Marcador = ({navigation}) => {
  const image = require('../assets/fundo.jpg');
  const [id, setId] = useState(1);
  const [ptNos, setPtNos] = useState(0);
  const [ptEles, setPtEles] = useState(0);
  const [plNos, setPlNos] = useState(0);
  const [plEles, setPlEles] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTextCab, setModalTextCab] = useState('Vencedor');
  const [modalText, setModalText] = useState('');
  const {list} = useSelector(state => state.listReducer);
  const dispatch = useDispatch();

  Tts.setDefaultLanguage('pt-BR');

  const logList = (team, before, after, ponto) => {
    setId(id + 1);
    dispatch(
      setList([
        ...list,
        {
          id: id,
          team: team,
          before: before,
          ponto: ponto,
          after: after,
          date: moment(new Date()).format('DD/MM/YYYY - h:mm:ss', true),
        },
      ]),
    );
  };
  const falarPlacar = (team, nPonto) => {
    if (team === 'Nós') {
      Tts.speak(
        nPonto +
          ' Ponto para ' +
          team +
          ' o placar está ' +
          (ptNos + nPonto) +
          ' a ' +
          ptEles,
      );
    } else {
      Tts.speak(
        nPonto +
          ' Ponto para ' +
          team +
          ' o placar está ' +
          (ptEles + nPonto) +
          ' a ' +
          ptNos,
      );
    }
  };

  const onMarcarUmPontoParaNos = () => {
    falarPlacar('Nós', 1);
    if (isVencedor(ptNos + 1)) {
      logList('Nós', ptNos, ptNos + 1, 1);
      setPlNos(plNos + 1);
      isCampeao(plNos + 1, plEles);
      onZerarPontos();
      showModel('Nós');
      return;
    }
    setPtNos(ptNos + 1);
    logList('Nós', ptNos, ptNos + 1, 1);
  };
  const onMarcarUmPontoParaEles = () => {
    falarPlacar('Eles', 1);
    if (isVencedor(ptEles + 1)) {
      logList('Eles', ptEles, ptEles + 1, 1);
      setPlEles(plEles + 1);
      isCampeao(plNos, plEles + 1);
      onZerarPontos();
      showModel('Eles');
      return;
    }
    setPtEles(ptEles + 1);
    logList('Eles', ptEles, ptEles + 1, 1);
  };
  const onMarcarTresPontoParaNos = () => {
    falarPlacar('Nós', 3);
    if (isVencedor(ptNos + 3)) {
      logList('Nós', ptNos, ptNos + 3, 3);
      setPlNos(plNos + 1);
      isCampeao(plNos + 1, plEles);
      onZerarPontos();
      showModel('Nós');
      return;
    }
    setPtNos(ptNos + 3);
    logList('Nós', ptNos, ptNos + 3, 3);
  };
  const onMarcarTresPontoParaEles = () => {
    falarPlacar('Eles', 3);
    if (isVencedor(ptEles + 3)) {
      logList('Eles', ptEles, ptEles + 3, 3);
      setPlEles(plEles + 1);
      isCampeao(plNos, plEles + 1);
      onZerarPontos();
      showModel('Eles');
      return;
    }
    setPtEles(ptEles + 3);
    logList('Eles', ptEles, ptEles + 3, 3);
  };
  const onMenosUmParaNos = () => {
    if (ptNos > 0) {
      Tts.speak('Menos um ponto para nós!');
      setPtNos(ptNos - 1);
    }
  };
  const onMenosUmParaEles = () => {
    if (ptEles > 0) {
      Tts.speak('Menos um ponto para eles!');
      setPtEles(ptEles - 1);
    }
  };
  const onZerarPontos = () => {
    Tts.speak('Pontos zerados!');
    setPtNos(0);
    setPtEles(0);
  };
  const onZerarPlacar = () => {
    Tts.speak('Placar zerado!');
    setPlNos(0);
    setPlEles(0);
  };
  const isVencedor = ponto => {
    if (ponto >= 12) {
      return true;
    }
  };
  const showModel = team => {
    setModalText(team);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      setModalTextCab('Vencedor');
    }, 5000);
  };
  const isCampeao = (a, b) => {
    if ((a === 2 && b === 0) || (a === 2 && b === 1)) {
      onZerarPontos();
      setPlNos(0);
      setPlEles(0);
      setModalTextCab('Campeão');
      showModel('Nós');
    } else if ((a === 0 && b === 2) || (a === 1 && b === 2)) {
      onZerarPontos();
      setPlNos(0);
      setPlEles(0);
      setModalTextCab('Campeão');
      showModel('Eles');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainScreen}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalView}>
            <View style={styles.modalViewCard}>
              <Text style={styles.txt}>{modalTextCab}</Text>
              <Image style={styles.imageCard} source={image} />
              <Text style={styles.txt}>{modalText}</Text>
            </View>
          </View>
        </Modal>
        <ImageBackground style={styles.backImage} source={image}>
          <View style={styles.viewText}>
            <View style={styles.viewSecionText}>
              <Text style={styles.txt}>Nós</Text>
              <Text style={styles.txt}>Eles</Text>
            </View>
            <View style={styles.viewSecionText}>
              <Text style={styles.txtPl}>{plNos}</Text>
              <Text style={styles.txtPl}>{plEles}</Text>
            </View>
            <View style={styles.viewSecionTextPt}>
              <Text style={styles.txtPt}>{ptNos}</Text>
              <Text style={styles.txtPt}>{ptEles}</Text>
            </View>
          </View>
          <View style={styles.viewButton}>
            <View style={styles.viewSecionButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={onMarcarUmPontoParaNos}>
                <Text style={styles.txtButton}>+1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={onMarcarUmPontoParaEles}>
                <Text style={styles.txtButton}>+1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewSecionButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={onMarcarTresPontoParaNos}>
                <Text style={styles.txtButton}>+3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={onMarcarTresPontoParaEles}>
                <Text style={styles.txtButton}>+3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewSecionButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={onMenosUmParaNos}>
                <Text style={styles.txtButton}> -1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={onMenosUmParaEles}>
                <Text style={styles.txtButton}> -1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewSecionButton}>
              <TouchableOpacity style={styles.button} onPress={onZerarPontos}>
                <Text style={styles.txtButtonReset}>Zerar{'\n'}Ponto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onZerarPlacar}>
                <Text style={styles.txtButtonReset}>Zerar{'\n'}Placar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffe6cc',
  },
  mainScreen: {
    flex: 1,
  },
  viewText: {
    flex: 2,
  },
  viewSecionText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewSecionTextPt: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txt: {
    fontFamily: 'arial',
    fontSize: 40,
    textAlignVertical: 'center',
    color: '#800000',
    alignSelf: 'center',
  },
  txtPl: {
    fontFamily: 'arial',
    fontSize: 40,
    textAlignVertical: 'center',
    color: '#800000',
  },
  txtPt: {
    fontSize: 90,
    textAlignVertical: 'bottom',
    color: '#ffe6cc',
    alignSelf: 'center',
  },
  txtButton: {
    fontFamily: 'arial',
    fontSize: 40,
    textAlignVertical: 'center',
    backgroundColor: '#800000',
    padding: 20,
    borderRadius: 80,
    borderColor: '#ffe6cc',
    borderWidth: 6,
    color: '#ffe6cc',
  },
  txtButtonReset: {
    fontFamily: 'arial',
    fontSize: 25,
    textAlignVertical: 'center',
    backgroundColor: '#800000',
    textAlign: 'center',
    padding: 12,
    borderRadius: 10,
    color: '#ffe6cc',
    borderColor: '#ffe6cc',
    borderWidth: 6,
  },
  viewSecionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignSelf: 'center',
  },
  viewButton: {
    flex: 4,
  },
  backImage: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalViewCard: {
    width: 350,
    height: 360,
    backgroundColor: 'yellow',
    alignSelf: 'center',
    borderRadius: 10,
  },
  imageCard: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 300,
  },
});
