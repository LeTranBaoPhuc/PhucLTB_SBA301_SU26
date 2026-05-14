import './App.css'
import MyProfile from './components/MyProfile'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const students = [
    { name: 'Phuc', id: 'DE190423', avatar: '/images/Phuc.jpg' },
    { name: 'An', id: 'DE190424', avatar: '/images/Phuc.jpg' },
    { name: 'Binh', id: 'DE190425', avatar: '/images/Phuc.jpg' },
    { name: 'Chi', id: 'DE190426', avatar: '/images/Phuc.jpg' },
    { name: 'Dung', id: 'DE190427', avatar: '/images/Phuc.jpg' },
    { name: 'Huy', id: 'DE190428', avatar: '/images/Phuc.jpg' },
    { name: 'Khanh', id: 'DE190429', avatar: '/images/Phuc.jpg' },
    { name: 'Linh', id: 'DE190430', avatar: '/images/Phuc.jpg' },
    { name: 'Minh', id: 'DE190431', avatar: '/images/Phuc.jpg' },
    { name: 'Trang', id: 'DE190432', avatar: '/images/Phuc.jpg' }
  ];

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">List of Profiles</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {students.map((student, index) => (
          <Col key={index}>
            <MyProfile person={student} />
          </Col>
        ))}
      </Row>
    </Container>
  )

}

export default App