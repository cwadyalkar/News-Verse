import React from "react";

const NewsItem=(props)=>{
  
    let { title, description, imageUrl, newsUrl, author, date ,source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
                {source}
               
              </span>
          <img
            src={
              !imageUrl
                ? "https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/07/full/1691380420-4084.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
             
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
