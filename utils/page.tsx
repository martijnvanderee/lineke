//custom import
import Head from "../components/head";
<Head title="" />;
//style
import { GlobalCSS, GlobalStyle } from "../styles/index";

type Props = {};

const Page: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Head />
    <GlobalStyle />
    <GlobalCSS>{children}</GlobalCSS>
  </>
);

export default Page;
