import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import Add from './Add';

import '../Styles.css'
import {AiOutlineDelete} from 'react-icons/ai'


export default class Todo extends Component {

    constructor(){
        super()
        this.state={
            todosCollection:[]
        }
    }

    // mount the data if it is present
    async componentDidMount(){
        if(localStorage.length!==0){

            // get data from localStorage in array form
            let notesList = JSON.parse(localStorage.getItem("notesList"))

            // if notes is present in local storage then provide it to noteslist in state
            this.setState({todosCollection:notesList})
        }
    }

    // function to add a new note in todo app 
    addItemHandler = (todoItem) =>{
        
        // check if localStorage is empty or not
        if(localStorage.length===0){
            let newNote = [
                todoItem

            ]

            // create a localStorage array name notesList and add note to it
            localStorage.setItem("notesList", JSON.stringify(newNote))

            // get notesList from localStorage and store it inside the list array inside state 
            let data = JSON.parse(localStorage.getItem("notesList"))

            this.setState({todosCollection:data})
        }
        else{
            // get data from localStorage in array form
            let notesList = JSON.parse(localStorage.getItem("notesList"))

            // push new note inside data
            notesList.push(todoItem
                )

            // create a localStorage array name notesList and add note to it
            localStorage.setItem("notesList", JSON.stringify(notesList))

            // to update state on click

            const newList = [
                            ...this.state.todosCollection,
                            todoItem

                            ]

            this.setState({todosCollection: newList})

        }

    }

    // function to delete list from todo app
    deleteNote = (e) =>{


        let todosList = this.state.todosCollection
        let arrLength = todosList.length

        if(todosList[e]!==todosList[arrLength-1]){

            let itemToDelete = todosList[e];
            let lastItem = todosList[arrLength-1];
            // let temp = itemToDelete;

            todosList[e]=lastItem;
            todosList[arrLength-1]=itemToDelete;

            todosList.pop()

            localStorage.setItem("notesList", JSON.stringify(todosList))

            this.setState({todosCollection: todosList})

        }else{
            
            todosList.pop()

            localStorage.setItem("notesList", JSON.stringify(todosList))

            this.setState({todosCollection: todosList})
        }

    }

    render() {        

        // map all the notes present in state
        
        let todoList = this.state.todosCollection!=='' ? this.state.todosCollection.map((list,index) =>{
            //loop over the lists of todo list
            return(<ListGroup.Item key={uuid()} className='mt-1' style={{borderRadius:'0.5rem'}}>
                        {list.work}
                        <div className='icon' onClick={() => this.deleteNote(index)}><AiOutlineDelete/></div>                        
                    </ListGroup.Item>)
        }).reverse() : ''

        

        
        return (
            <div data-testid="todo">
                <div>
                <Card className='bg-dark' style={{ width: '400px',maxHeight:'90vh' , margin: '10px auto', padding: '20px' }}>
                    <Card.Title className="mb-3 text-white" as="h1">Todo App</Card.Title>
                    <Add addItem={this.addItemHandler}/>
                    <div style={{height:'100%' ,overflow:'auto'}}>
                        <ListGroup data-testid="list" variant="flush" className='keep-scrolling mb-1'>
                            {/* display list of notes */}
                            {todoList}
                            
                        </ListGroup>
                    </div>
                </Card>
                </div>
            </div>

        )
    }
}