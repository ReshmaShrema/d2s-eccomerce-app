import './directory.scss'
import CategoryList from '../category-list/category-list';
const Directory = ({categories}) =>{
  return(
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryList key={category.id} category={category} />
      ))}
    </div>
  )
}
export default Directory;