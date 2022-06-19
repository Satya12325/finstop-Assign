import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../styles.css";

const columns = [
  { field: "name", headerName: "Name", width: 160 },
  { field: "email", headerName: "Email", width: 230 },
  { field: "phone", headerName: "Phone", width: 130 },
  {
    field: "status",
    headerName: "Status",
    type: "text",
    width: 190
  },
  {
    field: "date",
    headerName: "date",
    type: "text",
    width: 190
  }
  // {
  //   field: 'date',
  //   headerName: 'date added',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: "in progress",
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  {
    id: 1,
    name: "Kirsteni",
    email: "kkullmann0@newsvine.com",
    phone: "603-214-5638",
    status: "in progress",
    date: "3/4/2022"
  },
  {
    id: 2,
    name: "Marysa",
    email: "mkurt1@rambler.ru",
    phone: "973-543-7641",
    status: "open",
    date: "4/21/2022"
  },
  {
    id: 3,
    name: "Berrie",
    email: "briguard2@cbc.ca",
    phone: "671-494-1453",
    status: "open",
    date: "9/12/2021"
  },
  {
    id: 4,
    name: "Norina",
    email: "nkillingbeck3@skype.com",
    phone: "776-924-1251",
    status: "open",
    date: "5/5/2022"
  },
  {
    id: 5,
    name: "Brittany",
    email: "bslowey4@ocn.ne.jp",
    phone: "119-328-0916",
    status: "in progress",
    date: "7/27/2021"
  },
  {
    id: 6,
    name: "Kerr",
    email: "kmckelvey5@foxnews.com",
    phone: "860-727-1217",
    status: "in progress",
    date: "11/15/2021"
  },
  {
    id: 7,
    name: "Jilli",
    email: "jludgate6@businesswire.com",
    phone: "375-968-8822",
    status: "open",
    date: "11/8/2021"
  },
  {
    id: 8,
    name: "Alistair",
    email: "afeldmark7@tamu.edu",
    phone: "721-636-1428",
    status: "in progress",
    date: "11/23/2021"
  },
  {
    id: 9,
    name: "Judon",
    email: "jtrue8@redcross.org",
    phone: "275-964-4868",
    status: "open",
    date: "12/1/2021"
  },
  {
    id: 10,
    name: "Kessiah",
    email: "kgoldson9@google.com.br",
    phone: "121-473-6727",
    status: "in progress",
    date: "11/16/2021"
  },
  {
    id: 11,
    name: "Hermann",
    email: "hphillpa@mapquest.com",
    phone: "448-426-4115",
    status: "in progress",
    date: "7/23/2021"
  },
  {
    id: 12,
    name: "Trumaine",
    email: "tdecroixb@pinterest.com",
    phone: "500-502-9110",
    status: "open",
    date: "10/25/2021"
  },
  {
    id: 13,
    name: "Laura",
    email: "lbenboughc@typepad.com",
    phone: "291-992-0920",
    status: "open",
    date: "6/22/2021"
  },
  {
    id: 14,
    name: "Bellanca",
    email: "byssond@loc.gov",
    phone: "429-505-6381",
    status: "in progress",
    date: "5/19/2022"
  },
  {
    id: 15,
    name: "Frieda",
    email: "fcavee@cloudflare.com",
    phone: "284-462-1331",
    status: "open",
    date: "5/5/2022"
  },
  {
    id: 16,
    name: "Carmelia",
    email: "cknolesf@topsy.com",
    phone: "310-861-8440",
    status: "open",
    date: "4/12/2022"
  },
  {
    id: 17,
    name: "Emiline",
    email: "eliepmanng@soup.io",
    phone: "706-316-5742",
    status: "open",
    date: "2/1/2022"
  },
  {
    id: 18,
    name: "Domenico",
    email: "drultonh@multiply.com",
    phone: "702-148-3411",
    status: "in progress",
    date: "12/15/2021"
  },
  {
    id: 19,
    name: "Wallis",
    email: "wsygrovei@wikia.com",
    phone: "985-469-2219",
    status: "open",
    date: "12/31/2021"
  },
  {
    id: 20,
    name: "Holly-anne",
    email: "hfulmenj@buzzfeed.com",
    phone: "946-482-8034",
    status: "open",
    date: "7/20/2021"
  }
];

export default function DataTable() {
  const [data, setData] = React.useState(rows);
  const [datas, setDatas] = React.useState("");
  React.useEffect(() => {
    setData(
      rows?.filter((item) => {
        if (datas === "") {
          return item;
        } else if (
          item.phone
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(datas.toLowerCase())
        ) {
          return item;
        }
      })
    );
  }, [data]);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="ButtonBox">
        <div>
          <input
            type="number"
            placeholder="Search contacts"
            value={datas}
            onChange={(e) => setDatas(e.target.value)}
          />
        </div>
        <div>
          <button>View</button>
          <button>Edit</button>
          <button>Status </button>
          <button>
            Send
            <img
              style={{ width: "12px", margin: "0 10px" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAiklEQVRIie2Tuw2AMAwFDxghu1CwFLAJEp8CJmIqaFxYQYEEI6o8KVKKlzsXDuTkWFOpews0wG7gFUAP1D7HAYecRYpv4IviOL8wGSQ+fAqVRlXagDISrodb796lSpLgIUnoUWzvlcQEf4J8AtcSvR2zHOtKXyR64k8mf5JEw1M/Uyf3QUQ5OT/kBEmoPwh1vkJ1AAAAAElFTkSuQmCC"
            />
          </button>
          <button>...</button>
        </div>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
