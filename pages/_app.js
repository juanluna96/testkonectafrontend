import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.css';
import EmpleadoState from '../context/empleados/empleadoState';
import SolicitudState from '../context/solicitudes/solicitudState';

function MyApp({ Component, pageProps }) {

  return (
    <EmpleadoState>
      <SolicitudState>
        <Component { ...pageProps } />
      </SolicitudState>
    </EmpleadoState>
  )
}

export default MyApp
