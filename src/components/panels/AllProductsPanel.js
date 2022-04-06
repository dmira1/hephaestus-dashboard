
import {PanelStyles, PanelHeader, PanelContentAll} from './styles'
import { useGetProducts } from 'hooks/useGetProducts';
import { ProductCard } from 'components/products/ProductCard';

function AllProductsPanel({title, ...props}) {
    const productData = useGetProducts('products')
    return (
        <PanelStyles>
            <PanelHeader>
                <h2>{title || "All Products"}</h2>
            </PanelHeader>
            <PanelContentAll>
            {
            productData? productData.map(product=><ProductCard key={product.uid} product={product}/>)
            : <p>Spinner React Spinners</p>
            }
            </PanelContentAll>
        </PanelStyles>
    );
}

export default AllProductsPanel;