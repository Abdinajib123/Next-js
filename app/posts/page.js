
  const postpages = async () => {
    const data = await fetch("http://localhost:3000/api/posts");
    const posts = await data.json();      
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Posts Page</h1>    
            {
                posts.map(post => (
                    <div key={post.id} className="p-4 m-4 border rounded shadow">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>  
                ))
            }
        </div>
    )
}
export default postpages;