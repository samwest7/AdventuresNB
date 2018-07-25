import React from 'react';
import { MemoryRouter } from 'react-router';
import chai, { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import AppBarMenu from './AppBarMenu.presentation';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());

describe('AppBarMenu Component', () => {
  const wrapper = mount(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <MemoryRouter>
        <AppBarMenu />
      </MemoryRouter>
    </MuiThemeProvider>
  );

  it('shows menu with menu items', () => {
    expect(wrapper.find('MenuItem')).to.have.length(2);

    // first menu item is Map
    expect(wrapper.find('MenuItem').at(0)).to.contain.text('Map');

    // second menu item is Adventures
    expect(wrapper.find('MenuItem').at(1)).to.contain.text('Clinic List');
  });
});
