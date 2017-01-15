import React from 'react';
import Radium from 'radium';
import '../styles/chat.css';

class Chat extends React.Component {

  constructor(props){
    super(props);

    this.addChat = this.addChat.bind(this);

    this.state = {
      messages: 1
    }
  }


  addChat(count){

    if(count < 3) {
      this.setState({
        messages: count+1
      });
    }
  }

  render() {
    let msgs = this.state.messages;
    return(
        <section className="bg" onClick={() => {this.addChat(this.state.messages)}}>
          {
            msgs === 2 &&
            <div>
              <div className="me1">
                <img src="../images/message1.png" />
              </div>
              <div className="you slide">
                <img src="../images/message2.png" />
              </div>
            </div>
          }
          {msgs === 3 &&
            <div>
              <div className="me1">
                <img src="../images/message1.png" />
              </div>
              <div className="you">
                <img src="../images/message2.png" />
              </div>
              <div className="me2">
                <img src="../images/message3.png" />
              </div>
            </div>
          }
          { msgs === 1 &&
            <div className="me1 slide" >
              <img src="../images/message1.png" />
            </div>
          }

        </section>
    )
  };
};


export default Radium(Chat);
