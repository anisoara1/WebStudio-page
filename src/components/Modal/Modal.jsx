import React, { useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  Fade,
  Link,
  Button,
  Input,
} from '@mui/material';
import css from '../Modal/Modal.module.css';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const ModalForm = ({ open, handleClose }) => {
  const ariaLabel = { 'aria-label': 'description' };
  const [isHoveredFirstForm, setIsHoveredFirstForm] = useState(false);
  const [isHoveredSecondForm, setIsHoveredSecondForm] = useState(false);
  const [isHoveredThirdForm, setIsHoveredThirdForm] = useState(false);
  const [isHoveredFourthForm, setIsHoveredFourthForm] = useState(false);

  const handleMouseEnterFirstForm = () => {
    setIsHoveredFirstForm(true);
  };

  const handleMouseLeaveFirstForm = () => {
    setIsHoveredFirstForm(false);
  };

  const handleMouseEnterSecondForm = () => {
    setIsHoveredSecondForm(true);
  };

  const handleMouseLeaveSecondForm = () => {
    setIsHoveredSecondForm(false);
  };

  const handleMouseEnterThirdForm = () => {
    setIsHoveredThirdForm(true);
  };

  const handleMouseLeaveThirdForm = () => {
    setIsHoveredThirdForm(false);
  };

  const handleMouseEnterFourthForm = () => {
    setIsHoveredFourthForm(true);
  };

  const handleMouseLeaveFourthForm = () => {
    setIsHoveredFourthForm(false);
  };

  const firstForm = {
    height: '50px',
    width: '342px',
    border: `1px solid ${isHoveredFirstForm ? '#2196F3' : '#bdbdbd'}`,
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  const secondForm = {
    height: '50px',
    width: '342px',
    border: `1px solid ${isHoveredSecondForm ? '#2196F3' : '#bdbdbd'}`,
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '4px',
  };
  const thirdForm = {
    height: '50px',
    width: '342px',
    border: `1px solid ${isHoveredThirdForm ? '#2196F3' : '#bdbdbd'}`,
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  const fourthForm = {
    height: '120px',
    width: '342px',
    border: `1px solid ${isHoveredFourthForm ? '#2196F3' : '#bdbdbd'}`,
    cursor: 'pointer',
    padding: '0',
    borderRadius: '4px',
  };
  return (
    <div>
      <Modal
        position="relative"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box className={css.modal} sx={{ background: '#FFFFFF' }}>
            <Button onClose={handleClose} className={css.btn}>
              <CloseRoundedIcon className={css.closeIcon} />
            </Button>
            <Typography
              sx={{
                color: '#757575',
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '23px',
                letterSpacing: '0.03em',
                textAlign: 'center',
              }}
            >
              Leave your information and we'll call
              <br /> you back
            </Typography>
            <div>
              <Typography
                sx={{
                  color: '#757575',
                  marginBottom: '3px',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '14px',
                  letterSpacing: '0.01em',
                }}
              >
                Name
              </Typography>
              <FormControl
                autoComplete="off"
                style={firstForm}
                onMouseEnter={handleMouseEnterFirstForm}
                onMouseLeave={handleMouseLeaveFirstForm}
              >
                <Input
                  sx={{
                    fontSize: '16px',
                    paddingTop: '5px',
                    color: '#bdbdbd',
                  }}
                  name="name"
                  disableUnderline
                  startAdornment={
                    <InputAdornment
                      position="start"
                      sx={{ marginLeft: '30px', fontSize: '12px' }}
                    >
                      <PersonIcon
                        sx={{
                          color: isHoveredFirstForm ? '#2196F3' : '#bdbdbd',
                          width: '16px',
                          position: 'absolute',
                          top: '2px',
                          left: '11px',
                        }}
                      />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div>
              <Typography
                sx={{
                  color: '#757575',
                  marginBottom: '3px',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '14px',
                  letterSpacing: '0.01em',
                }}
              >
                Telephone
              </Typography>
              <FormControl
                autoComplete="off"
                style={secondForm}
                onMouseEnter={handleMouseEnterSecondForm}
                onMouseLeave={handleMouseLeaveSecondForm}
              >
                <Input
                  sx={{
                    fontSize: '16px',
                    paddingTop: '5px',
                    color: '#bdbdbd',
                  }}
                  name="telephone"
                  disableUnderline
                  startAdornment={
                    <InputAdornment
                      position="start"
                      sx={{ marginLeft: '30px' }}
                    >
                      <CallIcon
                        edge="start"
                        sx={{
                          color: isHoveredSecondForm ? '#2196F3' : '#bdbdbd',
                          width: '16px',
                          position: 'absolute',
                          top: '2px',
                          left: '11px',
                        }}
                      />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div>
              <Typography
                sx={{
                  color: '#757575',
                  marginBottom: '3px',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '14px',
                  letterSpacing: '0.01em',
                }}
              >
                E-mail
              </Typography>
              <FormControl
                autoComplete="off"
                style={thirdForm}
                onMouseEnter={handleMouseEnterThirdForm}
                onMouseLeave={handleMouseLeaveThirdForm}
              >
                <Input
                  sx={{
                    fontSize: '16px',
                    paddingTop: '5px',
                    color: '#bdbdbd',
                  }}
                  name="email"
                  disableUnderline
                  startAdornment={
                    <InputAdornment
                      position="start"
                      sx={{ marginLeft: '30px' }}
                    >
                      <MailOutlineIcon
                        edge="start"
                        sx={{
                          color: isHoveredThirdForm ? '#2196F3' : '#bdbdbd',
                          width: '16px',
                          position: 'absolute',
                          top: '2px',
                          left: '11px',
                        }}
                      />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div>
              <Typography
                sx={{
                  color: '#757575',
                  marginBottom: '3px',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '14px',
                  letterSpacing: '0.01em',
                }}
              >
                Comments
              </Typography>
              <FormControl
                autoComplete="off"
                style={fourthForm}
                onMouseEnter={handleMouseEnterFourthForm}
                onMouseLeave={handleMouseLeaveFourthForm}
              >
                <Input
                  placeholder="Enter the text"
                  inputProps={ariaLabel}
                  disableUnderline
                  name="text"
                  sx={{
                    marginLeft: '70px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '14px',
                    letterSpacing: '0.03em',
                    top: '5px',
                    left: '-50px',
                    color: '#bdbdbd',
                  }}
                />
              </FormControl>
            </div>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Checkbox defaultChecked size="small" name="chekbox" />
              <Typography
                sx={{
                  color: '#757575',
                  margin: '0',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '14px',
                  letterSpacing: '0.03em',
                }}
              >
                I agree with the letter and accept the
                <Link> Terms and Conditions</Link>
              </Typography>
            </Box>
            <Button
              sx={{
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '30px',
                letterSpacing: '0.06em',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textTransform: 'none',
                bgcolor: '#2196F3',
                width: '200px',
                height: '50px',
                borderRadius: '4px',
                color: ' hsla(0, 0%, 100%, 1)',
                padding: '0',
                '&:hover': {
                  bgcolor: '#188CE8',
                  cursor: 'pointer',
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
