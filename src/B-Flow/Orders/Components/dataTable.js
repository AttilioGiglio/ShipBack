/* 
Bugs-View: 7
(Bug-number:5) Functionality of NavBarFilter
(Bug-number:1) Functionality of Confirm row button
(Bug-number:1) Change data in&output from table: Fecha y hora de salida y llegada de despachos, costos de despachos, courrier de despacho, userID, UserName, UserEmail, n° de factura, ProductosID, ProductosPrecios.  
*/

import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";
import ExportToExcel from "./exportToExcel.js"
import './dataTable.css'

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: 'GET'
        }).then(response => response.json()).then(posts => {
            this.setState({ posts: posts })
        })
    }

    deleteRow(id) {
        const indexOne = this.state.posts.findIndex(post => {
            return post.id === id
        })
        let copyPostsOne = [...this.state.posts]
        copyPostsOne.splice(indexOne, 1)

        this.setState({ posts: copyPostsOne })
    }

    confirmRow(id){
        const indexTwo = this.state.posts.findIndex(post => {
            return post.id === id
        })
        let copyPostsTwo = [...this.state.posts]
        copyPostsTwo.splice(indexTwo, 0, copyPostsTwo)

        this.setState({ posts: copyPostsTwo })
    }

    render() {
        const columns = [
            {
                Header: "Fecha Pedido",
                accessor: "userId",
                style: {
                    textAlign: 'right'
                },
                width: 150,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: 'ID Usuario',
                accessor: 'id',
                style: {
                    textAlign: 'right'
                },
                width: 150,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: 'ID Despacho',
                accessor: 'id',
                style: {
                    textAlign: 'right'
                },
                width: 150,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: 'ID Factura',
                accessor: 'title',
                sortable: false,
                filterable: false
            },
            {
                Header: 'Productos',
                accessor: 'body',
                sortable: false,
                filterable: false,
            },
            {
                Header: 'Courier',
                accessor: 'body',
                sortable: false,
                filterable: false,
            },
            {
                Header: 'Precio',
                accessor: 'body',
                sortable: false,
                filterable: false,
            },
            {
                Header: 'Borrar',
                Cell: props => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{ width: '80px', textAlign: 'center', background: ' rgb(248, 79, 79)' }}
                                onClick={() => {
                                    this.deleteRow(props.original.id);
                                }}
                            >Delete</button>
                        </div>
                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                // Bug: It doesn´t work the confirm button, later on, I will try to fix it.
                Header: 'Confirmar',
                Cell: props => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button 
                            style={{ width: '80px', textAlign: 'center', background: '#00a8e8' }}
                            onClick={() => {
                                this.confirmRow(props.original.id);
                            }}
                            >Confirm</button>
                        </div>
                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100
            }
        ]
        return (
            <div>
                <ReactTable
                    columns={columns}
                    data={this.state.posts}
                    noDataText={'Please Wait...'}
                    filterable
                    defaultPageSize={15}
                // showPagination={false}
                >
                    {(state, filtredData, instance) => {
                        this.reactTable = state.pageRows.map(post => { return post._original });
                        return (
                            <div>
                                {filtredData()}
                                <ExportToExcel posts={this.reactTable} />
                            </div>
                        )
                    }}
                </ReactTable>
            </div>
        )
    }
}

export default DataTable;