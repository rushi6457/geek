import React, { useState } from 'react';

const Cart = () => {
    const data = JSON.parse(localStorage.getItem('cartItem')) || [];
    const [item,setItem] = useState(data)
    console.log(item);

    const handledelete = (dataa) =>{
        // console.log(dataa)
        // let a = item.filter((el) => el.id !== dataa.id) 
        // setItem(a)
       const updatedItems = item.filter(el => el.id !== dataa.id);
    setItem(updatedItems);
    localStorage.setItem('cartItem', JSON.stringify(updatedItems));
     
    }
    return (
        <div style={{paddingTop:'10%'}}>
           
            <table style={{width:'90%',margin:'auto'}}>
                <tr>
                    <th style={{border:'1px solid',fontSize:'1.5rem',padding:'5px'}}>Image</th>
                    <th style={{border:'1px solid',fontSize:'1.5rem',padding:'5px'}}>Name</th>
                    <th style={{border:'1px solid',fontSize:'1.5rem',padding:'5px'}}>Price</th>
                    <th style={{border:'1px solid',fontSize:'1.5rem',padding:'5px'}}>Quantity</th>
                    <th style={{border:'1px solid',fontSize:'1.5rem',padding:'5px'}}>Delete</th>
                </tr>
                {
                    item.map((el)=>{
                        return (
                            <tr style={{border:'1px solid'}}>
                                <td style={{border:'1px solid'}}><img width={'100px'} src={el.imageURL} alt="" /></td>
                                <td style={{border:'1px solid'}}>{el.name}</td>
                                <td style={{border:'1px solid'}}>{`RS: ${el.price}`}</td>
                                <td style={{border:'1px solid'}}>
                                    <select>
                                        <option name="" id="">Select Quantity</option>
                                        <option name="one" value={'one'} id="">1</option>
                                        <option name="two" value={'two'} id="">2</option>
                                        <option name="three" value={'three'} id="">3</option>
                                        <option name="four" value={'four'} id="">4</option>
                                    </select>
                                </td>
                                <td style={{border:'1px solid'}}>
                                    <button onClick={() =>handledelete(el)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    );
}

export default Cart;
