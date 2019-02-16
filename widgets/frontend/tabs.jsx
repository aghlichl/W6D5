const React = require('react');

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tab_index: 0};
    
  }

  render() {
    const tab_index = this.state.tab_index;
    return(
      <>
      <h1>Tabs</h1>
      <ul>
      {
        this.props.tabs.map((el, idx) =>{
          return(
            <li>
              <h5>{el.title}</h5>
              <article>{el.content}</article>
            </li>
          )
        })
      }
        
      </ul>
      </>
    )
   }
  componentDidMount() {
  }

  componentWillUnmount() {
  }
}



export default Tabs;
