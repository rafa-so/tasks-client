import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import List from './list/List';

export default class Task extends Component {
    render(){
        return(
            <Row>
                <Col xs={ {span: 8, offset: 2} } className="tasks_list">
                    <p className="title">To-Do</p>
                    <List tasks={ [
                        { title: 'Criar Header Criar Header Criar Header', done: false },
                        { title: 'Criar Header Criar Header Criar Header', done: false },
                        { title: 'Criar Header Criar Header Criar Header', done: false }
                    ] } />
                </Col>
                <Col xs={ {span: 8, offset: 2} } className="tasks_list">
                    <p className="title">Done</p>
                    <List tasks={ [
                        { title: 'Criar Header Criar Header Criar Header', done: true },
                        { title: 'Criar Header Criar Header Criar Header', done: true },
                        { title: 'Criar Header Criar Header Criar Header', done: true }
                    ] } />
                </Col>

            </Row>
        );
    }
}