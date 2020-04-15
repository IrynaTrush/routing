import React from 'react';
import './style.css';

const photos = [
    {
        photo: 'https://diolli.com/wp-content/uploads/2017/04/easter-in-Ukraine-pysanka.jpg'
    },
    {
        photo: 'https://images.unian.net/photos/2019_04/1556411591-7640.jpg?0.8851227500828003'
    },
    {
        photo: 'https://img.112.international/original/2020/04/14/289438.jpg'
    },
    {
        photo: 'https://blog.radissonblu.com/wp-content/uploads/2018/02/Easter-Eggs-Ukraine.jpg'
    },
    {
        photo: 'https://in2english.net/wp-content/uploads/2017/04/easter-eggs-1.jpg'
    },
    {
        photo: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/249730/2000x2000-0-70-bd772fa6c52b3fca1c9db6f86cad5266.jpg'
    }
]

export default () => {
    return(
        <div className="photos__wrapper">
         {
             photos.map(item => (
                <img src={item.photo} key={item.photo} alt='easter' className="photo"/>
            ))
         }
        </div>
    )
}