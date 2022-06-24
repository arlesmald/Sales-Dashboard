import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Employees" />
    <div style={{ height: '500px' }}>
      <DataGrid
        // loading="true"
        rows={employeesData}
        columns={employeesGrid}
        pageSize={7}
        rowsPerPageOptions={[7]}
        // checkboxSelection
        disableSelectionOnClick
        // getRowHeight={() => 'auto'}
        rowHeight={70}
      />
    </div>
  </div>
);

export default Employees;
