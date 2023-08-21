import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { FaOpencart } from "react-icons/fa";



const PopularMenu = () => {


    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    return (

        <section>
            <h2 style={{ fontSize: '30px', fontWeight: '700', padding: '20px', display: 'flex', color: "red", marginTop: '30px' }}>  <FaOpencart></FaOpencart>  <span style={{ color: 'black', marginLeft: '10px' }}> Trending <span style={{ color: 'blue' }}>On List</span></span></h2>
            <div className="grid md:grid-cols-2 gap-10">

                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}

                    >

                    </MenuItem>)
                }
            </div>

        </section>

    )
}

export default PopularMenu;