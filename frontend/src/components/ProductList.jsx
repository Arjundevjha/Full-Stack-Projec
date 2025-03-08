import React, { Component } from "react";
import axios from "axios";

const ProductChildComponent = props => (
    <tr>
        <td>{props.productObject.productName}</td>
        <td>{props.productObject.productPrice}</td>
        <td>{props.productObject.productDescription}</td>
        <td>{props.productObject.productType}</td>
        <td>
            <button className="btn btn-danger" onClick={() => {props.deleteProduct(props.productObject._id)}}>Delete</button>
            <button className="btn btn-secondary" onClick={() => {props.editProduct(props.productObject._id)}}>Edit</button>
        </td>
    </tr>
)

class ProductList extends Component {
    constructor(){
        super()
        this.state = {
            productsArray: []
        }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }
    deleteProduct(_id){
        axios.post('http://localhost:4000/productApi/deleteProduct', {_id:_id}).then(res => console.log(res))
        this.setState({
            productsArray: this.state.productsArray.filter(value => value._id !== _id)
        })
    }
    editProduct(_id){
        console.log(_id)
        localStorage.setItem('id', _id)
        window.location.href = '/update'
    }
    componentDidMount(){
        axios.get('http://localhost:4000/productApi/getAllProduct').then(res => {
            console.log(res)
            this.setState({
                productsArray: res.data.data
            })
        })
    }
    ProductDetails(){
        return this.state.productsArray.map(value => {
            return <ProductChildComponent productObject={ value } deleteProduct={ this.deleteProduct } editProduct={ this.editProduct }/>
        })
    }
    render(){
        return(
            <div className="container">
                <h3>Product List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Description</th>
                            <th>Product Type</th>
                        </tr>
                    </thead>
                    <tbody>{ this.ProductDetails() }</tbody>
                </table>
            </div>
        )
    }
}

export default ProductList