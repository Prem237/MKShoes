import React from 'react'
import ReactDOM from 'react-dom';
import But from './Button';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer'
it('Render react',()=>
{
    const div=document.createElement('div');
    ReactDOM.render(<But></But>,div);  
})
it('render checking',()=>
{
    const {getByTestId}= render(<But label="click me please"></But>)
    getByTestId('button')
})
it('render check with expest',()=>{
    const {getByTestId}=render(<But label="click me please"></But>)
    expect(getByTestId('button')).toHaveTextContent('click me please');
})
it('Snapshot',()=>
{
    const tree =renderer.create(<But label='save'></But>).toJSON();
    expect(tree).toMatchSnapshot();
})