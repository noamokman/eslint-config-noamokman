import React from 'react';
import Lol from './react';

describe('test', function () {
  this.timeout(5000);

  it('case', () => {
    const x = <Lol />;

    expect(x.text()).toBe('lol');
  });
});