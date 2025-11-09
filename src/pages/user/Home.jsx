import { useEffect } from "react";
import Layout from "../../components/user/Layout";
import Main from "../../components/user/Main";

export function Home() {
  useEffect(() => {
    document.title = "Trang chủ | BeautyGlow";
  }, []);
  return (
    <Layout>
      <Main />
    </Layout>
  );
}
