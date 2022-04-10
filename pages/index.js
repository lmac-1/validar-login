import LoginCss from '../styles/Home.module.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Login() {
  /* 
    Register is for validation rules and messages
    handleSubmit engloba todo el formulario -> will receive the event with all the form data
    errors - will tell us all the errors we have in the form
    error.inputName will tell us error for that particular input */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (event) => {
    // to show all the data we will get through from the form
    console.log(event);
  };

  return (
    <>
      <div className={LoginCss.contenedor}>
        <div className={LoginCss.container} id="container">
          <div className={LoginCss.loginCentrado}>
            <div className="logo"></div>
            <h1>Inicia Sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={`${LoginCss.inputBonito} ${errors.email && LoginCss.error}`}>
                <label className={LoginCss.textoInput}>
                  <span className={LoginCss.contentName}>Correo</span>
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  /* This creates the validation rules for the email field */
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Necesitas este campo',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {/* Displays error me ssage for email field */}
                {errors.email && <span className={errors.email && LoginCss.mensajeError}>{errors.email.message}</span>}
              </div>
              <div className={`${LoginCss.inputBonito} ${errors.password && LoginCss.error}`}>
                <label className={LoginCss.textoInput}>
                  <span className={LoginCss.contentName}>Contraseña</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  /* This creates the validation rules for the email field */
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    minLength: {
                      value: 6,
                      message: 'La contraseña debe tener al menos 6 caracteres'
                    }
                  })}
                />
                {errors.password && <span className={errors.password && LoginCss.mensajeError}>{errors.password.message}</span>}
              </div>
              {/* <div className="aks-input-wrap">
                <input autoComplete="off" className="aks-input" type="checkbox" id="checkbox" name="checkbox" ref={register({ required: false })} />
                <label className="aks-input-label"  >Recordarme por 30 días</label>
            </div> */}

              <button
                type="submit"
                value="submit"
                className={`${LoginCss.btn}`}
              >
                {' '}
                Iniciar Sesión
              </button>
            </form>

            <div className="border"></div>
            <p>¿Aún no tienes cuenta?</p>
            <Link href="/registro" as="/registro">
              <a>¡Registrate!</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
