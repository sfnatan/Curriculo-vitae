import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import { user } from "../../data/dataUser";

export const BannerSection = () => {
  return (
    <>
      <section>
        <div>
          <img src={user.photo} alt="Foto do usuário" />
          <h1>{user.userName}</h1>
          <p>{user.city}</p>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send/?phone=0829881230422&text&type=phone_number&app_absent=0"
            target="blank"
          >
            <img src={whatsapp} alt="logo do whatsapp" />
          </a>
          <a
            href="https://www.linkedin.com/in/natan-s-ferreira-a3287418b/"
            target="blank"
          >
            <img src={linkedin} alt="logo do linkedin" />
          </a>
          <a href="https://www.instagram.com/sfnatan/" target="blank">
            <img src={instagram} alt="logo do instagram" />
          </a>
        </div>
      </section>
    </>
  );
};
