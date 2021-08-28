import React, { useContext, useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Layout from '../../components/layout/layout';
import { Button } from 'react-bootstrap';
import solicitudContext from '../../context/solicitudes/solicitudContext';
import empleadoContext from '../../context/empleados/empleadoContext';

const AddSolicitud = () => {
    const { agregarSolicitud } = useContext(solicitudContext);
    const { empleados, getEmpleados } = useContext(empleadoContext);

    useEffect(() => {
        getEmpleados();
    }, []);

    // Formulario y validacion con Formik y Yup simplificado
    const formikOptions = {
        initialValues: {
            codigo: '',
            descripcion: '',
            resumen: '',
            id_empleado: '',
        },
        validationSchema: Yup.object({
            codigo: Yup.string().max(50, 'El numero maximo de caracteres es 50').required('El codigo es obligatorio'),
            descripcion: Yup.string().max(50, 'El numero maximo de caracteres es 50').required('El descripcion es obligatorio'),
            resumen: Yup.string().max(50, 'El numero maximo de caracteres es 50').required('El resumen es obligatorio'),
            id_empleado: Yup.string().required('El empleado es obligatorio'),
        }),
        onSubmit: (valores, { resetForm }) => {
            agregarSolicitud(valores);
            resetForm();
        }
    };

    return (
        <Layout>
            <h2 className="my-4 uppercase font-weight-bold">Añadir solicitud</h2>
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <Formik { ...formikOptions } >
                        <Form>
                            <div className="mb-4 form-group">
                                <label htmlFor="codigo" className="mb-3 d-block font-weight-bold">Código de la solicitud</label>
                                <Field name="codigo" type="text" className="form-control" placeholder="Código de la solicitud" />
                                <ErrorMessage name="codigo">
                                    {
                                        msg =>
                                            <div className="my-2 alert alert-danger">
                                                <p className="font-weight-bold">Error</p>
                                                <p>{ msg }</p>
                                            </div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="mb-4 form-group">
                                <label htmlFor="descripcion" className="mb-3 d-block font-weight-bold">Descripción de la solicitud</label>
                                <Field component="textarea" name="descripcion" type="text" className="form-control" placeholder="Descripción de la solicitud" />
                                <ErrorMessage name="descripcion">
                                    {
                                        msg =>
                                            <div className="my-2 alert alert-danger">
                                                <p className="font-weight-bold">Error</p>
                                                <p>{ msg }</p>
                                            </div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="mb-4 form-group">
                                <label htmlFor="resumen" className="mb-3 d-block font-weight-bold">Resumen de la solicitud</label>
                                <Field component="textarea" name="resumen" type="text" className="form-control" placeholder="Resumen de la solicitud" />
                                <ErrorMessage name="resumen">
                                    {
                                        msg =>
                                            <div className="my-2 alert alert-danger">
                                                <p className="font-weight-bold">Error</p>
                                                <p>{ msg }</p>
                                            </div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="mb-4 form-group">
                                <label htmlFor="location">Where do you work?</label>
                                <Field
                                    component="select"
                                    id="id_empleado"
                                    name="id_empleado"
                                    className="form-control"
                                >
                                    {
                                        empleados.map((empleado) => (
                                            <option value={ empleado.id } key={ empleado.id }>{ empleado.nombre }</option>
                                        ))
                                    }
                                </Field>
                                <ErrorMessage name="id_empleado">
                                    {
                                        msg =>
                                            <div className="my-2 alert alert-danger">
                                                <p className="font-weight-bold">Error</p>
                                                <p>{ msg }</p>
                                            </div>
                                    }
                                </ErrorMessage>
                            </div>

                            <Button type="submit" variant="success">Guardar empleado</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Layout>
    )
}

export default AddSolicitud
