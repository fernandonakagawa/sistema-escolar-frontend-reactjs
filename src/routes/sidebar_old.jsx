import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <h1>Contatos</h1>
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Buscar Contatos"
            placeholder="Buscar"
            type="search"
            name="q"
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <form method="post">
          <button type="submit">Novo</button>
        </form>
      </div>
      <nav>
        <ul>
          <li>
            {/*<a href={`contacts/1`}>Fernando</a>
              mudar a para Link to para parar de recarregar
              a página todas as vezes que um link for clicado*/}
            <Link to={`contacts/1`}>Fernando</Link>
          </li>
          <li>
            <Link to={`contacts/2`}>Fulano</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
