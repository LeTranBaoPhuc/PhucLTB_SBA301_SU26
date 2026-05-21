//BÀI 2 — Elementary: Form Đăng Ký
//Mục tiêu:Quản lý nhiều state trong một form, validate dữ liệu, hiển thị thông báo lỗi.
//Kiến thức:`useState` với Object, controlled components, validation.
//Form đăng ký gồm: Họ tên, Email, Mật khẩu, Xác nhận mật khẩu. 
// Validate trước khi submit và hiển thị thông báo thành công.

import { useState } from 'react'
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap' // Thêm Alert từ react-bootstrap
import './RegistrationForm.css'

function RegistrationForm() {
    const [formData, setFormData] = useState({ // State để lưu dữ liệu form
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({}) // State để lưu lỗi validation
    const [successMessage, setSuccessMessage] = useState('') // Thêm State hiển thị thông báo thành công

    const handleChange = (e) => { // Cập nhật state khi người dùng nhập dữ liệu
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })

        // TỰ ĐỘNG TẮT Ô MÀU ĐỎ: Xóa lỗi của ô này ngay khi người dùng gõ phím
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '' // Gán lỗi của ô hiện tại thành rỗng
            })
        }

        // Xóa thông báo thành công nếu người dùng chỉnh sửa tiếp
        if (successMessage) setSuccessMessage('');
    }

    const validate = () => { // Hàm validate dữ liệu
        const newErrors = {}
        if (!formData.fullName) newErrors.fullName = 'Full name is required'

        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => { // Xử lý submit form
        e.preventDefault()
        if (validate()) {
            // THAY THẾ ALERT MẶC ĐỊNH: Set thông báo vào state để hiển thị trên giao diện
            setSuccessMessage('Registration successful! Welcome aboard.')

            setFormData({ // Reset form sau khi submit thành công
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            setErrors({}) // Xóa các lỗi cũ nếu có
        }
    }

    // handle Cancel button để reset form về trạng thái ban đầu
    const handleCancel = () => {
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        setErrors({})
        setSuccessMessage('') // Xóa thông báo thành công khi cancel
    }

    return (
        <div className="form-container">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={5}>

                        <div className="form-card">
                            <h2 className="form-title text-center">Registration Form</h2>

                            {/* Hiển thị alert thành công ngay trong Card nếu đăng ký hoàn tất */}
                            {successMessage && (
                                <Alert variant="success" className="text-center mb-4">
                                    {successMessage}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formFullName">
                                    <Form.Label className="form-label">Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.fullName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.fullName}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="form-label">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label className="form-label">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formConfirmPassword">
                                    <Form.Label className="form-label">Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        isInvalid={!!errors.confirmPassword}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.confirmPassword}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="button-group">
                                    <Button className="custom-btn btn-submit w-100" type="submit">
                                        Register
                                    </Button>
                                    <Button className="custom-btn btn-cancel w-100 mt-2" type="button" onClick={handleCancel}>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RegistrationForm;