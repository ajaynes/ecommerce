import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
export default function ProductPageLayout({ category, children }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <div className="body-layout">
          <Breadcrumb path={category} />
          {children}
        </div>
      </Container>
    </>
  );
}

ProductPageLayout.propTypes = {
  children: PropTypes.array,
  category: PropTypes.string,
};
