import { Header } from "../components/header";
import { About } from "../components/about/index";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Experiences } from "../components/experiences";
import { Gallary } from "../components/gallary";
type Props = {};

const Main: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Header />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
      {/* <Gallary /> */}
    </>
  );
};

export default Main;
