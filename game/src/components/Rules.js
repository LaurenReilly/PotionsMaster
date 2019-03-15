import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import cauldron from './audio/cauldron.png';
import lacewing from './audio/lacewing.png';
import boomslang from './audio/boomslang.png';
import bicorn from './audio/bicorn.png';
import dragon from './audio/dragon.png';
import beetle from './audio/beetle.png';
import newt from './audio/newt.png';

class Rules extends Component {
    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/');
        } else {
            return
        }
      }

    handleClick() {
        this.props.history.push('/game')
    }

    render(){
        return (
            <div>
                <Header/>
                <div className="d-flex flex-row justify-content-between mx-5 mt-4">
                    <div>
                        <h4>Rules:</h4>
                        <ul>
                            <li>Follow Snape's instructions exactly!</li>
                            <li>Work quickly before he erases the board.</li>
                            <li>Try not to get distracted by his insults.</li>
                        </ul>
                        <img 
                            onClick={() => this.handleClick()} 
                            className="images mt-5 ml-5 mb-2" src={cauldron} 
                            alt="cauldron" style={{width: 200, height: 200}}/>
                        <h2>Lets Brew Some Potions!</h2>
                    </div>
                    <div>
                        <h3 className="text-center">Ingredients</h3>
                        <div className="d-flex flex-wrap" style={{width:400, height:400}}>
                            <div className="m-2">
                                <p className="text-center">Dragon Blood</p>
                                <img className="images" src={dragon} alt="dragon blood" style={{width: 100, height: 100}}/>
                            </div>
                            <div className="m-2">
                                <p className="text-center">Lacewing Fly</p>
                                <img className="images" src={lacewing} alt="lacewing fly" style={{width: 100, height: 100}}/>
                            </div>
                            <div className="m-2">
                                <p className="text-center">Bicorn Horn</p>
                                <img className="images" src={bicorn} alt="bicorn horn" style={{width: 100, height: 100}}/>
                            </div>
                            <div className="m-2">
                                <p className="text-center">Beetle Eyes</p>
                                <img className="images" src={beetle} alt="beetle" style={{width: 100, height: 100}}/>
                            </div>
                            <div className="m-2">
                                <p className="text-center">Eye of Newt</p>
                                <img className="images" src={newt} alt="newt" style={{width: 100, height: 100}}/>
                            </div>
                            <div className="m-2">
                                <p className="text-center">Boomslang Skin</p>
                                <img className="images" src={boomslang} alt="boomslang" style={{width: 100, height: 100}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      username: state.username,
    }
  }

export default connect(mapStateToProps, null)(Rules);