import ItemStyles from "./styles/ItemStyles";
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import Link from 'next/link';  
import formatMoney from "../lib/formatMoney";

export default function Product({ product }) {
    return <ItemStyles>
        {product.name}
        <img src={product?.photo?.image?.publicUrlTransformed} />
            <Title>
                <Link href={`/products/${product.id}`}>
                    {product.name}
                </Link>
            </Title>
            <PriceTag>{formatMoney(product.price)}</PriceTag>
            <p>{product.description}</p>
        </ItemStyles>;
}

