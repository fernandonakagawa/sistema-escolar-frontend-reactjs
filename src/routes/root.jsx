import { Outlet, Link } from "react-router-dom";
import Sidebar from "./sidebar";
export default function Root() {
  return (
    <>
      <Sidebar />
      <div id="detail">
        {/*É aqui que indicamos aonde queremos renderizar
        as rotas children - com o outlet*/}
        <Outlet />
      </div>
    </>
  );
}
