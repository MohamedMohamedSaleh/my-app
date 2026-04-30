export default async function ShowArticles(props) {
     const params = await props.params;
    console.log(props);
    return (
        <div>
            <h1>Show Articles</h1>
            <h1> this is {params.title}</h1>
        </div>
    );
}