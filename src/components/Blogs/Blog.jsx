import React from 'react';
import './Blog.scss'
const Blog = () => {
    const blogData =[
        {   id:1,
            name:"Understand With Javascript",
            post:"JavaScript is a multi-paradigm, dynamic language with types and operator . Its build in object in method. It made by Brendan which in 1995...",
            a:'https://riazakhanda.medium.com/javascript-8c420bfef001',
            image:"https://i.ibb.co/7WLyBZN/james-harrison-vp-Oe-Xr5wm-R4-unsplash.jpg"
        },
        {   id:2,
            name:"Understand With React JS",
            post:"React is a front-end JavaScript library which maintained by Facebook. React is a single page application or mobile application.....",
            a:'https://riazakhanda.medium.com/react-ee5b43176c4',
            image:"https://i.ibb.co/Mn1jBTt/lautaro-andreani-xk-Baqlcqeb4-unsplash.jpg"
        },
        {   id:3,
            name:"Javascript Data Types",
            post:"JavaScript is a multi-paradigm, dynamic language with types and operator . Its build in object in method. It made by Brendan which in 1995. JavaScript is a Syntax base on java and c ......",
            a:'https://riazakhanda.medium.com/javascript-8c420bfef001',
            image:"https://i.ibb.co/8D09LCc/walling-Ov-LXb-URo9-Wo-unsplash.jpg"
        },
    ]
    return (
        <div className='container py-5 my-5'>
            <div className="row ">
                <div className="col-lg-6 pt-4 ">
                    <div className="blog-content">
                        <h2> Javascript</h2>
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*VyhCGMBcLZmD6FGdvULcYQ.jpeg" alt="" />
                        <h3>Understand With JavaScript</h3>
                        <p>JavaScript is a multi-paradigm, dynamic language with types and operator . Its build in object in method. It made by Brendan which in 1995. JavaScript is a Syntax base on java and c language — there are lots of language that used structured from JavaScript...</p>
                        <a href="https://riazakhanda.medium.com/javascript-8c420bfef001" target="_blank" rel="noopener noreferrer">Readmore</a>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="article">
                        <h2>My recent blogs</h2>
                        {
                            blogData.map(item=>{
                                return <div key={item.id} className='blogs-containers-item'>
                                       <div className="blogs-single-img">
                                        <img src={item.image} alt="" />
                                       </div>
                                       <div className="article-content-description">
                                        <h3>{item.name}</h3>
                                        <p>{item.post}</p>
                                        <a href={`${item.a}`}>Readmore</a>
                                       </div>
                                    </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;