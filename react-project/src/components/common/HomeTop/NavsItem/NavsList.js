import './Navslist.scss';
import React ,{Component} from 'react';
import { Accordion, List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import UlList from './liList'

class NavsList extends Component  {
   
    constructor (props) {
        super(props)
        this.state = {
            isShowList : false
        }
        this.changeShow = this.changeShow.bind(this)
    }
    changeShow () {
        
        // console.log(this.state)
        let {isShowList} = this.state
        this.setState({isShowList : !isShowList})
    }


    render(){
        // console.log(this.props)
        let ListItem = this.props.ListItem.ListItem.data
        // let { isShow,ListItem } = this.props;
        // console.log(ListItem)
        // console.log(this.props)
        let {isShowList} = this.state
        return (
            
            // componetWillReceive
            
            <div className ='home-list'>
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                    {  ListItem.map( (item,i) =>{
                        // console.log(item.sub_cate_list)
                        return (
                            <Accordion.Panel key={i} onClick={this.changeShow} header={item.name} >
                                <UlList liList={item.sub_cate_list}/>
                                
                            </Accordion.Panel>
                            
                        )
                        } )
                       
                    }               
                </Accordion>
                {/* <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="Title 1">
                        <List className="my-list" >
                            <List.Item>content 1</List.Item>
                            <List.Item>content 2</List.Item>
                            <List.Item>content 3</List.Item>
                        </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
                        <Accordion.Panel header="Title 3" className="pad">
                        text text text text text text text text text text text text text text text
                        </Accordion.Panel>
                    </Accordion>
                </div> */}

            </div>   
        )
    }
}

export default NavsList;