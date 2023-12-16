import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
export default function CategoryPageLayout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <div className="body-layout">
          <Breadcrumb />
          {children}
        </div>
      </Container>
    </>
  );
}

CategoryPageLayout.propTypes = {
  children: PropTypes.array,
};
