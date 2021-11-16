import React from "react";
import { Modal } from "react-bootstrap";

const ModalCustom = (props) => {
  const NOT_A_VALUE = "n/a";

  const propsKeysToDisplayNames = [
    { key: "birth_year", displayName: "Birth year" },
    { key: "eye_color", displayName: "Eye color" },
    { key: "gender", displayName: "Gender" },
    { key: "hair_color", displayName: "Hair color" },
  ];
 
  const propertyNameByIndex = (index) => {
    return propsKeysToDisplayNames[index].displayName;
  };

  const propertyValueByIndex = (index) => {
    const key = propsKeysToDisplayNames[index].key; // Get key by index
    return props[key]; // Get value from props object
  };

  const isPropertyValueExistByIndex = (index) => {
    return propertyValueByIndex(index) !== NOT_A_VALUE;
  };

  const renderDescription = (index) => {
    if (isPropertyValueExistByIndex(index)) {
      return (
        <p key={index}>
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
        {propsKeysToDisplayNames.map((item, index) => {
          return renderDescription(index);
        })}
      </Modal.Body>
    </Modal>
  );
};

export default ModalCustom;
