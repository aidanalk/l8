import React, { useState } from 'react'
import {Row, Col, Form, Button, Container, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../../redux/actions'

function UserRegisterPage() {

    const {preloader} = useSelector(state => state.preloaderReducer)
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        password: ''
    })    

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    
    localStorage.setItem('savedData', JSON.stringify(user))

    const savedDataString = localStorage.getItem('savedData')
    const savedData = JSON.parse(savedDataString)

    const addUser = (event) => {
        event.preventDefault()

        if (user.name === '' || user.password === '' || user.email === '') {
            alert('Заполни все поля!')
            return
        } else if(savedData && savedData.id === user.id) {
            alert('вы уже сохранили данные')
            return
        } 
        
        dispatch(addUserAction(user))
        localStorage.setItem('savedData', user.name)
        
    }

    return (
        <Container>
        {preloader ?
        <Spinner animation='border' role='status' /> : 
        <Form onSubmit={addUser}>
            <Row>
                <Col lg={3}>
                    <Form.Group className='mb-3' controlId="name">
                        <Form.Control
                            type="text"
                            placeholder='name'
                            name='name'
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className='mb-3' controlId="password">
                        <Form.Control
                            type="text"
                            placeholder='password'
                            name='password'
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Button type='submit' variant='success' className='w-100'>
                        register user
                    </Button>
                </Col>
            </Row>
        </Form>
        }
        
      </Container>
    
  )
}

export default UserRegisterPage