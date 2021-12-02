import ListGroup from 'react-bootstrap/ListGroup'
import { Dish } from '../types/interfaces'

interface DishCommentsProps {
  selectedDish?: Dish
}

const DishComments = (props: DishCommentsProps) => (
  <ListGroup>
    {props.selectedDish ? (
      props.selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments