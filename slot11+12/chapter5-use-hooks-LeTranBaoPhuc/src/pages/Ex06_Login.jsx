import { useReducer, useState } from 'react'
import { Card, Form, Button, Alert, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { listOfUser } from '../data/userData'

const initialState = {
  values: { username: '', password: '' },
  error: '',
  submitted: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD': {
      const { field, value } = action.payload
      return {
        ...state,
        values: { ...state.values, [field]: value },
        error: '', // reset error when user types
      }
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        error: '',
        submitted: true,
      }
    }
    case 'LOGIN_ERROR': {
      return {
        ...state,
        error: 'Tài khoản hoặc mật khẩu không chính xác',
        submitted: false,
      }
    }
    case 'RESET': {
      return initialState
    }
    default:
      return state
  }
}

export default function Ex06_Login() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    dispatch({
      type: 'SET_FIELD',
      payload: { field: e.target.name, value: e.target.value }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { username, password } = state.values
    
    // Kiểm tra thông tin đăng nhập từ listOfUser
    const isValid = listOfUser.some(
      (user) => user.username === username && user.password === password
    )

    if (isValid) {
      dispatch({ type: 'LOGIN_SUCCESS' })
      setShowModal(true)
    } else {
      dispatch({ type: 'LOGIN_ERROR' })
    }
  }

  function handleCloseModal() {
    setShowModal(false)
    navigate('/home') // Chuyển đến trang chủ sau khi đăng nhập thành công
  }

  return (
    <>
      <Card className="mx-auto" style={{ maxWidth: 400, marginTop: '50px' }}>
        <Card.Header><strong>Bài 6 – Đăng nhập</strong></Card.Header>
        <Card.Body>
          {state.error && <Alert variant="danger">{state.error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control
                name="username"
                value={state.values.username}
                onChange={handleChange}
                placeholder="Nhập tên đăng nhập"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={state.values.password}
                onChange={handleChange}
                placeholder="Nhập mật khẩu"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Đăng nhập
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Đăng nhập thành công! Nhấn OK để chuyển đến trang chủ.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
