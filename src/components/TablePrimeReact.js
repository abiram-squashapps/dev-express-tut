import React from "react";
import { DataTable } from "primereact/datatable";
import { customers } from "./customerData";
import { Column } from "primereact/column";
import placeholder from "../images/petersmith.png";

function TablePrimeReact() {
  const customer = customers.data;

  const statusBodyTemplate = (rowData) => (
    <span className={`pill ${rowData.status}`}>{rowData.status}</span>
  );

  const imageBodyTemplate = (rowData) => (
    <div className="p-grig">
      <img
        className="p-col-2"
        src={placeholder}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.image}
        className="product-image"
        width="40px"
        style={{ borderRadius: "50%" }}
      />
      <span className="p-col-10">{rowData.name}</span>
    </div>
  );

  return (
    <div className="center1">
      <DataTable
        value={customer}
        header="Datatable from primeReact"
        showGridlines
        stripedRows
        paginator
        rows={5}
        removableSort
      >
        <Column field="name" header="name" sortable></Column>
        <Column field="company" header="company"></Column>
        <Column
          field="country.name"
          className="columns"
          header="country"
          filter
        ></Column>
        <Column field="date" header="date" sortable></Column>
        <Column
          field="status"
          body={statusBodyTemplate}
          header="status"
        ></Column>
        <Column field="activity" header="activity" sortable></Column>
        <Column
          field="representative.name"
          header="representative"
          body={imageBodyTemplate}
        ></Column>
      </DataTable>
    </div>
  );
}

export default TablePrimeReact;
