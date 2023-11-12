import './App.css'
import BlogList from './components/BlogTable';




function App({ initialBlogList }) {
    return (
        <BlogList initialBlogList={initialBlogList} />
    )

}
export default App
