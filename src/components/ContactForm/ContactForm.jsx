import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormikForm,
  Label,
  FormikField,
  ErrorText,
  FormBtn,
} from './ContactForm.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(6, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <FormikForm autoComplete="off">
        <Label>
          Name
          <FormikField type="text" name="name" />
          <ErrorText name="name" component="p" />
        </Label>
        <Label>
          Number
          <FormikField type="tel" name="number" />
          <ErrorText name="number" component="p" />
        </Label>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormikForm>
    </Formik>
  );
};
