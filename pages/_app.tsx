import App, { Container } from "next/app";

//custom import
import Page from "../utils/page";

class MyApp extends App {
  render() {
    const { Component }: any = this.props;
    return (
      <Page>
        {/* all the pages rendered  */}
        <Component />
      </Page>
    );
  }
}

export default MyApp;
