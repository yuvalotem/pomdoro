import React, { Component } from 'react';
import YouTube from 'react-youtube';

class MusicRow extends Component {

    render() {
        const opts = []
        for(let i = 1; i < 5; i++){
            opts.push({
                height: '130',
                width: '200',
            })
        }
        if (this.props.shouldPlayMusic) {
            opts[this.props.videoChosen] = {
                height: '130',
                width: '300',
                playerVars: {
                    autoplay: 1
                },
            };
        } 
    
        return (
            <div className='videos'>
                <YouTube videoId="C7dPqrmDWxs" opts={opts[0]} />
                <YouTube videoId="ru0K8uYEZWw" opts={opts[1]} />
                <YouTube videoId="dVwE5u1xFLw" opts={opts[2]} />
                <YouTube videoId="nZuLKozbhyE" opts={opts[3]} />
            </div>
        )
      }

}

export default MusicRow;