import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ForgetPasswordModal({ open, handleClose, setOpen }) {
  const { resetPassword } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForgetPassword = (data) => {
    const email = data.email;
    resetPassword(email)
      .then(() => {
        toast.success("Reset successfully. Please check you email.");
        setOpen(false)
      })
      .catch((err) => {
        toast.error("Failed Password Reset");
        console.log(err);
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reset Password
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={handleSubmit(handleForgetPassword)}
          >
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              sx={{ my: "20px" }}
              name="email"
              type="email"
              {...register("email", { required: "Please fil the Email field" })}
            />
            <Button type="submit">Reset</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
