import React, {useState,useEffect} from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('ak26');
     

     useEffect(()=>{
        setSelectedVideo(videos[0])
     }, [videos]);
    

/*     const onVideoSelect = (video) =>{
        console.log('From the APP!' , video)
        setSelectedVideo(video);
    } */

/*     const onTermSubbmit = async (term) =>{
        
        setSelectedVideo(response.data.items[0]);
    }; */

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    );

};
export default App;

/* class App extends React.Component{

    state = {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onTermSubbmit('ak26')
    }

    onVideoSelect = (video) =>{
        console.log('From the APP!' , video)
        this.setState({
            selectedVideo: video
        })
    }

    onTermSubbmit = async (term) =>{
        const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubbmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
        );
    }
} */
