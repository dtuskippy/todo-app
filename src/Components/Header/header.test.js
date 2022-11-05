import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider from '../../Context/Settings';
import Header from './index';

describe('ToDo Component Tests', () => {
  test('render a header element as expected', () => {
    render(
      <SettingsProvider>
        <Header />
      </SettingsProvider>
    );
    
    let header = screen.getByTestId('todo-header');
    
    expect(header).toBeTruthy();
  })
})