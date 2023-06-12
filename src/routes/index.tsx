import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Apa Kamu Menyukai Dan Mencintai ONA</Title>
      <h1>Jika Iya Kalian Boleh Click Sebanyak Banyaknya</h1>
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
