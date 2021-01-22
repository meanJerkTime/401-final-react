import { ChevronRightSharp } from '@material-ui/icons';
import React from 'react';
import './rooms.scss';



export default function Landing() {

  return (
    <>
        <ul className='top'>
            {
                rooms.map(room =><button>
                    <li>{room.roomName}</li>
                    </button>
            )
            }
        </ul> 
    </>
  );
}

const rooms = [
    {
        roomName: 'Room1',
        players:'chris,edgar,brendon'
    },
    {
        roomName: 'Room2',
        players:'Kory, Joe, Diane'
    },
    {
        roomName: 'Room3',
        players:'Peng'
    },
]

