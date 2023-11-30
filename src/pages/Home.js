import ProductGrid from "../components/ProductGrid";
export default function Home(props) {
  return (
    <>
      <p>
        grid of select products, a hero, some filler ads, and some lorem ipsum
        text sections
      </p>
      <ProductGrid category="smartphones" limit={4} skip={0} />
    </>
  );
}
