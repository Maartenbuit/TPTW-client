import React from 'react'

export default class AlliedGame extends React.Component {
  shuffle = array => {
    return array.sort(() =>{
      return 0.5 - (Math.random()*3)
    })
  }

  

  render() {
    const copyAnswers = this.props.answers.map(answer => answer)
    const shuffled = this.shuffle(copyAnswers)  

    const answers = shuffled.map(answer => 
      <button value={answer} onClick={this.props.handleEvent}>{answer}</button>
    )

    return (
      <div>
        <h1 className= 'allies'>You are the allied force</h1>
        <p>The major Allied powers in World War I were Great Britain (and the British Empire), France, and the Russian Empire, formally linked by the Treaty of London of September 5, 1914. Other countries that had been, or came to be, allied by treaty to one or more of those powers were also called Allies: Portugal and Japan by treaty with Britain; Italy by the Treaty of London of April 26, 1915, with all three powers. Other countries—including the United States after its entry on April 6, 1917—that were arrayed against the Central Powers were called “Associated Powers,” not Allied powers; U.S. President Woodrow Wilson emphasized that distinction to preserve America’s free hand. The Treaty of Versailles (June 28, 1919) concluding the war listed 27 “Allied and Associated Powers”: Belgium, Bolivia, Brazil, the British Empire, China, Cuba, Czechoslovakia, Ecuador, France, Greece, Guatemala, Haiti, the Hejaz, Honduras, Italy, Japan, Liberia, Nicaragua, Panama, Peru, Poland, Portugal, Romania, Serb-Croat-Slovene State, Siam, the United States, and Uruguay.</p>

        <h1>Question: </h1>
        <p>{this.props.question}</p>
        {answers}
      </div>
    )
  }
}