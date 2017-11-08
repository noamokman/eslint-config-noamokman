import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import {Text} from 'react-native'; // eslint-disable-line import/no-extraneous-dependencies

describe('test', function () {
  this.timeout(5000);

  it('case', () => {
    const x = <Text>{'lol'}</Text>;

    expect(x.text()).toBe('lol');
  });
});