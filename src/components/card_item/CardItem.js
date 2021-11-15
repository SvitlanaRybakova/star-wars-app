import React, { useState } from "react";
import { Card } from "react-bootstrap";

import ModalCustom from "../modal/modalCustom";
import styles from "./CardItem.module.css";

const CardItem = (props) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Card
        bg="light"
        text="dark"
        style={{ width: "13rem", cursor: "poniter" }}
        className={`${styles.creature_card} mb-2`}
        onClick={() => setLgShow(true)}
      >
        <Card.Body>
          <Card.Title className={styles.title}> {props.name} </Card.Title>
        </Card.Body>
      </Card>
      {lgShow && <ModalCustom setLgShow={setLgShow} lgShow={lgShow} {...props} />}
    </>
  );
};

export default CardItem;
