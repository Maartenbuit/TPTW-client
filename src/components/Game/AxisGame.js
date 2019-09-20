import React from 'react'

export default class AxisGame extends React.Component {
  render() {
    
    const answers = this.props.axisQuestions[0].answers.map(answer =>
      <button value={answer} onClick={this.props.handleEvent}>{answer}</button>
    )
    return (
      <div>
        <h1 className='axis'>You are the evil axis force</h1>
        <p>The Central Powers consisted of the German Empire and the Austro-Hungarian Empire at the beginning of the war. The Ottoman Empire joined the Central Powers later in 1914. In 1915, the Kingdom of Bulgaria joined the alliance. The name "Central Powers" is derived from the location of these countries; all four (including the other groups that supported them except for Finland and Lithuania) were located between the Russian Empire in the east and France and the United Kingdom in the west. Finland, Azerbaijan, and Lithuania joined them in 1918 before the war ended and after the Russian Empire collapsed</p>

        <h1>Question: </h1>
        <p>{this.props.question}</p>
        {answers}

        <h1 className='userMessage'>{this.props.message}</h1>
      </div>
    )
  }
}



