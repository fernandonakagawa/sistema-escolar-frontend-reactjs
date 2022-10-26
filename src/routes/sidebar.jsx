import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <h1>Sistema de Reserva de Salas</h1>
      <nav>
        <ul>
          <li>
            {/*<a href={`contacts/1`}>Fernando</a>
              mudar a para Link to para parar de recarregar
              a página todas as vezes que um link for clicado*/}
            <Link to={`cursos`}>Cursos</Link>
          </li>
          <li>
            <Link to={`cotacao`}>Cotação</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
