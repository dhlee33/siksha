import React from 'react';
import Menu from '../components/Menu'

const MenuList = ({time,data}) =>{

        function loadMenu() {
            return(
                <div>
                    {data.map((menu,i)=>{
                        return(
                            <div>
                                <Menu key={i} restaurant ={menu}  index={i}/>
                            </div>
                        )

                    })}
                </div>

            )
        }
    return(
        <div>
          <h1 align="center">{time}</h1>
            {loadMenu()}
        </div>
    )
}

export default MenuList