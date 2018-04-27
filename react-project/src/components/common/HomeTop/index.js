import React , {Component} from 'react';

import './HomeTop.scss';
import axios from 'axios';
//引入路由
// import { Link } from 'react-router-dom';
import NavsItems from './NavsItem/NavsItems'



class HomeTop extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ListItem :null ,
            isShow : false
        }
        this.changeShow = this.changeShow.bind(this)
        
    }
    goodsDate () {
        axios.get('/uj/v4/tags/discovery').then( res=>{
            // console.log(res);

            this.setState({ ListItem : res.data })
            
            // console.log(  le  )  
            
            // this.state.titleItem

        })
    }
    componentWillMount () {
        this.goodsDate();
       
    }
    changeShow () {
        this.setState({ isShow : false })
    }
    getListItem(){
       // console.log(this.state.ListItem)
        if( this.state.ListItem ){
            let {ListItem} = this.state
           return <NavsItems ListItem={ListItem} changeShow = {this.changeShow}/>
            
        }

        return ""
    }

    changeList (id) {
        if(id === 1){
            let {isShow} = this.state
            this.setState({ isShow : !isShow })
        }
    }

 
    render () {
        
       

    
        //console.log(this.state)
        let {navs} = this.props
        // let {ListItem} = this.staste
        return (
            <div className='home-common'>
                <div className ='home-top'>
                <h1>
                    <img src='http://m.ujipin.com/media/images/logo_t.png' />
                </h1>
                    <div className='home-icon'>
                        {
                            navs.map( nav => {
                                return (
                                    <i className = {`fa ${nav.icon}`} key={nav.id} 
                                    onClick={this.changeList.bind(this ,nav.id)} ></i>
                                )
                            })
                        }
                        
                    </div>
                </div>
                {this.state.isShow ? this.getListItem():''}
            </div>
        )
    }
}
HomeTop.defaultProps ={
    navs : [
        {id:1,icon:'fa-address-book'},
        {id:2,icon:'fa-user-o' ,},
        {id:3,icon:'fa-shopping-cart'},
    ]
}


export default HomeTop;

// https://pages.kaola.com/pages/frame/data/ajax/cosmetic.shtml?type=1
// https://pages.kaola.com/pages/frame/data/ajax/2faed7715d5940dda0d5b678238bb55b.shtml?type=1
//  {/* <Link to = {`/homeinput`} className = 'home-input'>
//                     <i className = "fa fa-search"></i>
//                     <span>{this.state.isShow ? this.state.titleItem[0].name : ""  }</span>
//                 </Link> */}