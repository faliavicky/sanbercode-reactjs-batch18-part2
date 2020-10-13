import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(),show:true};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    componentDidUpdate()
    {
        if (this.state.date===this.state.date.setSeconds(10)){
            this.state.show = false
        }
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
          <>
          {
              this.state.date && (
                <div>
                <h1>sekarang jam : {this.state.date.toLocaleTimeString()}</h1>
              </div>
              )
          }
          </>
      )
    }
  }


  

  class Timer extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        time: 100,
        show: true
      }
    }

    componentDidMount(){
      if (this.props.start !== undefined){
        this.setState({time: this.props.start})
      }
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );

    
    }

    componentDidUpdate()
    {
        if(this.state.time === 0)
        {
            this.state.show = false
        }
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        time: this.state.time - 1 
      });
    }

    

    render(){
      return(
        <>
            {
            this.state.show && (
            <h1>
            hitung mundur : {this.state.time}
            </h1>
                )
            }
        </>
      )
    }
  }


class Tugas11 extends React.Component{
    render(){
        return(
            <>
                <div style={{display:"flex",justifyContent:"center"}}>
                <div><Clock/></div>
                <div style={{paddingLeft:"100px"}}><Timer/></div>
                </div>
            </>
        )
    }
}

export default Tugas11;