import React from "react";
import firebase from "/src/firebase/index"
// 上変更 
 
class YsiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ysiList: []
    };
  }
  
  setClick = () => {
    var ysiName = document.getElementById("ystForm").elements["name"]["value"];
    
  }
 
  getClick = () => {
    
  }
  
  render() {
    return <>
      <form id="ystForm">
        <label>
          Name:
          <input type="text" name="name" value="" />
        </label>
      </form>
      <button onClick={this.setClick}>野菜設定</button>
      
      <button onClick={this.getClick}>野菜取得</button>
      {this.state.ysiList.map(val => (
        <p>{val.name}</p>
      ))}
    </>;
  }
}
 
export default YsiList;