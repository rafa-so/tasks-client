import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import List from './list/List';

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tasks: [{}],
        };

        this.loadTasks = this.loadTasks.bind(this);
    }

    async loadTasks(){
        let response = await fetch('http://localhost:3001/tasks');
        const tasks  = await response.json();
        this.setState({ tasks, loading: false });
    }

    componentDidMount(){
        this.loadTasks();
    }

    render(){
        if (this.state.loading) {
            return(
                <Row>
                    <Col xs={ {span: 8, offset: 2} } className="tasks_list">
                        Carregando...
                    </Col>
                </Row>
            );
        } else {
            return(
                <Row>
                    <Col xs={ {span: 8, offset: 2} } className="tasks_list">
                        <p className="title">To-Do</p>
                        <List tasks={ this.state.tasks.filter((task) => task.done !== true) } />
                    </Col>
                    <Col xs={ {span: 8, offset: 2} } className="tasks_list">
                        <p className="title">Done</p>
                        <List tasks={ this.state.tasks.filter((task) => task.done === true) } />
                    </Col>
                </Row>
            );
        }
    }
}