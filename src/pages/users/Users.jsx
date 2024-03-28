import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./dataUsers";

const Users = () => {
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
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    </div>
  );
};

export default Users;
