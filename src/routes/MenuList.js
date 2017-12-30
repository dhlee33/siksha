import React from 'react';
import Menu from '../components/Menu'

const MenuList = ({time,data}) =>{

        function loadMenu() {
            return(
                <div>
                    {data.map((menu,i)=>{
                        return(
                            <div>
                                <Menu restaurant ={menu} key={i} index={i}/>
                            </div>
                        )

                    })}
                </div>

            )
        }
    return(
        <div>
            {time}
            {loadMenu()}
        </div>
    )
}

export default MenuList