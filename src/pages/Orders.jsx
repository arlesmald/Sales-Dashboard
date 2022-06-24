import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { ordersData, ordersGrid } from '../data/dummy';

import { Header } from '../components';

const Orders = () => (
  // const h = '';
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Orders" />
    <div style={{ height: '500px' }}>
      <DataGrid
        // loading="true"
        rows={ordersData}
        columns={ordersGrid}
        pageSize={5}
        rowsPerPageOptions={[7]}
        // checkboxSelection
        disableSelectionOnClick
        getRowHeight={() => 'auto'}
      />
    </div>
  </div>
);

export default Orders;
