import Nav from '..';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const categories = [
   {name: 'portraits', description: 'portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
   // baseline test
   it('renders', () => {
      render(<Nav 
      categories = {categories}
      setCurrentCategory = {mockSetCurrentCategory}
      currentCategory = {mockCurrentCategory}
      />);
   });

   it('matches snapshot', () => {
      const { asFragment } = render(<Nav
      categories = {categories}
      setCurrentCategory = {mockSetCurrentCategory}
      currentCategory = {mockCurrentCategory} 
      />);
    
      expect(asFragment()).toMatchSnapshot();
    });

   //snapshot test
});

describe('emoji is visible', () => {
   it('inserts emoji into the h2', () => {
      // Arrange
      const {getByLabelText} = render(<Nav 
      categories = {categories}
      setCurrentCategory = {mockSetCurrentCategory}
      currentCategory = {mockCurrentCategory}
      />);
      // Assert
      expect(getByLabelText('camera')).toHaveTextContent('📸');
   });
});

describe('links are visible', () => {
   it('inserts text into the links', () => {
      const {getByTestId} = render(<Nav 
         categories = {categories}
         setCurrentCategory = {mockSetCurrentCategory}
         currentCategory = {mockCurrentCategory}
      />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
   });
});