import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
export default function Home(props) {
  return (
    <>
    <Header />
      <p>
        grid of select products, a hero, some filler ads, and some lorem ipsum
        text sections
      </p>
      <ProductGrid category="smartphones" limit={4} skip={0} />
    </>
  );
}
