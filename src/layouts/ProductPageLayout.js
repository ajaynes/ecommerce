import Container from '@mui/material/Container';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
export default function ProductPageLayout(props) {

    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <div className="body-layout">
                    <Breadcrumb path={props.category} />
                    {props.children}
                </div>
            </Container>
        </>
    )
}
