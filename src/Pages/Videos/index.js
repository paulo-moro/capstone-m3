import ReactPlayer from 'react-player'
import { StyledMain } from './style'

function Videos() {
    return (
        <StyledMain>
                <h1>Saiba mais sobre reciclagem:</h1>
            <section>
                <div className="video">
                <ReactPlayer url='https://www.youtube.com/watch?v=DnH4Hb1s8D8' width='100%'/>
                </div>
                <div className='text'>
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolor impedit ad tempora rerum cupiditate nisi, nostrum quam eum illum deserunt totam natus sunt animi rem quis atque libero maiores?</p>
                </div>
            </section>
            <section>
            <div className="video">
                <ReactPlayer url='https://www.youtube.com/watch?v=DnH4Hb1s8D8' width='100%'/>
                </div>        
                <div className='text'>

                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolor impedit ad tempora rerum cupiditate nisi, nostrum quam eum illum deserunt totam natus sunt animi rem quis atque libero maiores?</p>
                </div>
            </section>  
              <section>
              <div className="video">
                <ReactPlayer url='https://www.youtube.com/watch?v=DnH4Hb1s8D8' width='100%'/>
                </div>       
                <div className='text'>

                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolor impedit ad tempora rerum cupiditate nisi, nostrum quam eum illum deserunt totam natus sunt animi rem quis atque libero maiores?</p>
                </div>    </section>   
                 <section>
                 <div className="video">
                <ReactPlayer url='https://www.youtube.com/watch?v=DnH4Hb1s8D8' width='100%'/>
                </div>            
                <div className='text'>

                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolor impedit ad tempora rerum cupiditate nisi, nostrum quam eum illum deserunt totam natus sunt animi rem quis atque libero maiores?</p>
                </div>
            </section>   
             <section>
             <div className="video">
                <ReactPlayer url='https://www.youtube.com/watch?v=DnH4Hb1s8D8' width='100%'/>
                </div>      
                <div className='text'>

                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolor impedit ad tempora rerum cupiditate nisi, nostrum quam eum illum deserunt totam natus sunt animi rem quis atque libero maiores?</p>
                </div>    </section>
        </StyledMain>

    )
}

export default Videos