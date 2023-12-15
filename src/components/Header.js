import Navigation from "./Navigation";
import UserNavigation from "./UserNavigation";
import { useGetAllCategoriesQuery } from "../services/product";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

export default function Header() {
  const { data, error, isLoading } = useGetAllCategoriesQuery();

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Navigation categories={data} />
                <UserNavigation />
              </Toolbar>
            </Container>
          </AppBar>
        </>
      ) : null}
    </>
  );
}
