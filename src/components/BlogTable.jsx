import { useState } from "react"
import BlogTemplate from "./Blog/BlogTemplate";
import BlogAddButton from "./BlogAddButton";
import axios from "axios";

export default function BlogList({ initialBlogList }) {

    const [blogList, setBlogList] = useState(initialBlogList);

    const addBlog = async () => {
        const { data } = await axios.post('/api/blog', { title: 'title' });

        const newBlog = { ...data, isEditing: true };
        setBlogList([...blogList, newBlog]);
    };

    const deleteBlog = async (id) => {
        const { data } = await axios.delete(`/api/blog/${id}/delete`);

        if (!data.error) {
            const newBlogList = [...blogList];

            const index = newBlogList.findIndex((blog) => blog.id === data.id);
            newBlogList.splice(index, 1);
            setBlogList(newBlogList);

        }
    };

    const blogs = blogList.map((blogItem) => {
        const { id, title, image, text } = blogItem;


        return (
            <BlogTemplate
                key={id}
                initialData={{ id, title, image, text }}
                initialIsEditing={false}
                onDeleteBlog={() => deleteBlog(id)}
            />
        );
    });

    return (
        <>
            <div className="blogDiv">
                <h1>My simple App</h1>
                <BlogAddButton onClick={addBlog} />
            </div>
            <div>
                <div className="list">{blogs}</div>
            </div>
        </>
    )
}