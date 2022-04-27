import styled from "styled-components";

function Modal(props) {
  return (
    <MyModal onClick={props.closeModalFunction}>
      <img src={props.image} alt="" />
    </MyModal>
  );
}

export default Modal;

const MyModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 90vh;
  }

  @media screen and (max-width: 900px) {
    img {
      width: 90%;
      height: 40vh;
    }
  }
`;
