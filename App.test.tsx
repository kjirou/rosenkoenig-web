import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  test('it has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect((tree as any).children.length).toBe(1);
  });
});
