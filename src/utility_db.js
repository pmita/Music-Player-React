import React from 'react';
import {v4 as uuidv4} from 'uuid';

function chillHop(){
    return(
        [
            {
                name: 'Skates',
                cover : 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
                artist: 'SwuM',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=15225',
                color: ['#293433', '#D1AA83'],
                id : uuidv4(),
                active: true
            },
            {
                name: 'Lonely Waves',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
                artist: 'C Y G N',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=14980',
                color: ['#DC77F1', '#97C9F2'],
                id : uuidv4(),
                active: false
            },
            {
                name: 'Kinsfolk',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
                artist: 'Aarigod',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=12996',
                color: ['#99B761', '#55432B'],
                id : uuidv4(),
                active: false
            }
        ]
    );
}

export default chillHop;