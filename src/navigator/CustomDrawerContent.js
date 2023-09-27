import * as React from 'react';
import { Drawer } from 'react-native-paper';

const MyComponent = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      <Drawer.Item
        label="third Item"
        active={active === 'third'}
        onPress={() => setActive('third')}
      />
      <Drawer.Item
        label="fourth Item"
        active={active === 'fourth'}
        onPress={() => setActive('fourth')}
      />
      <Drawer.Item
        label="fifth Item"
        active={active === 'fifth'}
        onPress={() => setActive('fifth')}
      />

    </Drawer.Section>
  );
};

export default MyComponent;