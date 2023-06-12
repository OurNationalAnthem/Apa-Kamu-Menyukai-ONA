import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <img class="mw-100" src="https://www.pngitem.com/pimgs/m/17-173589_transparent-yui-hirasawa-png-k-on-yui-stop.png" alt="Max-width 50%">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            
            <span class="fs-4">ONA Entertaiment｜オナ娛樂 </span>
          </a>
    
  
        </header>
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
