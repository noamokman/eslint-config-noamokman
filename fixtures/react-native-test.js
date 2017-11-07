import React from 'react';
import {Text} from 'react-native';

describe('test', function () {
  this.timeout(5000);

  it('case', () => {
    const x = <Text>{'lol'}</Text>;

    expect(x.text()).toBe('lol');
  });
});