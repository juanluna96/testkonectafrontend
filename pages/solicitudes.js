import React, { useEffect, useContext } from 'react'
import Moment from 'react-moment';
import Layout from '../components/layout/layout';
import Datatable from '../components/tables/Datatable';
import 'moment/locale/es';
import solicitudContext from '../context/solicitudes/solicitudContext';
import Link from 'next/link'
import { Button } from 'react-bootstrap';
import { AiOutlinePlusSquare } from 'react-icons/ai';

const Solicitudes = () => {
    const { solicitudes, getSolicitudes } = useContext(solicitudContext);

    useEffect(() => {
        getSolicitudes();
    }, []);

    const columnas = [
        { name: 'ID', selector: 'id', sortable: true },
        { name: 'CODIGO', selector: 'codigo', sortable: true },
        { name: 'DESCRIPCION', selector: 'descripcion', sortable: true },
        { name: 'RESUMEN', selector: 'resumen', sortable: true },
        { name: 'EMPLEADO', selector: 'nombre', sortable: true },
    ]

    return (
        <Layout>
            <Link href="/add/solicitud" passHref>
                <Button variant="primary" className="float-right mx-3 my-4"><AiOutlinePlusSquare className="mr-4" size="2em" />Añadir solicitud</Button>
            </Link>
            <Datatable searchBy="descripcion" title="solicitud" data={ solicitudes } columns={ columnas } />
        </Layout>
    )
}

export default Solicitudes
