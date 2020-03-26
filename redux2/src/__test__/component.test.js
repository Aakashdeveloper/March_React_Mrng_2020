import React from 'react';
import Footer from '../component/Footer';
import { create } from 'react-test-renderer';

describe('SnapShot Component test',() => {
    test('Testing footer',() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})