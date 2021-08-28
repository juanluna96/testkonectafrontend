import React from 'react'

const TableSearch = ({ title, filterText, setFilterText, resetPaginationToggle, setResetPaginationToggle }) => {

    const onChangeSearch = (e) => {
        setFilterText(e.target.value);
    }

    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    }

    return (
        <div className="mb-0">
            <form className="navbar-form search-form">
                <input className="form-control" placeholder={ `Buscar ${title}...` } type="text" value={ filterText } onChange={ onChangeSearch } />
                <button type="button" className="btn btn-default" onClick={ () => { handleClear() } }>
                    <i className="fas fa-times"></i>
                </button>
            </form>
        </div>
    )
}

export default TableSearch