import React, { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";

const Login = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calling the login function and @useLogin hook with uname and password as arguments
    login({ uname, password })
      .then(async(res) => {
       await getVersion()
        notify("Login successful");
        navigate("/");
      })
      .catch(() => notify("Invalid username or password"));
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="div" mb={2}>
          Login
        </Typography>
        {/* Form for user login */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="uname"
            label="Username"
            name="uname"
            autoComplete="uname"
            autoFocus
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          {/* Input field for password */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Login button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
