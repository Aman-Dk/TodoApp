import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import Add from './Add';


export default class Todo extends Component {

    constructor(){
        super()
        this.state={
            lists:[

                {
                    work:'set goals for this week',
                },
                {
                    work:'do some exercise',
                }

            ]
        }
    }

    //add received new item from 'Add' to the todo lists
    addItemHandler = (newItem) =>{

        const newList = [
            ...this.state.lists,
            newItem
        ]

        this.setState({lists: newList})
      
    }

    render() {

        let todoList = this.state.lists.map((list,index) =>{
            //loop over the lists of todo list
            return(<ListGroup.Item key={index}>{list.work}</ListGroup.Item>)
        })
        
        return (
            <div>
                <div>
                <Card className='bg-dark' style={{ width: '400px', margin: '30px auto', padding: '20px' }}>
                    <Card.Title className="mb-3 text-white" as="h1">Todo App</Card.Title>
                    <Add addItem={this.addItemHandler}/>
                    <div>
                        <ListGroup variant="flush" style={{borderRadius:'1rem'}}>
                            {todoList}
                        </ListGroup>
                    </div>
                </Card>
                </div>
            </div>

        )
    }
}