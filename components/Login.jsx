import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LoginForm from "./LoginForm"
import {useState} from "react";
import {Modal} from "@mui/material";

const Login = ({ authenticate,logout }) => {

    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

  return (
    <>

      <IconButton
        onClick={handleOpen}
        aria-label="fingerprint"
        color="secondary"
        sx={{
          ":hover": {
            color: "#69f0ae",
            bgcolor: "#2bbd7e",
          },
          color: "black",
          height: 60,
          width: 60,
          marginTop: 10,
          marginLeft: 20,
        }}
      >
        <Fingerprint sx={{ fontSize: 60 }} />
      </IconButton>
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <LoginForm></LoginForm>
        </Modal>
    </>
  );
};

export default Login;
