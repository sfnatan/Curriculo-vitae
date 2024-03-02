import { user } from "../../data/dataUser";

export const AboutSection = () => {
  return (
    <>
      <section>
        <div>
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            repudiandae! Nostrum, eveniet. Repellendus blanditiis aliquid
            consequuntur exercitationem. Reprehenderit corrupti fuga rem,
            repudiandae aut accusamus blanditiis? Iure provident blanditiis
            explicabo aliquid.
          </p>

        </div>
        <div>
            <div>
                <h3>Detalhes pessoais</h3>
                <p><span>Endereço:</span> {user.adress}</p>
                <p><span>Idade:</span> {user.age}</p>
                <p><span>Estado Civil:</span> {user.status}</p>
                <p><span>Estatus Empregatício: </span> {user.job}</p>
                <p><span>E-mail:</span> {user.email}</p>

            </div>
            <div>
                <h3>Interesses e gostos</h3>

            </div>
        </div>
        <button>Download CV</button>
      </section>
    </>
  );
};
