import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderAction } from '../../../redux/Action/Order.action';


function OrderData(props) {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const cart = useSelector(state => state.cart)
    const order = useSelector(state => state.order)
    console.log(order.order);


    useEffect(() => {
        dispatch(getOrderAction())
    }, [])


    const columns = [
        { field: 'id', headerName: 'user id', width: 170},
        {
            field: 'product',
            headerName: 'product',
            width: 700,
            renderCell: (params) => (
                params.row.product.map((p)=>(
                    <>
                    <img src={p.profile_img} width={50} height={50}/> <br />
                   
                    <span>{p.name}, </span>
                    <span> Quantity:{p.quantity},</span>
                    <span> Price:{p.price},</span>
                    </>
                ))
            )
        },
        { field: 'phone', headerName: 'contact', width: 150 },
        { field: 'email', headerName: 'email', width: 150 },
        { field: 'radioGroup', headerName: 'radioGroup', width: 150 },
        { field: 'Address', headerName: 'Address', width: 150 },
        { field: 'totalcart', headerName: 'Total', width: 150 },
    ];


    return (
        <div>
            <div>
                <h2>Order Details</h2>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={order.order}
                        columns={columns}
                        pageSize={6}
                        rowsPerPageOptions={[6]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default OrderData;