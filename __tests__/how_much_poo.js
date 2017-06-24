import 'react-native';
import React from 'react';
import Severity from '../how_much_poo';
// import MapView from 'react-native-maps';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Severity/>
  );
});

