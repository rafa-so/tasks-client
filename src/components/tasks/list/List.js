import React, { Component } from 'react';

import Row   from 'react-bootstrap/Row'
import Card  from 'react-bootstrap/Card';
import Col  from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class List extends Component {

    async checkTask(task){
        let form = { task: {done: true} };
        await fetch(`http://localhost:3001/tasks/${task.id}`,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({task: {done: true} })
        })
        this.props.loadTasks();

    }
    
    async deleteTask(task) {
        if (window.confirm(`Deseja realmente deletar a tarefa: ${ task.title } `)) {
            await fetch(`http://localhost:3001/tasks/${task.id}`, { method: 'DELETE' });
            this.props.loadTasks();
        }    
    }

    render(){ 
        return(
            <div>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Table responsive>
                                    <tbody>
                                        { this.props.tasks.map((task, index) => {
                                            return (
                                                <tr key={ task.id }>
                                                    <td className="col-md-10">
                                                        { task.title }
                                                    </td>
                                                    <td>
                                                        { task.done === false ?
                                                            (
                                                                <a className="check" href="#" onClick={() => this.checkTask(task)}>
                                                                    <FontAwesomeIcon icon="check-circle" />
                                                                </a>
                                                            ) : null
                                                        }
                                                    </td>
                                                    <td>
                                                        <a className="delete" href="#" onClick={ () => this.deleteTask(task) }>
                                                            <FontAwesomeIcon icon="trash-alt" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        }) }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        ); 
    }
}