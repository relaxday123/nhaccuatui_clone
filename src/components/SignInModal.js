import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import "./SignInModal.css";
import { useState } from "react";

const SignInModal = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30rem",
    // bgcolor: "#18222d",
    border: "none",
    boxShadow: 24,
  };

  const [usernameIsFocus, setUsernameIsFocus] = useState(false);

  const [passwordIsFocus, setPasswordIsFocus] = useState(false);

  const handleUsernameOnFocus = () => {
    setUsernameIsFocus(true);
  };

  const handleUsernameOnBlur = () => {
    setUsernameIsFocus(false);
  };

  const handlePasswordOnFocus = () => {
    setPasswordIsFocus(true);
  };

  const handlePasswordOnBlur = () => {
    setPasswordIsFocus(false);
  };

  return (
    <div>
      <Modal
        open={props.show}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ backgroundColor: "transparent" }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "4rem",
            }}
          >
            Đăng nhập
          </Typography>
          <AiOutlineClose style={{ position: "absolute", right: "1rem", top: "1rem", fontSize: "1.8rem", cursor: "pointer"}} onClick={props.handleClose}/>
          <hr style={{ width: "99.4%", textAlign: "center", opacity: ".2" }} />
          <FormControl
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "2rem",
              width: "100%",
            }}
          >
            <div>
              <Box
                sx={{
                  paddingBottom: "1rem",
                  width: "20rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Input
                  id="email"
                  className="username-input"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRight: "1px solid rgba(255, 255, 255, .1)",
                          padding: "0.7rem 0",
                          paddingRight: "0.5rem",
                        }}
                      />
                    </InputAdornment>
                  }
                  disableUnderline
                  placeholder="Nhập tên đăng nhập"
                  required
                  fullWidth
                  type="text"
                  name="email"
                  onFocus={handleUsernameOnFocus}
                  onBlur={handleUsernameOnBlur}
                  style={
                    usernameIsFocus
                      ? {
                          border: "1px solid #2f80ed",
                        }
                      : {
                          border: "1px solid rgba(255, 255, 255, .1)",
                        }
                  }
                />
              </Box>
              <Box
                sx={{
                  paddingBottom: "1rem",
                  width: "20rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Input
                  id="password"
                  className="password-input"
                  startAdornment={
                    <InputAdornment position="start">
                      <KeyboardIcon
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRight: "1px solid rgba(255, 255, 255, .1)",
                          padding: "0.7rem 0",
                          paddingRight: "0.5rem",
                        }}
                      />
                    </InputAdornment>
                  }
                  disableUnderline
                  placeholder="Nhập mật khẩu"
                  type="password"
                  required
                  fullWidth
                  name="password"
                  onFocus={handlePasswordOnFocus}
                  onBlur={handlePasswordOnBlur}
                  style={
                    passwordIsFocus
                      ? {
                          border: "1px solid #2f80ed",
                        }
                      : {
                          border: "1px solid rgba(255, 255, 255, .1)",
                        }
                  }
                />
              </Box>
              <div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <input
                  type="checkbox"
                  id="acc-remember"
                  name="acc-remember"
                  value="acc-remember"
                  style={{ display: "inline", position: "relative" }}
                />
                <label for="acc-remember"> Ghi nhớ</label>
              </div>
              <button
                className="login-btn"
                style={{
                  width: "100%",
                  marginTop: "1.5rem",
                }}
              >
                Đăng nhập
              </button>
            </div>
            <div
              style={{
                height: "4.7rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(35, 44, 54)",
                marginTop: "1.5rem",
              }}
            >
              <span
                style={{
                  backgroundColor: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Hoặc đăng nhập bằng:{" "}
                <FaFacebookF
                  style={{
                    backgroundColor: "#27323c",
                    borderRadius: "2rem",
                    fontSize: "1.5rem",
                    padding: "0.5rem 0.8rem",
                    marginLeft: "1rem",
                  }}
                  className="fb-ic"
                />{" "}
                <FcGoogle
                  style={{
                    backgroundColor: "#27323c",
                    borderRadius: "2rem",
                    fontSize: "1.5rem",
                    padding: "0.5rem 0.8rem",
                    marginLeft: "1rem",
                  }}
                />
              </span>
            </div>
            <div style={{ margin: "2.5rem", fontSize: "14px" }}>
              Bạn chưa có tài khoản NCT ID?{" "}
              <span>
                <a style={{ color: "#2DAAEA" }} href="/" onClick={() => {}}>
                  Đăng ký ngay
                </a>
              </span>
            </div>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default SignInModal;
