import MenuItem from '../../../components/FoodCard/FoodCard'
const OrderTab = ( {items }) => {
 
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                items.map(item => <MenuItem

                    key={item._id}
                    item={item}

                ></MenuItem>)
            }
        </div>
    );
};

export default OrderTab;