import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { useGetProductsWithLimitsSkipQuery } from "../services/product";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProductCard from "./ProductCard";

// TODO: remove the container - will be determined by the overall layout of the pages

export default function ProductGridSlider({ category, limit, skip, type }) {
    const { data, error, isLoading } = useGetProductsWithLimitsSkipQuery({
        category,
        limit,
        skip,
    });

    const [searchParams] = useSearchParams();
    // on product pages remove the current product from the list of related products
    let filteredData;
    if (data) {
        if (searchParams.get("id")) {
            filteredData = data.products.filter(p => p.id !== Number(searchParams.get("id")))
        } else {
            filteredData = data.products
        }
    }

    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: type === "product" ? limit - 2 : limit - 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <Box sx={{ flexGrow: 1 }}>
                        <Container maxWidth="lg">
                            <Slider {...sliderSettings}>
                                {filteredData.map((product) => (
                                    <ProductCard
                                        title={product.title}
                                        thumbnail={product.thumbnail}
                                        price={product.price}
                                        rating={product.rating}
                                        brand={product.brand}
                                        id={product.id}
                                        images={product.images}
                                        discount={product.discountPercentage}
                                        description={product.description}
                                        style={{ marginRight: '15px' }}
                                        key={product.id}
                                    />
                                ))}
                            </Slider>
                        </Container>
                    </Box>
                </>
            ) : null}
        </>
    );
}
