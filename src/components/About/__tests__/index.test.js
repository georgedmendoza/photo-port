import React from 'react';
// cleanup remove components from dom so no memory leak happens
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import About component to test it
import About from '..';

afterEach(cleanup);

// declares which component is being tested
describe('About component', () => {
    // renders About test
    // First Test
    it('renders', () => {
        render(<About />);
    });
    // Second Test
    it('matches snapchot DOM node structure', () => {
        // returns snapshot of the About component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot(); // to see if snapshot matches
    })
})