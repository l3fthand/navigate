import React, {Component} from 'react';

class Product extends Component{

    render(){
        let {dateText,dateDay,temperature,products} = this.props
        return(
            <div className="package">
                <div className="date">
                    <div className="dateText">
                        {dateText}<br/>({dateDay})
                    </div>
                    <div className="temp">
                        {temperature} 
                    </div>
                </div>
                <div className="product">
                    <div className="price">
                        <span>{products[0].price}</span><br/>{products[0].priceWithDiscount}
                    </div>
                    <div className="status" 
                    style={ products[0].status === 'Available'?
                    {color:'grey'}:
                    (products[0].status === 'Last Spaces' ? 
                    {color:'orange'} :
                    {color:'red'})}>
                    {products[0].status}
                    </div>
                </div>
                <div className="product">
                    <div className="price">
                        <span>{products[1].price}</span><br/>{products[1].priceWithDiscount}
                    </div>
                    <div className="status" 
                    style={ products[1].status === 'Available'?
                    {color:'grey'}:
                    (products[1].status === 'Last Spaces' ? 
                    {color:'orange'} :
                    {color:'red'})}>
                    {products[1].status}
                    </div>
                </div>
                <div className="product">
                    <div className="price">
                        <span>{products[2].price}</span><br/>{products[2].priceWithDiscount}
                    </div>
                    <div className="status" 
                    style={ products[2].status === 'Available'?
                    {color:'grey'}:
                    (products[2].status === 'Last Spaces' ? 
                    {color:'orange'} :
                    {color:'red'})}>
                    {products[2].status}
                    </div>
                </div>
            </div>
        )
    }
}


export default Product