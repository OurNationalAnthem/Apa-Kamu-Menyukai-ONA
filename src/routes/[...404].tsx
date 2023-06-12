import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Kunjungi Channel{" "}
        <a href="https://www.youtube.com/channel/UCz5DSVzY-1CjwA5nlKmzVSA" target="_blank">
          Our National Anthem
        </a>{" "}
        Untuk Informasi Lebih Lanjut (Walau Sebenarnya Nggak Ada Juga Informasi Di Situ)
      </p>
    </main>
  );
}
