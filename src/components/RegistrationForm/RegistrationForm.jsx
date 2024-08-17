import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "../RegistrationForm/RegistrationForm.module.css";

const RegistrarionSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, minimum ${min} characters")
    .max(50, "Too long, maximum ${max} characters")
    .required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(7, "Too short, minimum ${min} characters")
    .max(50, "Too long, maximum ${max} characters")
    .required("Required field"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm;
  };

  return (
    <div className={css.container}>
      <div className={css.formWrap}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={RegistrarionSchema}
          onSubmit={handleSubmit}
        >
          <Form action="">
            <div className={css.fieldWrap}>
              <label htmlFor="name" className={css.label}>
                <span className={css.span}>Name:</span>
                <Field type="text" name="name" className={css.field} />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="div"
                />
              </label>
            </div>
            <div className={css.fieldWrap}>
              <label htmlFor="email" className={css.label}>
                <span className={css.span}>Email:</span>
                <Field type="email" name="email" className={css.field} />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="div"
                />
              </label>
            </div>
            <div className={css.fieldWrap}>
              <label htmlFor="password" className={css.label}>
                <span className={css.span}>Password:</span>
                <Field type="password" name="password" className={css.field} />
                <ErrorMessage
                  className={css.error}
                  name="password"
                  component="div"
                />
              </label>
            </div>
            <button type="submit" className={css.button}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}