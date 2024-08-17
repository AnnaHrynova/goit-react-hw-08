import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { HiUser, HiPhone } from "react-icons/hi2";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, minimum ${min} characters")
    .max(50, "Too long, maximum ${max} characters")
    .required("Required field"),
  number: Yup.string()
    .min(3, "Too short, minimum ${min} characters")
    .max(50, "Too long, maximum ${max} characters")
    .required("Required field"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerSubmit = (values, actions) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (existingContact) {
      toast.error(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact({ name: values.name, number: values.number }));
      actions.resetForm();
      toast.success("Contact added successfully!");
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handlerSubmit}
      >
        <Form className={css.formWrap}>
          <div className={css.fieldWrap}>
            <label htmlFor="name" className={css.label}>
              Name
              <HiUser className={css.userIcon} title="contact icon" />
            </label>
            <Field
              id="name"
              name="name"
              className={css.field}
              type="text"
            />
            <ErrorMessage
              className={css.error}
              name="name"
              component="div"
            />
          </div>

          <div className={css.fieldWrap}>
            <label htmlFor="number" className={css.label}>
              Number
              <HiPhone className={css.phoneIcon} title="phone icon" />
            </label>
            <Field
              id="number"
              name="number"
              className={css.field}
              type="text"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="div"
            />
          </div>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
}
