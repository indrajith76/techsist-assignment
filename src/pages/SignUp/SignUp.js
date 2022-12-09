import {
  Box,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Logo2 from "../../assets/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Facebook1 from "../../assets/icons/Facebook1.png";
import Google from "../../assets/icons/Google.png";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { googleSignIn, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [termBtn, setTermBtn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    const email = data.email;
    const name = data.name;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        navigate("/");
        updateUser(name);
      })
      .catch((err) => console.error(err));
  };

  const updateUser = (name) => {
    const profile = { displayName: name };
    updateUserProfile(profile)
      .then(() => {
        toast.success("Account created successfully");
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result?.user;
        toast.success("Successfully Sign In!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Login Failed");
        console.error(err);
      });
  };

  return (
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
          <img src={Logo2} style={{ width: "150px", margin: "auto" }} alt="" />
          <Typography
            sx={{ fontSize: "28px", fontWeight: "600", textAlign: "center" }}
            color="textSecondary"
          >
            Adventure starts here
          </Typography>
          <Typography
            sx={{ mt: "6px", mb: "26px", textAlign: "center" }}
            color="textSecondary"
          >
            Make your app management easy and fun!
          </Typography>

          <label htmlFor="name" sx={{}} color="textSecondary">
            Name{" "}
            {errors?.name && (
              <Typography color="red" variant="small">
                *{errors?.name?.message}
              </Typography>
            )}
          </label>

          <TextField
            id="name"
            label="Name"
            variant="outlined"
            sx={{ my: "20px" }}
            name="name"
            type="text"
            {...register("name", { required: "Please fil the name field" })}
          />

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

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            sx={{ my: "20px" }}
            type="password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should be 6 character.",
              },
              pattern: {
                value: /(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_])/,
                message:
                  "Password must have uppercase number and special character.",
              },
            })}
          />
          <Box sx={{ mb: "10px" }}>
            <Checkbox
              id="terms"
              name="terms"
              onChange={(e) => setTermBtn(e.target.checked)}
            />
            <label htmlFor="terms">I agree to privacy policy & terms</label>
          </Box>
          <Button type="submit" disabled={!termBtn}>
            Sign In
          </Button>
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
          <IconButton>
            <img src={Facebook1} alt="" />
          </IconButton>
          <IconButton onClick={handleGoogleSignIn}>
            <img src={Google} alt="" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
