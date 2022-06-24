import React, { useState } from 'react';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

function CustomToolbar(props) {
  const { customer, customerSet, selectedCustomer } = props;

  // const deleteCustomer = () => {
  //   console.log('customer');
  //   setCustomers(customers.filter((customer) => customer.id !== customers.id));
  // };

  return (
    <GridToolbarContainer>
      <Button variant="outlined" onClick={() => customerSet(customer.filter((customerRow) => customerRow.id !== selectedCustomer.id))}>Delete</Button>
    </GridToolbarContainer>
  );
}

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);
  const [selection, setSelection] = useState({});

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div style={{ height: '500px' }}>
        {/* <Button variant="outlined">Delete</Button> */}
        <DataGrid
          // loading="true"
          rows={customers}
          columns={customersGrid}
          pageSize={5}
          rowsPerPageOptions={[7]}
          // checkboxSelection
          // disableSelectionOnClick
          // getRowHeight={() => 'auto'}
          // onSelectionChange={(newSelection) => {
          //   console.log(newSelection);
          // }}
          isRowSelectable={(params) => setSelection(params.row)}
          rowHeight={70}
          components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            toolbar: { customer: customers, customerSet: setCustomers, selectedCustomer: selection }, // Se escribe toolbar si son props para el mismo y footer si son props para el mismo
          }}
        />
      </div>
    </div>
  );
};

export default Customers;
