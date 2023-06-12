import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>ONA Cinta Yui</Title>
      <h1>Apa Kamu Menyukai Dan Mencintai ONA</h1>
      <h3>Jika Iya Kalian Boleh Click Sebanyak Banyaknya</h3>
      <Counter />
      <p>
        Subscribe{" "}
        <a href="https://www.youtube.com/channel/UCz5DSVzY-1CjwA5nlKmzVSA" target="_blank">
          start.solidjs.com
        </a>{" "}
        (Our National Anthem) Untuk Cinta Yang Lebih ULTIMAKS
      </p>
    </main>
  );
}
