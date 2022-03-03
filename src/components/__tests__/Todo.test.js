import {render,screen} from '@testing-library/react'
import Todo from '../Todo';

// use npm run test for testing 

test('should render todo component', ()=> {
    render(<Todo/>);
    const todoElement = screen.getByTestId('todo');
    const listgroup = screen.getByTestId('list');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Add');
    expect(todoElement).toContainElement(listgroup);
})

