import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import ModeProvider, { ModeContext } from './index';

describe('Mode Context', () => {
  test('provides initial state from context', () => {
    render( //may have to return when testing function....
      <ModeProvider>
        <ModeContext.Consumer>
          {
            ({ mode }) => (  //destructuring state from function to get to mode...(light or dark, basically)
              <>
                <h2>ModeProvider Initial State</h2>
                <h3 data-testid="mode-test">{mode} mode from context!</h3>
              </>
            )
          }
        </ModeContext.Consumer>
      </ModeProvider>
    );

    const h3 = screen.getByTestId('mode-test');
    expect(h3).toHaveTextContent('light mode from context!')
  })
})