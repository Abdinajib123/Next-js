const PostPages = async () => {
    const data = await fetch("http://localhost:3000/api/posts");
    const posts = await data.json();      
    return (
        <div>
            <h1 className="text-3xl font-bold underline mb-4">Posts Page</h1>    
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Body</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td className="border border-gray-300 px-4 py-2">{post.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                            <td className="border border-gray-300 px-4 py-2">{post.body}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
                
            </table>
        </div>
    )
}
export default PostPages;