import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";

const LogInSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(7, "Too short, minimum ${min} characters")
    .max(50, "Too long, maximum ${max} characters")
    .required("Required field"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.formWrap}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LogInSchema}
          onSubmit={handleSubmit}
        >
          <Form>
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
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}