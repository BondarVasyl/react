import React, { Component } from 'react';
import {connect} from 'react-redux'
import { actions } from '../redux/modules/currencys'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import { currencySelector, isFetchingSelector } from '../redux/selectors/currencySelector'

class Currency extends Component {
    componentDidMount(){
        this.props.getCurrency()
        console.log(this.props);
    }

    render() {
        const {pupils, isFetching} = this.props
        return pupils && !isFetching ?
            <div className = "mt-5 ml-5 mr-5 mb-5">


                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">id </th>
                        <th scope="col">Symbol </th>
                        <th scope="col">Name </th>
                        <th scope="col">Status </th>
                        <th scope="col">Description </th>
                        <th scope="col">Price</th>
                        <th scope="col">What happened?</th>
                    </tr>
                    </thead>
                 <tbody>

                {
                    _.map(pupils.data, pupil=>
                             <tr>
                                <th scope="row">{pupil.id}</th>
                                <th >  {pupil.symbol} </th>
                                <td>{pupil.name}</td>
                                <td>{pupil.status} </td>
                                <td> {pupil.description} </td>
                                <td>{pupil.price} </td>
                                 <td>Nothing</td>
                             </tr>

                    )
                }
                </tbody>
                </table>
            </div>
             :
            <div>Loading...</div>
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    pupils:currencySelector(state),
    isFetching:isFetchingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Currency)
