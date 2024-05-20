import { Formik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { registerEvent } from '../redux/operations';
import {
  StyledForm,
  StyledField,
  ErrorMessageStyled,
  SignUpButton,
  RadioGroup,
  RadioTitle,
  RadioField,
  RadioLabel,
} from './RegisterModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 566,
  height: 600,
  bgcolor: 'background.paper',
  borderRadius: 8,
  p: 6,
};

const ValidationSchema = Yup.object({
  fullName: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Full Name is required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  dateOfBirth: Yup.date().required('Date of Birth is required!'),
  heardAboutEvent: Yup.string().required('This field is required!'),
});

const RegisterModal = ({ open, setOpen, eventId }) => {
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '6%',
              left: '93%',
              transform: 'translate(-50%, -50%)',
              width: 32,
              height: 32,
              cursor: 'pointer',
            }}
          />
          <Typography id="modal-modal-title" variant="h4" component="h3">
            Event registration
          </Typography>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              dateOfBirth: '',
              heardAboutEvent: '',
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values, actions) => {
              dispatch(registerEvent({ ...values, eventId }));
              actions.resetForm();
              handleClose();
            }}
          >
            {({
              handleSubmit,
              errors,
              touched,
              handleBlur,
              handleChange,
              values,
            }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledField
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName ? (
                  <ErrorMessageStyled>{errors.fullName}</ErrorMessageStyled>
                ) : null}
                <StyledField
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <ErrorMessageStyled>{errors.email}</ErrorMessageStyled>
                ) : null}
                <StyledField
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  type="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateOfBirth}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.dateOfBirth && touched.dateOfBirth ? (
                  <ErrorMessageStyled>{errors.dateOfBirth}</ErrorMessageStyled>
                ) : null}
                <RadioTitle id="my-radio-group">
                  Where did you hear about this event?
                </RadioTitle>
                <RadioGroup role="group" aria-labelledby="my-radio-group">
                  <RadioLabel>
                    <RadioField type="radio" name="heardAboutEvent" value="1" />
                    Social Media
                  </RadioLabel>
                  <label>
                    <RadioField type="radio" name="heardAboutEvent" value="2" />
                    Friends
                  </label>
                  <label>
                    <RadioField type="radio" name="heardAboutEvent" value="3" />
                    Found myself
                  </label>
                </RadioGroup>
                {errors.heardAboutEvent && touched.heardAboutEvent ? (
                  <ErrorMessageStyled>
                    {errors.heardAboutEvent}
                  </ErrorMessageStyled>
                ) : null}
                <SignUpButton type="submit">Register</SignUpButton>
              </StyledForm>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
