import React, { Component } from 'react'
import Posts from './Posts'

class Sidebar extends Component {

  // renderMonth (post) {
  //   return (
  //     <li> {
  //       post.datestamp
  //     }
  //     </li>
  //   )
  // }
  //
  // renderMonths () {
  //   return (
  //     <ul> {
  //       this.props.posts.map(p => this.renderMonth(p))
  //     }
  //     </ul>
  //   )
  // }

  render() {

    // const posts = this.state.posts.posts;
    //
    // const tags = [];
    // const monthArray = [];
    // const year = [];
    //
    // posts.map((posts.posts, i, a)=>{
    //   const tagsArray = posts.posts.tags;
    //   tagsArray.map((c, i, a)=> {
    //     if(!tags.includes(c)) {
    //       tags.push(c)
    //     }
    //   })
    // })
    //
    // posts.map((posts.posts, i, a)=>{
    //   const monthArray = posts.posts.dateStamp.month;
    //   monthArray.map((c, i, a)=> {
    //     if(!month.includes(c)) {
    //       month.push(c)
    //     }
    //   })
    // })


  //   const postsSBArr = this.state.posts.posts;
  //
  //   function filter(target) {
  //     console.log('target', target);
  //   }
  //
  //   function other(target) {
  //     console.log('other', target);
  //   }

    // function firstFilter(target) {
    //   console.log(postsSBArr.filter(function(target){
    //     return ;
    //   }));
    // }

    // function trueFilter(target) {
    //   let targetArr = [target]
    //   console.log(postsSBArr.filter(function(target){
    //     let targetResult = targetArr.some(postsSBArr);
    //     return targetResult
    //     // return el.price <= 1000 &&
    //     //  el.sqft >= 500 &&
    //     //  el.num_of_beds >=2 &&
    //     //  el.num_of_baths >= 2.5;
    //   },
    // function trueFilter(target) {
    //
    //   console.log(postsSBArr)
    //   }



    // console.log('posts passed now logged from Sidebar.js', postsSBArr);


    // const postsSBArr = this.state.posts.posts;
    // console.log('posts passed now logged from Sidebar.js', postsSBArr);
    // <li ('April'),

    return (
      <div className="app-aside-nav">
        <div className="para">
          <p>Archive</p>

            <ul>
              <li>2017</li>
              <ul className="months">
                <li>April</li>
                <li>March</li>
                <li>February</li>
                <li>January</li>
              </ul>
              <li>2016</li>
              <ul className="months">
                <li>December</li>
              </ul>
            </ul>
          <p>Tags</p>
            <ul className="tags">
              <li>html</li>
              <li>element</li>
              <li>document</li>
              <li>css</li>
              <li>style</li>
              <li>color</li>
              <li>element</li>
              <li>javascript</li>
              <li>language</li>
              <li>interactive</li>
              <li>jquery</li>
              <li>library</li>
              <li>react</li>
              <li>facebook</li>
            </ul>
        </div>
      </div>
    )
  }

}

module.exports = Sidebar
