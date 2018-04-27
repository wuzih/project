import './NavsItems.scss'

import React , {Component} from  'react';
import {Link} from 'react-router-dom'
import NavsList from './NavsList';

class NavsItems extends Component {
    constructor (props) {
        super(props)

    }

    render () {
        // console.log(this.props)
        return (
            <div className='navs-item'>
                <div className='navs-input'>
                    <Link to = {`/homeinput`} className = 'home-input'>
                        <i className = "fa fa-search"></i>
                        <span>请输入搜索内容</span>
                    </Link> 
                    <p onClick={this.props.changeShow}>取消</p>
                </div>
                <NavsList ListItem={this.props} />
            </div> 
        )
    }
}

export default NavsItems;