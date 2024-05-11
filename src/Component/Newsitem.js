import React from 'react'


export default function Newsitem(props) {

    
    return (
        <div className=' '>
            <div className="card " >
                <span className={`position-absolute top-0  translate-middle badge rounded-pill bg-${"danger"}`} style={{ left: '30%', zIndex: "1" }}>
                    {props.name}
                </span>
                <img src={!props.urlToImage ? "https://www.livemint.com/lm-img/img/2023/08/25/600x338/Zepto1_1640068135522_1692987444186.jpg" : props.urlToImage} className="card-img-top" alt="..." width={"150px"} height={"200px"} />
                <div className="card-body">
                    <div className="">
                        <h5 className="card-title  ">{props.title}</h5>
                        <p className="card-text ">{props.description}</p>
                        <p className="card-text"><small className="text-body-secondary">BY {props.author} on 3 {new Date(props.date).toGMTString(props.date)} </small></p>
                        <a href={props.newsurl} target="_blank" className="btn btn-sm btn-dark " rel="noreferrer">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )

}



