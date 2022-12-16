import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex bg-blue-400 flex-col">
      <h1 className="text-3xl underline font-bold">hello sunil</h1>
      <p>this is sunil</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nulla ipsum
        porro modi omnis, voluptatibus repellat nemo, eius quaerat provident qui
        sapiente explicabo, sunt iste quia praesentium aspernatur? Hic, magnam.
      </p>
    </div>
  );
}
