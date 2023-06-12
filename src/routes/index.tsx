import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <h3>ONA Entertaiment | ONA娛樂</h3>
      <img src="https://www.pngitem.com/pimgs/m/17-173589_transparent-yui-hirasawa-png-k-on-yui-stop.png">
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
