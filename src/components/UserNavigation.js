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
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";

// TODO: the cart contents should have the price listed on the cards/pdp with the sales pricing
// TODO: split the cart and search into smaller components cuz this is a mess

export default function UserNavigation() {
  const [searchData, setSearchData] = useState();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isSearch, setIsSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { data } = useSearchProductsByTermQuery(search, { skip: isSearch });
  const open = Boolean(anchorEl);
  const cart = useSelector((state) => state.cart);

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

  const handleCartOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCartClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
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
              maxHeight: "300px",
              overflowY: "scroll",
            }}
          >
            <MenuList dense>
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
                    <MenuItem key={product.id}>
                      <Typography noWrap={true}>{product.title}</Typography>
                    </MenuItem>
                  </Link>
                ))
              ) : (
                <div>No results</div>
              )}
            </MenuList>
          </Box>
        </div>
      </ClickAwayListener>

      <IconButton
        aria-label="shopping cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleCartOpen}
        sx={{ padding: "8px 18px", marginLeft: "10px" }}
      >
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCartClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {cart.length ? (
          <MenuList className="cart-dropdown">
            {cart.map((product) => (
              <MenuItem key={product.id}>
                <Link
                  to={`/product/${product.title
                    .replace(/ +/g, "-")
                    .toLowerCase()}?id=${product.id}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="cart-dropdown--image">
                    <img src={product.images[0]} alt={product.title} />
                  </div>
                  <div className="cart-dropdown--info">
                    <Typography sx={{ whiteSpace: "normal" }}>
                      {product.title}
                    </Typography>
                    <Typography noWrap={true}>{product.quantity}</Typography>
                  </div>
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        ) : (
          <div>no products</div>
        )}
      </Menu>
    </Box>
  );
}
