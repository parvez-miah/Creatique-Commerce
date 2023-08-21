
import './MenuItem.css'



const MenuItem = ({item})=>{

    const {image, price, recipe,name} = item;
return(

    <div className=" flex space-x-4 m-6  ">

    <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px] , imageStyle" src={image} alt="" />
    <div>
    <h3>{name}</h3>
    <p>{recipe}</p>
    </div>
    <p className="text-yellow-600">${price}</p>
    </div>
)

}


export default MenuItem;