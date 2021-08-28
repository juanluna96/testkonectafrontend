import React, { useContext } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import empleadoContext from '../../context/empleados/empleadoContext';
import Layout from '../../components/layout/layout';
import { Button } from 'react-bootstrap';
import moment from 'moment';

const AddEmpleado = () => {
    const { agregarEmpleado } = useContext(empleadoContext);

    // Formulario y validacion con Formik y Yup simplificado
    const formikOptions = {
        initialValues: {
            nombre: '',
            salario: '',
            fecha_ingreso: moment().format('DD/MM/YYYY')
        },
        validationSchema: Yup.object({
            nombre: Yup.string().max(50, 'El numero maximo de caracteres es 50').required('El nombre es obligatorio'),
            salario: Yup.number('El salario debe ser un numero').positive('El salario debe ser positivo').required('El salario es obligatorio'),
            fecha_ingreso: Yup.string().required('La fecha de ingreso es obligatoria'),
        }),
        onSubmit: (valores, { resetForm }) => {
            agregarEmpleado(valores);
            resetForm();
        }
    };

    return (
        <Layout>
            <h2 className="my-4 uppercase font-weight-bold">Añadir empleado</h2>
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <Formik { ...formikOptions } >
                        <Form>
                            <div className="mb-4 form-group">
                                <label htmlFor="nombre" className="mb-3 d-block font-weight-bold">Nombre del empleado</label>
                                <Field name="nombre" type="text" className="form-control" placeholder="Nombre del empleado" />
                                <ErrorMessage name="nombre">
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
                                <label htmlFor="salario" className="mb-3 d-block font-weight-bold">Salario del empleado</label>
                                <Field name="salario" type="number" className="form-control" placeholder="Salario del empleado" />
                                <ErrorMessage name="salario">
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
                                <label htmlFor="fecha_ingreso" className="mb-3 d-block font-weight-bold">Fecha de ingreso del empleado</label>
                                <Field name="fecha_ingreso" type="text" className="form-control" placeholder="Fecha de ingreso del empleado" />
                                <ErrorMessage name="fecha_ingreso">
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

export default AddEmpleado
