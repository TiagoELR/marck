import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Licenca = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.txt}>
        ESTE SOFTWARE É FORNECIDO COM LICENÇA MIT {'\n'}
        Copyright © 2022 Tiago Eraldo Laska Rocha {'\n'}
        Copyright © 2016 Anton Krasov {'\n'} A permissão é concedida,
        gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e
        arquivos de documentação associados (o "Software"), para lidar com o
        Software sem restrição, incluindo, sem limitação, os direitos de usar,
        copiar, modificar, mesclar , publicar, distribuir, sublicenciar e / ou
        vender cópias do Software e permitir que as pessoas a quem o Software é
        fornecido o façam, sujeito às seguintes condições: O aviso de direitos
        autorais acima e este aviso de permissão devem ser incluídos em todas as
        cópias ou partes substanciais do Software.{'\n'} O SOFTWARE É FORNECIDO
        “NO ESTADO EM QUE SE ENCONTRA”, SEM QUALQUER TIPO DE GARANTIA, EXPRESSA
        OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE
        COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM
        NENHUMA HIPÓTESE OS AUTORES OU TITULARES DOS DIREITOS AUTORAIS SERÃO
        RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTRA RESPONSABILIDADE,
        SEJA EM UMA AÇÃO DE CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTE DE,
        FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO
        PROGRAMAS.
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff3e6',
  },
  txt: {
    fontSize: 14,
    padding: 20,
    width: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#800000',
  },
});
