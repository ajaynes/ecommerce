import Container from '@mui/material/Container';
import Header from '../components/Header';
export default function ProductPageLayout({ children }) {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <div className="body-layout">
                    {children}
                </div>
            </Container>
        </>
    )
}
