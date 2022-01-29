import React, { useState,useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Modal,
  Fade,
  Backdrop,
  InputAdornment,

} from "@material-ui/core";
import "./Modal.css";
import { AccountCircle, Email, Phone,Message,Subject } from "@material-ui/icons";
import emailjs from '@emailjs/browser';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(to right top, #d8ff1e, #e8e800, #f4d200, #fbbb00, #fea400, #fe9e10, #fe971b, #fe9123, #fd9934, #fda143, #fca951, #fbb05f)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 500,
    height: 320,
    outline: "none",
  },
}));

export default function TransitionsModal({ open, setOpen }) {
  const classes = useStyles();
  const formRef = useRef();
  const handleClose = () => {
    setOpen(false);
  };

  const [error, setError] = useState("");
  const [done, setDone] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5k5bkwr",
        "template_qbms3is",
        formRef.current,
        "user_gEVfidvSzR2puWXAowleq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form ref={formRef} onSubmit={handleSubmit}>
          <div className={classes.paper} >
            <h2 id="transition-modal-title" className="modal__title">
              Join with Me
            </h2>
            <TextField
              id="standard-basic"
              label="Name"
              name="user_name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}

            />

            <br />
            <TextField
              id="standard-basic"
              label="Subject"
              name="user_subject"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Subject />
                  </InputAdornment>
                ),
              }}

            />

            <br />
            <TextField
              id="standard-basic1"
              label="Email"
              name="user_email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              
            />
            <br />
            <TextField
              id="standard-basic2"
              label="Mobile No"
              name="user_mobileNo"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
              
            />
            <br />
            <TextField
              id="standard-basic2"
              label="Message"
              name="message"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Message />
                  </InputAdornment>
                ),
              }}

            />
            <br />
            {error && <p className="modal__error">{error}</p>}
            <button
              variant="outlined"
              className="modal__button"
            >
              Join
            </button>
            
          </div>
          {done && "Thank you..."}
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
