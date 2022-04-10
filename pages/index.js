
import LoginCss from '../styles/Home.module.css'
import Link from 'next/link'



export default function Login() {

  return (
    <>
      <div className={LoginCss.contenedor}>

        <div className={LoginCss.container} id="container">
          <div className={LoginCss.loginCentrado}>
            <div className="logo">

            </div>
            <h1>Inicia Sesión</h1>
            <form>

              <div className={`${LoginCss.inputBonito}`}>
                <label className={LoginCss.textoInput}>
                  <span className={LoginCss.contentName}>
                    Correo
                  </span>
                </label>
                <input type="text" autoComplete="off" name="email" placeholder="ejemplo@gmail.com"/>
              </div>
              <div className={`${LoginCss.inputBonito}`}>
                <label className={LoginCss.textoInput}>
                  <span className={LoginCss.contentName}>
                    Contraseña
                  </span>
                </label>
                <input type="password" name="password" placeholder="Contraseña"
                />
                </div>
              {/* <div className="aks-input-wrap">
                <input autoComplete="off" className="aks-input" type="checkbox" id="checkbox" name="checkbox" ref={register({ required: false })} />
                <label className="aks-input-label"  >Recordarme por 30 días</label>
            </div> */}

              <button type="submit" value="submit" className={`${LoginCss.btn}`} > Iniciar Sesión</button>

            </form>


            <div className="border"></div>
            <p>¿Aún no tienes cuenta?</p>
            <Link href="/registro" as="/registro">
              <a >
                ¡Registrate!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
