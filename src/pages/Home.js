import Container from "@mui/material/Container";
import ProductGridSlider from "../components/ProductGridSlider";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <p>
          grid of select products, a hero, some filler ads, and some lorem ipsum
          text sections
        </p>
      </Container>
      <ProductGridSlider category="tops" limit={5} skip={0} type="featured" />
    </>
  );
}
