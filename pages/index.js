import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
export default function Home() {
  //dynamically importing react component so that it is not server side rendered
  const HomepageDynamic = dynamic(() => import("../components/HomePage"), {
    ssr: false,
  });
  return <HomepageDynamic />;
}
