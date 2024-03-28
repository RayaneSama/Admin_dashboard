import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./vehicles";
const Vehicles = () => {
  return (
    <div>
      <div
        style={{
          height: 300,
          width: "98%",
          // @ts-ignore
          mx: "auto",
        }}
      >
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    </div>
  );
};

export default Vehicles;
