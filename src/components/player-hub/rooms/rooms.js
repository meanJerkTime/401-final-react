import {React} from 'react';
import './rooms.scss';
import { If, Then } from 'react-if';



export default function Landing(props) {

    let list = props.values;
    console.log(props);

    

  return (
    <div className='top'>
        <ul className=''>
            
                <If condition={list !== undefined}>
                    <Then>
                  { Object.keys(list).map(room =>
                            <li key={Math.random()}><button onClick={() => props.joinRoom(room)}>{room}</button></li>
                    )
                  }
                    </Then>
                </If>
            
        </ul> 
    </div>
  );
}
