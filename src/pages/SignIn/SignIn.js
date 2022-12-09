import {
  Box,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Logo2 from "../../assets/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Facebook1 from "../../assets/icons/Facebook1.png";
import Google from "../../assets/icons/Google.png";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { configure } from "@testing-library/react";
import ForgetPasswordModal from "./ForgetPasswordModal/ForgetPasswordModal";

const SignIn = () => {
  const { googleSignIn, facebookSignIn, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
      .then((result) => {
        toast.success("Login Successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Login Failed!");
        console.error(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result?.user;
        toast.success("Successfully Sign In!");
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        toast.error("Login Failed");
        console.error(err);
      });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        toast.success("Successfully Sign In!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Login Failed");
        console.error(err);
      });
  };

  return (
    <>
      <Box
        sx={{
          mt: "150px",
          mb: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            borderRadius: "6px",
            width: "450px",
            boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.1)",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={handleSubmit(handleSignIn)}
          >
            <img
              src={Logo2}
              style={{ width: "150px", margin: "auto" }}
              alt=""
            />
            <Typography
              sx={{ fontSize: "28px", fontWeight: "600", textAlign: "center" }}
              color="textSecondary"
            >
              Welcome to Mesmerize!
            </Typography>
            <Typography
              sx={{ mt: "6px", mb: "26px", textAlign: "center" }}
              color="textSecondary"
            >
              Please sign in to your account and start the adventure
            </Typography>

            <label htmlFor="email" sx={{}} color="textSecondary">
              Email Address{" "}
              {errors?.email && (
                <Typography color="red" variant="small">
                  *{errors?.email?.message}
                </Typography>
              )}
            </label>

            <TextField
              id="email"
              label="Email"
              variant="outlined"
              sx={{ my: "20px" }}
              name="email"
              type="email"
              {...register("email", { required: "Please fil the Email field" })}
            />

            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <label
                htmlFor="password"
                style={{ display: "flex", justifyContent: "between" }}
              >
                Password{" "}
                {errors?.password && (
                  <Typography color="red" variant="small">
                    *{errors?.password?.message}
                  </Typography>
                )}
              </label>
              <span
                onClick={handleOpen}
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </span>
            </Box>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              sx={{ my: "20px" }}
              type="password"
              {...register("password", {
                required: "Please fil the password field",
              })}
            />
            <Box sx={{ mb: "10px" }}>
              <Checkbox id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </Box>
            <Button type="submit">Sign In</Button>
          </form>
          <Typography sx={{ my: "20px", textAlign: "center" }}>
            New on our platform? <Link to="/signup">Create an account</Link>
          </Typography>
          <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <Box sx={{ height: "1px", width: "100%", bgcolor: "gray" }} />
            or
            <Box sx={{ height: "1px", width: "100%", bgcolor: "gray" }} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", my: "30px" }}>
            <IconButton onClick={handleFacebookSignIn}>
              <img src={Facebook1} alt="" />
            </IconButton>
            <IconButton onClick={handleGoogleSignIn}>
              <img src={Google} alt="" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <ForgetPasswordModal
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
      ></ForgetPasswordModal>
    </>
  );
};

export default SignIn;
