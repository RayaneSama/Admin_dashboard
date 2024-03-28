import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./dataMails.js";
const Mails = () => {
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

export default Mails;
