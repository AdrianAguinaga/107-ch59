import QuantityPicker from "./QuantityPicker";

function Product({data}){
    const formatPrice = (price) => {
        return price.toFixed(2);
    };

       return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img>
                    src={data.image}
                </img>

            </div>
            <QuantityPicker/>
        </div>
       ) 

} 

export default Product