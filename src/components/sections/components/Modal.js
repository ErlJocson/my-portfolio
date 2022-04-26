import styled from "styled-components";

function Modal(props) {
  return (
    <MyModal>
      <img src={props.image} alt="" />
    </MyModal>
  );
}

export default Modal;

const MyModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
