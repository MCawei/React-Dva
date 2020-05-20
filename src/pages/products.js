import {connect} from 'dva';
import ProductList from '@/components/ProductList';

const Products = (props) => {
  //  props 中引用
  function handleDelete(id) {
    props.dispatch({
      type: 'products/delete',
      payload: id
    })
  }

  return (
    <div>
      <h2>list of productList</h2>
      <ProductList onDelete={handleDelete} products={props.products} />
    </div>
  )
}

export default connect(({ products }) => ({
  products
}))(Products)
