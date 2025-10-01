import Image from "next/image";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts= await data.json();
  console.log(posts);
  
  return (
   <div>
    <h1 className="text-3xl font-bold underline">Home Page</h1>
    {
      posts.map(post=>(
        <div key={post.id} className="p-4 m-4 border rounded shadow">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))
    }
  
   </div>
  );
}
