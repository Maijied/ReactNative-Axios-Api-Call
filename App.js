import React from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'

const baseApiUrl = "http://192.168.1.101:8888/api"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  componentDidMount()
  {
    this.getApiData()
  }
  async getApiData(){
    let respon = await axios.get(baseApiUrl+'/testdata')
    let len = respon.data.data.length;
    // console.warn(len)
    // console.warn(respon.data.data[0].category_id)
    // for(var i = 0; i < len; i++){
    //   console.warn(respon.data.data[i].category_id)
    //   this.setState({data:respon.data.data[i].category_id})
    // }
    this.setState({data:respon.data.data})
  }
  
  render(){
    return(
      <View style={{flex: 1}}>
        {
          this.state.data.length>0?
          <View>
            <Text style={{marginBottom:10,marginTop:20, fontSize:20,textAlign: 'center'}}>Top Talent</Text>
              {
                this.state.data.map((item)=><Text style={{margin:20}}>UID: {item.user_id} {'\n'}Category: {item.category_id} {'\n'}Title: {item.title_and_group} {'\n'}Title: {item.followers} {'\n'} </Text>)
              }
          </View>:<Text>Loading Data...</Text>
        }
    </View>
    )
  }
}

export default App;
