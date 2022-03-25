import * as React from 'react';
import ControlBoxLogin from '../../components/ControlBoxLogin'
import logoWhite from '../../../../assets/logo/logoFaviconWhite.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

interface ValuesProps {
  email: string,
  password: string
}

const loginSchema = Yup.object().shape(
	{
		email: Yup.string()
					.email('Email no válido')
					.required('Email requerido'),
		password: Yup.string()
						.required('Contraseña requerida')
	}
)

const FormLogin = () => {

  const [checked, setChecked] = React.useState(true);

  const initialValues : ValuesProps = {
		email: '',
		password: '',
	}

  return (
    <ControlBoxLogin>
      <div className='flex flex-col items-center'>
        <div className='w-56'>
          <img src={logoWhite} alt='Logo' />
        </div>
        <div>
          <Formik
            initialValues = {initialValues}

            // *** Validation Schema
            validationSchema={loginSchema}

            // *** onSubmit EVENT
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 2000));
              alert(JSON.stringify(values, null, 2));
              // We save the data in the localStorage
              await localStorage.setItem('credentials', JSON.stringify(values));
            }}
          >

          {({values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
            <Form className='flex flex-col gap-2 mt-14 w-[300px] mb-[100px]'>
                <label className='text-sm font-bold' htmlFor='email'>Email</label>
                <Field
                  className='mt-[-4px] bg-gradient-to-r from-slate-800 to-slate-900 py-2 px-2 rounded-lg border border-slate-700 outline-[0.05px] outline-slate-900'
                  id='email'
                  name='email'
                  placeholder='Your email'
                />

                {/* Email Errors */}
                {
                  errors.email && touched.email && (
                    <ErrorMessage className='text-xs text-red-400' name='email' component='div'></ErrorMessage>
                  )
                }

                <label className='mt-3 text-sm font-bold' htmlFor='password'>Password</label>
                <Field
                  className='mt-[-4px] bg-gradient-to-r from-slate-800 to-slate-900 py-2 px-2 rounded-lg border border-slate-700 outline-[0.05px] outline-slate-900'
                  id='password'
                  name='password'
                  placeholder='Your password'
                  type='password'
                />
                
                {/* Password Errors */}
                {
                  errors.password && touched.password && (
                      <ErrorMessage className='text-xs text-red-400' name='password' component='div'></ErrorMessage>
                  )
                }

                <div className='flex flex-row items-center justify-between my-5'>
                  <label className='cursor-pointer flex flex-row justify-start items-center text-[12px]'>
                  <Checkbox
                    sx={{color: '#ccc'}}
                    checked={checked}
                    onChange={
                      (event: React.ChangeEvent<HTMLInputElement>) => {
                        setChecked(event.target.checked);
                      }
                    }
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                    <span className='font-bold text-cyan-500'>Recuérdame</span>
                  </label>
                  <span className='text-[12px] cursor-pointer'>¿No recuerdas tu contraseña?</span>
                </div>

                {
                  isSubmitting ?
                    (
                      <Button className='bg-gradient-to-r from-cyan-500 to-blue-500' color='primary' variant="contained">
                        Entrando...
                    </Button>
                    )
                  :
                    (
                      <Button className='bg-gradient-to-r from-cyan-500 to-blue-500' type='submit' variant="contained">
                        Entrar
                      </Button>
                    )
                }
              </Form>
          )}

          </Formik>
          <div className='flex flex-col items-center justify-center gap-3'>
            <h6>¿No tienes una cuenta aún?</h6>
            <Button variant="outlined"><Link to='/register'>¡Regístrate ahora!</Link></Button>
          </div>
        </div>
      </div>
    </ControlBoxLogin>
  )
}

export default FormLogin