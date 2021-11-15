import React from 'react'
import {Card} from 'react-bootstrap'
import styles from './CardItem.module.css'

const CardItem = ({name, linkTo}) => {
  return (
    <Card
      bg="light"
      text="dark"
      style={{ width: "13rem", cursor: "poniter" }}
      className={`${styles.creature_card} mb-2`}
    >
      <Card.Body>
        <Card.Title className={styles.title}>
          {" "}
          {name}{" "}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardItem
