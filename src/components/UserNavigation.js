import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchProductsByTermQuery } from "../services/product";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export default function UserNavigation() {
  const [searchData, setSearchData] = useState();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isSearch, setIsSearch] = useState(false);
  const { data } = useSearchProductsByTermQuery(search, { skip: isSearch });

  useEffect(() => {
    if (data) {
      setSearchData([data]);
    }
  }, [data]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      setSearchData([]);
      setDropdownVisible(false);
    } else {
      setDropdownVisible(true);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setSearchData([]);
    setDropdownVisible(false);
    setIsSearch(false);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
      <ClickAwayListener onClickAway={clearSearch}>
        <div className="search-box">
          <TextField
            value={search}
            onChange={handleSearchChange}
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box
            className={dropdownVisible ? "show" : "hide"}
            component="section"
            sx={{
              p: 2,
              width: "100%",
              position: "absolute",
              backgroundColor: "#444444",
            }}
          >
            {searchData?.[0]?.products.length ? (
              searchData[0].products.map((product) => (
                <Link
                  key={product.id} // Add key prop with unique value
                  onClick={clearSearch}
                  to={`/product/${product.title
                    .replace(/ +/g, "-")
                    .toLowerCase()}?id=${product.id}`}
                  style={{
                    bottom: "25px",
                    width: "calc(100% - 36px)",
                  }}
                >
                  <div key={product.id}>{product.title}</div>
                </Link>
              ))
            ) : (
              <div>No results</div>
            )}
          </Box>
        </div>
      </ClickAwayListener>
      <Link to="/cart">
        <IconButton aria-label="shopping cart">
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Link>
    </Box>
  );
}
