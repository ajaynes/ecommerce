import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CategorySidebar({ products, handleFilterProducts }) {
    let brands = [];
    products.forEach(element => {
        brands.push(element.brand)
    });
    brands = [...new Set(brands)]
    return (
        <div>
            <h4>Sidebar</h4>
            <div>Price Range</div>
            <FormControl>
                <FormLabel id="brand-buttons-group-label">Brands</FormLabel>
                <RadioGroup
                    aria-labelledby="brand-buttons-group-label"
                    name="brand-buttons-group"
                    onChange={handleFilterProducts}
                >
                    {brands.map(brand => <FormControlLabel value={brand} control={<Radio />} label={brand} />)}
                </RadioGroup>
            </FormControl>

        </div>
    )
}
