import {productsPageMetadata} from "./../../metadata/ourProductsMetadata.js";
import ProductsPage from "./ourProductsPage";

export const metadata = productsPageMetadata;

export default function Page(){
    return(
        <ProductsPage/>
    )
}
