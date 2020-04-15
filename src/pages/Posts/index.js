import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../components/post';
import './style.css';

const postdata = [
    {
      content: "We are ready for Easter",
      image: "https://i.ytimg.com/vi/6rWkgkb3TGc/maxresdefault.jpg",
      date: "13 апр"
    },
    {
        content: "Made a pleasant gift",
        image: "https://bunnycakes.typepad.com/.a/6a00e550651b07883401157011f9b7970b-pi",
        date: "14 апр"
    },
    {
        content: "Painted the eggs",
        image: "https://pbs.twimg.com/media/AqBxa8HCEAA8n1e.jpg",
        date: "15 апр"
    },
    {
        content: "More presents",
        image: "https://www.grassasgifts.com/gallery/starwars.jpg",
        date: "16 апр"
    },
]

export default (props) => {
    const { id } = useParams();
    return(
        <div className="posts__wrapper">
           {
                postdata.map(item => (
                    <Post  name='Dart Wader'
            photo="https://i.pinimg.com/originals/c7/2b/5a/c72b5afd6adf44fcc5df1e5b4e124cc0.jpg"
            nickname="@dart_vader"
            content={item.content}
            image={item.image}
            date={item.date}
            key={item.image}
            />
            ))
           }
        </div>
    )
}