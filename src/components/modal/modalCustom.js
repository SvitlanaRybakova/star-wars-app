import React from "react";
import { Modal } from "react-bootstrap";

const ModalCustom = (props) => {
  const NOT_A_VALUE = "n/a";

  const displayNames = [
    { displayName: "Birth year", key: "birth_year" },
    { displayName: "Eye color", key: "eye_color" },
    { displayName: "Gender", key: "gender" },
    { displayName: "Hair color", key: "hair_color" },
  ];

  const propertyNameByIndex = (index) => {
    return displayNames[index].displayName;
  };
  const propertyValueByIndex = (index) => {
    return props[displayNames[index].key];
  };

  const isPropertyValueExistByIndex = (index) => {
    return propertyValueByIndex(index) !== NOT_A_VALUE;
  };
  const renderDescription = (index) => {
    if (isPropertyValueExistByIndex(index)) {
      return (
        <p>
          <span style={{ fontWeight: "bold" }}>
            {propertyNameByIndex(index)}:
          </span>
          &nbsp;
          {propertyValueByIndex(index)}
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <Modal
      size="lg"
      show={props.lgShow}
      onHide={() => props.setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {displayNames.map((item, index) => {
          return renderDescription(index);
        })}
      </Modal.Body>
    </Modal>
  );
};

export default ModalCustom;
