import {getAllProducts} from "@/sanity/lib/products/getAllProducts";
import {getAllCategories} from "@/sanity/lib/products/getAllCategories";
import ProductView from "@/components/ProductView";

export default async function Home() {
    const products = await getAllProducts();

    const categories = await getAllCategories()
    // console.log(crypto.randomUUID().slice(0, 5) + `>>> Rerendered the home page cache with ${products.length} products and ${categories.length} categories`)

    return (
    <div>
      <h1>Hello</h1>

      <div className={"flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4"}>
          <ProductView products={products} categories={categories}/>
      </div>
    </div>
  );
}
