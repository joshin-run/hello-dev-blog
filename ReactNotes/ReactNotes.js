// var React = require('react');
// var ReactDOM = require('react-dom');
//
// //Create component
// var TodoComponent = React.createClass({
//   getInitialState: function(){
//     return {
//       todos: ['washup, 'eat some cheese', 'take a nap'],
//       age: 28
//     }
//   }
//   render: function(){
//     return(
//       <div id="todo-list">
//         <p>The busiest people have the most leisure...</p>
//         <ul>
//           <li>{this.state.todos[0]}</li>
//           <li>{this.state.todos[1]}</li>
//           <li>{this.state.todos[2]}</li>
//         </ul>
//         <ListComponent todos={this.state.todos} />
//       </div>
//       );
//     } // render
//   });
//
//   var myChees = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50'};
//
//   //put component into html page
//   React.DOM.render(<TodoCompenent mssg="I like cheese" cheese={myCheese} />, document.getElementById('root'));
//
//
// <input type="text" value={this.state.homelink}...


// used to make an API call
componentWillMount() {
  Api.get('example.com/api/users').then((data) => {
    this.setState({users: data});
  })
}
