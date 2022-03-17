import ControlBoxLogin from '../../components/ControlBoxLogin'
import logoWhite from '../../../../assets/logo/logoFaviconWhite.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';

const registerSchema = Yup.object().shape(
  {
    username: Yup.string()
          .min(6, 'Por favor, usa un nombre de usuario más largo')
          .max(12, 'Nombre de usuario muy largo')
          .required('Nombre de usuario requerido'),
    email: Yup.string()
          .email('Email no válido')
          .required('Email requerido'),
    password: Yup.string()
          .min(8, 'Constraseña corta')
          .required('Contraseña requerida'),
    confirmPwd: Yup.string()
          .when('password', {
            is: (value:string) => (value && value.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref('password')],
              'Contraseñas no coinciden'
            )
          }).required('Debes confirmar tu contraseña'),
    role: Yup.string().oneOf(['user', 'admin'], 'Debes seleccionar el tipo de usuario')
    .required('Tipo de usuario requerido')
  }
)

const FormRegister = () => {

  const initialValues = {
		username: '',
		email: '',
		password: '',
		confirmPwd: '', // To confirm password
		role: 'user'
	}


  return (
    <ControlBoxLogin>
      <div className='flex flex-col'>
        <div className='w-56'>
          <img src={logoWhite} alt='Logo' />
        </div>
        <div>
          <Formik
          initialValues = {initialValues}

          // *** Validation Schema
          validationSchema={registerSchema}

          // *** onSubmit EVENT
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2))
          }}
        >
        {({values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
          <Form className='flex flex-col gap-2 mt-14 w-[300px] mb-[100px]'>
              <label className='text-sm font-bold' htmlFor='username'>Nombre de usuario</label>
              <Field
                className='mt-[-4px] bg-gradient-to-r from-slate-800 to-slate-900 py-2 px-2 rounded-lg border border-slate-700 outline-[0.05px] outline-slate-900'
                id='username'
                name='username'
                placeholder='Nombre de usuario'
              />

              {/* Username Errors */}
              {
                errors.username && touched.username && (
                  <ErrorMessage className='text-xs text-red-400' name='username' component='div'></ErrorMessage>
                )
              }

              <label className='mt-3 text-sm font-bold' htmlFor='email'>Email</label>
              <Field
                className='mt-[-4px] bg-gradient-to-r from-slate-800 to-slate-900 py-2 px-2 rounded-lg border border-slate-700 outline-[0.05px] outline-slate-900'
                id='email'
                name='email'
                placeholder='Email'
              />

              {/* Email Errors */}
              {
                errors.email && touched.email && (
                  <ErrorMessage className='text-xs text-red-400' name='email' component='div'></ErrorMessage>
                )
              }

              <label className='mt-3 text-sm font-bold' htmlFor='password'>Contraseña</label>
              <Field
                className='mt-[-4px] bg-gradient-to-r from-slate-800 to-slate-900 py-2 px-2 rounded-lg border border-slate-700 outline-[0.05px] outline-slate-900'
                id='password'
                name='password'
                placeholder='Contraseña'
                type='password'
              />
              
              {/* Password Errors */}
              {
                errors.password && touched.password && (
                    <ErrorMessage className='text-xs text-red-400' name='password' component='div'></ErrorMessage>
                )
              }

              <label className='mt-3 text-sm font-bold' htmlFor='confirmPwd'>Confirmar contraseña</label>
              <Field
                className='mt-[-4px] bg-gradient-to-r from-slate-800 to-slate-900 py-2 px-2 rounded-lg border border-slate-700 outline-[0.05px] outline-slate-900'
                id='confirmPwd'
                name='confirmPwd'
                placeholder='Vuelve a escribir tu contraseña'
                type='password'
              />

              {/* ConfirmPwd Errors */}
              {
                errors.confirmPwd && touched.confirmPwd && (
                    <ErrorMessage className='text-xs text-red-400' name='confirmPwd' component='div'></ErrorMessage>
                )
              }

              <div className='py-2'></div>

              {
                isSubmitting ?
                  (
                    <Button className='bg-gradient-to-r from-cyan-500 to-blue-500' color='primary' variant="contained">
                      Registrando...
                  </Button>
                  )
                :
                  (
                    <Button className='bg-gradient-to-r from-cyan-500 to-blue-500' type='submit' variant="contained">
                      Registrarse
                    </Button>
                  )
              }
            </Form>
          )}
          </Formik>
          <div className='flex flex-col items-center justify-center gap-3'>
            <h6>Si tienes ya una cuenta:</h6>
            <Button variant="outlined">¡Entra ahora!</Button>
          </div>
        </div>
      </div>
    </ControlBoxLogin>
  )
}

export default FormRegister