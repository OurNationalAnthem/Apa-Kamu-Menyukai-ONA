import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <h3>ONA Entertaiment | ONA娛樂</h3>
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
       <iframe width="853" height="480" src="https://www.youtube.com/embed/wT_5LwlRUco" title="Anthem Of China CCTV-1, 2023 Version ( 1-April-2023 )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </main>
  );
}
