import React, {Component} from 'react';
import './packages.css';
import Package_item from "../package/package-item/package-item";
import {Link} from 'react-router-dom';
class packages extends Component {


    constructor(props) {
        super(props)
        this.state = {
            packages: [],
            error: false

        }
    }


    componentDidMount () {
        fetch('https://telecomdb.herokuapp.com/package')
            .then(res => res.json())
            .then(packages =>
     // console.log(packages),
                 this.setState({packages: packages})
            )
            .catch(error => {

                this.setState({error: true});
            });

    }




    render() {

        let packages = (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    {

                        this.state.packages != undefined && (

                        this.state.packages.map((packagex) => {

                                        return (
                                            <Package_item
                                                key={packagex._id}
                                                id={packagex._id}
                                                pName={packagex.pName}
                                                data={packagex.data}
                                                freedata={packagex.freeData}
                                                rental={packagex.monthlyRental}
                                                postPaid={packagex.postPaid}
                                            />
                                        );
                        })
                    )}

            </div>
        );

        return (
            <div className="mjob">
                <br/>

                <div className="container ">
                    <div className="row">
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-10">
                            <Link to="/addnewpackages" type="button" className="btn btn-outline-primary">AddNew</Link>

                            <div className="col-sm-1">

                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-10">

                            {packages}

                            <div className="col-sm-1">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default packages;
