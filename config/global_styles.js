import EStyleSheet from 'react-native-extended-stylesheet';

export const colors = {
  good: '#00C618',
  cheap: '#05ACD3',
  fast: '#FF7A00',
  background: '#202020',
  errorText: '#FA3256'
};

EStyleSheet.build({
  $goodBrand: colors.good,
  $cheapBrand: colors.cheap,
  $fastBrand: colors.fast
});
