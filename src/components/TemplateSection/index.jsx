import { Footer } from "../Footer";
import { Header } from "../Header";

export const TemplateSection = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
