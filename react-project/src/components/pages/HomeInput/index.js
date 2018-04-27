

import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import './HomeInput.scss'
import axios from 'axios'
import HomeTop from  '../../common/HomeTop';


class HomeInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            aItem : []
        }
        this.cirA = this.cirA.bind(this)
    }
    componentWillMount () {
        axios.get('/uj/v4/search/hotwords').then(res=>{ 
            // console.log(res.data.data.content)
            this.setState({aItem : res.data.data.content})

        })
    }

    cirA () {
        if(this.state.aItem){
            let {aItem} = this.state
            // console.log(aItem)
            return aItem.map( (item,i) => {
                return <Link to = {'/listdateil/'+item} href="#" key={i}>{item}</Link>
            } )
        }
        return ''
    }

    render () {
        
        // console.log(this)
        return (
            <div className='home-top-all'>
                <HomeTop/>
                <div className='seacrh-all'>
                    <div className = 'seacrh-top'>
                        <Link to='/'  className="fa fa-angle-left"></Link>
                        <form className='seacrh-from' action=''>
                            <i className = "fa fa-search"></i>
                            <input type="text" className='seacrh-input'/>
                            <button className='seacrh-btn'>搜索</button>
                        </form>
                    </div>
                    <h3>热门搜索</h3>
                    <div className="seacrh-bot">
                        {this.cirA()}
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeInput;