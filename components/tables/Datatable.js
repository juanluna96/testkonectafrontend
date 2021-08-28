import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import TableSearch from './TableSearch';

const Datatable = ({ data, columns, searchBy, title }) => {
    const paginacionOpciones = {
        rowsPerPageText: 'Filas por paginas',
        rangeSeparatorText: 'de',
        selectAllRowsItem: false,
        selectAllRowsItemText: 'Todos'
    }

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = data.filter(item => item[searchBy] && item[searchBy].toLowerCase().includes(filterText.toLowerCase()));

    return (
        <div className="container">
            <TableSearch title={ title } filterText={ filterText } setFilterText={ setFilterText } resetPaginationToggle={ resetPaginationToggle } setResetPaginationToggle={ setResetPaginationToggle } />
            <div className="table">
                <DataTable
                    noDataComponent={ `No existen registros de ${title}s ahora mismo...` }
                    columns={ columns }
                    data={ filteredItems }
                    pagination
                    paginationComponentOptions={ paginacionOpciones }
                    paginationResetDefaultPage={ resetPaginationToggle }
                    fixedHeader
                />
            </div>
        </div>
    )
}

export default Datatable