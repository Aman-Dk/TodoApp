import React, { Component } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

export default class Add extends Component {
    constructor(){
        super()
        this.state={
            work:''
        }
    }
    //for storing input values 
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    //send new item to Todo via props
    submitHandler = (e) =>{

        if(this.state.work===''){
            alert('this field can"t be empty');
        }
        else{
            e.preventDefault()
            console.log(this.state)
            this.props.addItem(this.state)
            this.setState({work:''})
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <InputGroup className="mb-3">
                    <FormControl
                        type="text" name="work" 
                        placeholder="Enter Here"
                        onChange={this.changeHandler}
                        value={this.state.work}
                        required
                    />
                        <Button
                            className="btn-primary text-white"
                            variant="outline-secondary" 
                            type="submit">
                                Add
                        </Button>
                </InputGroup>
                </form>
            </div>
        )
    }
}
