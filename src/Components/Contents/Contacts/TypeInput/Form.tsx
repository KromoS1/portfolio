import React, {FC, memo} from 'react';
import {Field, FormikProps, useFormik, withFormik} from 'formik';
import * as Yup from 'yup';
import style from '../ContactsStyle.module.scss'
import {StatusType} from './GetInTouch';

export interface ValuesType {
    email: string
    name: string
    subject: string
    message: string
}

interface FormFormikProps {
    statusSend: StatusType
    onSubmit: (formData: ValuesType) => void
}

interface MyFormProps {
    statusSend: StatusType
    onSubmit: (formData: ValuesType) => void
}

const Form: FC<FormFormikProps & FormikProps<ValuesType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            subject: Yup.string().required('Subject is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, {resetForm}) => {
            props.onSubmit(values);
            resetForm({});
        }
    })

    return (
        <div>
            <form name={'getInTouch'} onSubmit={formik.handleSubmit} >
                <div className={style.field}>
                    <Field className={style.fieldName}
                           placeholder={formik.errors.name && formik.touched.name ? formik.errors.name : 'Enter your name*'}
                           {...formik.getFieldProps('name')}
                    />
                </div>
                <div className={style.field}>
                    <Field className={style.fieldEmail}
                           placeholder={formik.errors.email && formik.touched.email ? formik.errors.email : 'Enter your email*'}
                           {...formik.getFieldProps('email')}
                    />
                </div>
                <div className={style.field}>
                    <Field className={style.fieldSubject}
                           placeholder={formik.errors.subject && formik.touched.subject ? formik.errors.subject : 'Enter your subject*'}
                           {...formik.getFieldProps('subject')}
                           error={formik.errors.subject !== undefined}

                    />
                </div>
                <div className={style.field}>
                    <Field className={style.fieldMessage}
                           render={() => (
                               <>
                                   <textarea cols={30} rows={6}
                                             placeholder={formik.errors.message && formik.touched.message
                                                 ? 'Message is required' : 'Enter your message*'}
                                             {...formik.getFieldProps('message')}
                                   />
                               </>
                           )}
                    />
                </div>
                <div className={style.field}>
                    <button type="submit">Send mail</button>
                </div>
            </form>
            {
                props.statusSend === 'loading' && <div className={style.status}>{props.statusSend}</div>
            }
            {
                props.statusSend === 'successes' && <div className={style.status}>{props.statusSend}</div>
            }
        </div>
    )
})

export const FormContainer = withFormik<MyFormProps, ValuesType>({
    mapPropsToValues: props => {
        return {
            email: '',
            name: '',
            subject: '',
            message: '',
            statusSend: props.statusSend,
            onSubmit: props.onSubmit
        };
    },
    handleSubmit: (values, form) => {
        form.props.onSubmit(values);
    },
})(Form);
