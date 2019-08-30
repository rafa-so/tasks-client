import React, { useState } from 'react';

import Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form   from 'react-bootstrap/Form';

export default function CreateTasks(props) {

    const [title, setTitle] = useState('');
    const [show, setShow] = useState('');

    const handleSubmit = ( async () => {
        await fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task: { title: title, done: false }
            })
        });

        setShow(false);
        setTitle('');
        props.loadTasks();
    } );

    return(
        <div>
            <Button onClick={ e => setShow(true) } 
                variant="dark" 
                className="float-right create_task_btn" >
                    + Tasks
            </Button>

            <Modal show={ show || false } onHide={ e => setShow(false) }>
                <Modal.Header closeButton>
                    <Modal.Title>Nova tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="email" 
                        placeholder="Tarefa nova aqui..." 
                        value={ title || '' } 
                        onChange={ e => setTitle(e.target.value) }/>
                </Modal.Body>
                <Modal.Footer>
                    <form onSubmit={ handleSubmit }>
                        <Button type="submit" variant="dark" type="submit">
                            Adicionar
                        </Button>
                    </form>
                </Modal.Footer>
            </Modal>
        </div>
    );
}