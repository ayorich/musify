import React, { Component } from "react";
import { connect } from 'react-redux';
import './SidebarList.css';

class SidebarList extends Component {
    
    render(){
        // console.log(this.props.list);
        const listData = [...this.props.list];
        console.log(listData);
        const list = listData[0];
        console.log(list);

        const dataArray = [];
        for(let key in list){
            dataArray.push(list[key]);
        }
        console.log(dataArray);

        const displayData = dataArray.map(key => {
            console.log(key)
            return (
              <li key={key.id}>
                <div className="results__link">
                  <div className="results__data">
                    <p className="results__author">Artist : {key.artist.name}</p>
                    <h4 className="results__name">Song Title : {key.title}</h4>
                  </div>
                </div>
              </li>
            );});

        // for (let key in list) {
        //   console.log(list[key].id);
        //      displayData = 
        //       <li id={list[key].id}>
        //         <div class="results__link">
        //           <figure class="results__fig">
        //             <img src={null} alt='imagep' />
        //           </figure>                  
        //           <div class="results__data">
        //             <h4 class="results__name">{list[key].title}</h4>
        //             <p class="results__author">{list[key].artist.name}</p>
        //           </div>
        //         </div>
        //         {list[key].title}
        //       </li>;
            
        //     console.log(displayData);

        // }
        return displayData
    }
};


const mapStateToProps = state => {
  return {
    list: state.musicBuilder,
    
  };
};


export default connect(mapStateToProps)(SidebarList);
