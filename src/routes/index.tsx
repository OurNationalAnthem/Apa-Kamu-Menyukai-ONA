import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>オナは唯平沢愛してるよ</Title>
      <h1>Apa Kamu Mencintai ONA</h1>
      <h2>Jika Iya Kalian Boleh Click Sebanyak Banyaknya</h2>
      <Counter />
      <p>
        Subscribe{" "}
        <a href="https://www.youtube.com/channel/UCz5DSVzY-1CjwA5nlKmzVSA" target="_blank">
          Our National Anthem
        </a>{" "}
        Untuk Cinta Yang Lebih ULTIMAKS
      </p>
    </main>
  );
}
