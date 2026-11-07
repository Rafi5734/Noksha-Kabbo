import Image from "next/image";
import { HeartIcon } from "./icons";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) { return <article className="product-card"><div className="product-image-wrap"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 50vw, 25vw" className="product-image" />{product.badge && <span className="product-badge">{product.badge}</span>}<button className="wishlist" aria-label={`Add ${product.name} to wishlist`}><HeartIcon /></button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.category}</p></div><strong>{product.price}</strong></div></article>; }
