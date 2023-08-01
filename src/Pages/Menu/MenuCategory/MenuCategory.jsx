import React from 'react'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import Cover from '../Cover/Cover'
import useMenu from '../../../hooks/useMenu'

const MenuCategory = ({items ,title,img}) => {


  const [loading] = useMenu()






  return (
    <div>
    
    {
              <div className="grid md:grid-cols-2 gap-10">

              {

            title && <Cover img={img} title="our-menu"></Cover>
            
              }
 {loading && <span className="loading loading-spinner loading-lg"></span>
          
          }

                  {
                      items.map(item => <MenuItem
                          key={item._id}
                          item={item}

                      >

                      </MenuItem>)
                  }
              </div>

    }

    
    </div>
  )
}

export default MenuCategory