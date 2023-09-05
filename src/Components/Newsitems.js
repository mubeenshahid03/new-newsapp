import React from 'react'

function Newsitems(props) {
  return (
    <div>
<div className="card" style={{ width: "18rem" }}>

  <img src={props.imurl} className="card-img-top" alt="..." />
  
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <span  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {props.source}
    <span class="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">
      {props.description}
    </p>
    <p class="card-text"><small class="text-muted">By <i>{props.author}</i> on {props.date}</small></p>
    <a target='_blank' style={{backgroundColor:'#4AE344',border:'none'}} href={props.newsUrl} className="btn btn-info text-light btn-sm">
    <b>  Read More</b>
    </a>
  </div>
</div>


    </div>
  )
}

export default Newsitems