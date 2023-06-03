import './card.css'
import PropTypes from 'prop-types';

export function Card(props) {
  Card.propTypes = { children: PropTypes.node.isRequired }

  return (
    <div className="card">
      {props.children}
    </div>
  )
}
