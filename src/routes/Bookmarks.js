import React from 'react';
import Menu from '../components/Menu'

const Bookmarks = ({time,data,bookmark}) =>{

    function loadMenu() {
        return(
            <div>
                {data.map((menu,i)=>{
                    return(
                        !bookmark[i]?
                            (<div>
                            <Menu restaurant ={menu} index={i}/>
                        </div>):null
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
export default Bookmarks;