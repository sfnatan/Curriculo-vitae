import {user} from "../../data/dataUser"

export const Header = () => {
  return (
    <>
      <header>
        <p>
          <span>{user.name}</span>
        </p>
        <nav>
          <a href="">Home</a>
          <a href="">Sobre Mim</a>
          <a href="">Cursos</a>
          <a href="">Experiências</a>
          <a href="">Skills</a>
        </nav>
      </header>
    </>
  );
};
