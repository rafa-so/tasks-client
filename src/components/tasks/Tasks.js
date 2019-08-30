import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CreateTask from './create_tasks/CreateTasks'

import List from './list/List';

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [{}],
        };

        this.loadTasks = this.loadTasks.bind(this);
    }

    async loadTasks(){
        let response = await fetch('http://localhost:3001/tasks');
        const tasks  = await response.json();
    }

    componentDidMount(){
        this.loadTasks();
    }

    render(){
        return(
            <Row>
                <Col xs={ {span: 8, offset: 2} } className="tasks_list">
                    <p className="title">To-Do</p>
                    <List loadTasks={this.loadTasks} 
                        tasks={ this.state.tasks.filter((task) => task.done !== true) } />
                    
                </Col>
                <Col xs={ {span: 8, offset: 2} } className="tasks_list">
                    <p className="title">Done</p>
                    <List loadTasks={this.loadTasks} tasks={ this.state.tasks.filter((task) => task.done === true) } />
                </Col>
            </Row>
        );
    }
}