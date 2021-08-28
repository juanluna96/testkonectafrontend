import React, { useEffect, useContext } from 'react'
import Moment from 'react-moment';
import Layout from '../components/layout/layout';
import Datatable from '../components/tables/Datatable';
import 'moment/locale/es';
import empleadoContext from '../context/empleados/empleadoContext';
import Link from 'next/link'
import { Button } from 'react-bootstrap';
import { AiOutlinePlusSquare } from 'react-icons/ai';

const Home = () => {
  const { empleados, getEmpleados } = useContext(empleadoContext);

  useEffect(() => {
    getEmpleados();
  }, []);

  const columnas = [
    { name: 'ID', selector: 'id', sortable: true },
    { name: 'NOMBRE', selector: 'nombre', sortable: true },
    { name: 'SALARIO', selector: 'salario', sortable: true },
    {
      name: 'FECHA INGRESO',
      selector: 'fecha_ingreso',
      sortable: true,
      cell: function OrderItems(row) {
        const dateToFormat = new Date(row.fecha_ingreso);
        return (
          <Moment date={ dateToFormat } format="DD/MM/YYYY" />
        );
      },
    },
  ]

  return (
    <Layout>
      <Link href="/add/empleado" passHref>
        <Button variant="primary" className="my-4 mx-3 float-right"><AiOutlinePlusSquare className="mr-4" size="2em" />Añadir empleado</Button>
      </Link>
      <Datatable searchBy="nombre" title="empleado" data={ empleados } columns={ columnas } />
    </Layout>
  )
}

export default Home
