import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..'

afterEach(cleanup);

describe('ContactForm is rendering', () => {
   it('renders', () => {
      render(<ContactForm />);
   });

   it('matches Snapshot', () => {
      const {asFragment} = render(<ContactForm />);
      expect(asFragment()).toMatchSnapshot();
   })

   it('prints title', () => {
      const {getByTestId} = render(<ContactForm />);
      expect(getByTestId('contact')).toHaveTextContent('Contact me');
      expect(getByTestId('subBtn')).toHaveTextContent('Submit');
   })

})