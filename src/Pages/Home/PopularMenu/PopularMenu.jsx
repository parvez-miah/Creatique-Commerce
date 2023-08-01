        import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
        import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";



        const PopularMenu =()=>{

         
const [menu ] =useMenu();
const popular = menu.filter(item=> item.category==='popular')


            return(

        <section>
        <SectionTitle
        subHeading={"check it out"}
        heading={"From our menu"}
        >

        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">

        {
            popular.map(item=> <MenuItem
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