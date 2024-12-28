import {defineQuery} from "next-sanity";
import {sanityFetch} from "@/sanity/lib/live";

export const getProductsByCategory = async (categorySlug: string) => {

    const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
        *[
            _type == "product"
            && references(*[_type == "category" && slug.current == $categorySlug]._id)
        ] | order(name asc)
    `);

    try{
        const products = await sanityFetch({
            query: PRODUCTS_BY_CATEGORY_QUERY,
            params: {
                categorySlug
            }
        })

        return  products.data || [];
    } catch (e) {
        console.log('Error fetching products by category', e);
        return [];
    }
}