import Tts from 'react-native-tts';
Tts.setDefaultLanguage('pt-BR');
export const falarPlacar = (team, nPonto, ptNos, ptEles) => {
  if (team === 'Nós') {
    if (ptNos + nPonto === 11 && ptEles < 11) {
      Tts.speak(
        ' Mão de onze para ' +
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
          (ptNos + nPonto) +
          ' a ' +
          ptEles,
      );
    }
  } else {
    if (ptEles + nPonto === 11 && ptNos < 11) {
      Tts.speak(
        ' Mão de onze para ' +
          team +
          ' o placar está ' +
          (ptEles + nPonto) +
          ' a ' +
          ptNos,
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
  }
};
export const isVencedor = ponto => {
  if (ponto >= 12) {
    return true;
  }
};
export const isCampeao = (a, b) => {
  if ((a === 2 && b === 0) || (a === 2 && b === 1)) {
    return true;
  } else if ((a === 0 && b === 2) || (a === 1 && b === 2)) {
    return false;
  }
};
