async function SearchPage({
      searchParams,
    }: {
    searchParams: {
        query: string
    }
}) {
    const {query} = await searchParams;
    console.log(query)

    return <div>Searching for {query}</div>;
}

export default SearchPage;