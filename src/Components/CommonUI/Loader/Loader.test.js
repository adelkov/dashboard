import React from 'react';
import Loader from './Loader';
import renderer from 'react-test-renderer';



test('Loader displays its message', () => {
    const component = renderer.create(
        <Loader message="http://www.facebook.com" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    //
    // // manually trigger the callback
    // tree.props.onMouseLeave();
    //
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});
