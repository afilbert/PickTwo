import EStyleSheet from 'react-native-extended-stylesheet';

export const colors = {
  good: '#2D882D',
  cheap: '#226666',
  fast: '#AA3939',
  background: '#202020',
  errorText: '#FA3256'
};

EStyleSheet.build({
  $goodBrand: colors.good,
  $cheapBrand: colors.cheap,
  $fastBrand: colors.fast
});
