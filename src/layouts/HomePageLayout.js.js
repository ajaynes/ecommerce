import PropTypes from "prop-types";
import Container from "@mui/material/Container";
export default function HomePageLayout({ children }) {
  return <Container maxWidth="xl">{children}</Container>;
}

HomePageLayout.propTypes = {
  children: PropTypes.array,
};
