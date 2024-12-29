import {defineQuery} from "next-sanity";
import {sanityFetch} from "@/sanity/lib/live";

export async function getMyOrders(userId: string) {
    if(!userId) {
        throw new Error("User ID is Required");
    }

    const MY_ORDERS_QUERY = defineQuery(`
        *[
            _type == "order" && clerkUserId == $userId
        ] | order(_createdAt desc) {
            ...,
            products[]{
            ...,
            product->
            }
        }
    `);

    try{
        const orders = await sanityFetch({
            query: MY_ORDERS_QUERY,
            params: {
                userId
            }
        })

        return orders.data || [];
    } catch (err) {
        console.log("Error fetching orders", err);
        throw new Error("Error fetching orders");
    }
}