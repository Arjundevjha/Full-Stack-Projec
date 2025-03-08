import React, {Component} from "react"
import axios from "axios"

class CreateProduct extends Component{
    constructor(){
        super();
        this.state = {
            ProductName: "",
            ProductPrice: "",
            ProductDescription: "",
            ProductType: ""
        }
        this.onChangeProductName = this.onChangeProductName.bind(this)
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this)
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this)
        this.onChangeProductType = this.onChangeProductType.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChangeProductName(e){
        this.setState({
            ProductName: e.target.value
        })
    }
    onChangeProductPrice(e){
        this.setState({
            ProductPrice: e.target.value
        })
    }
    onChangeProductDescription(e){
        this.setState({
            ProductDescription: e.target.value
        })
    }
    onChangeProductType(e){
        this.setState({
            ProductType: e.target.value
        })
    }
    onSubmit(e){
        //console.log(this.state)
        e.preventDefault();
        const product = {
            productName: this.state.ProductName,
            productDescription: this.state.ProductDescription,
            productPrice: this.state.ProductPrice,
            productType: this.state.ProductType
        }
        axios.post('http://localhost:4000/productApi/addProduct', product).then(res => console.log(res))
        //console.log(product)
    }
    render(){
        return(
            <div className="container">
                <h3>Create New Product</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Product Name: </label>
                    <input type="text" className="form-control" onChange={this.onChangeProductName} value={this.state.ProductName}/>
                </div>
                <div className="form-group">
                    <label>Product Price: </label>
                    <input type="text" className="form-control" onChange={this.onChangeProductPrice} value={this.state.ProductPrice}/>
                </div>
                <div className="form-group">
                    <label>Product Description: </label>
                    <input type="text" className="form-control" onChange={this.onChangeProductDescription} value={this.state.ProductDescription}/>
                </div>
                <div className="form-group">
                    <label>Product Type: </label>
                    <input type="text" className="form-control" onChange={this.onChangeProductType} value={this.state.ProductType}/>
                </div>
                <button className="btn btn-primary" type="submit"><b>Submit</b></button>
            </form>
            </div>
        )
    }
}

export default CreateProduct