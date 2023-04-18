import React from "react";
import Photo from "../photo/Photo.jsx";
import SkeletonLoading from "../skeletonLoading/SkeletonLoading.jsx";
import "./gallery.css";
import Header from "../header/Header.jsx";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [imageList, setImageList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [shouldFetchMorePhotos, setShouldFetchMorePhotos] = useState(false);

  const url = "https://picsum.photos/v2/list";

  const fetchImages = (page, track) => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(`${url}?page=${page}&limit=4`)
        .then((response) => response.json())
        .then((data) => {
          data && track
            ? setImageList(data)
            : setImageList([...imageList, ...data]);
          setPage((prev) => prev + 1);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsError(true);
          setMessage(`There was an error, ${error}`);
        });
    }, 2000);
  };

  const fetchMore = () => {
    setShouldFetchMorePhotos(!shouldFetchMorePhotos);
  };

  useEffect(() => {
    fetchImages(page);
  }, [shouldFetchMorePhotos]);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const image = imageList.map(({ download_url, author, id, url }) => (
    <Photo
      key={id}
      src={download_url}
      author={author}
      isChecked={isChecked}
      url={url}
    />
  ));

  return !isError ? (
    <main className="gallery">
      <div className="main-content">
        <Header
          fetchImages={() => fetchImages(page, true)}
          checkHandler={checkHandler}
        />

        {isLoading ? (
          <>
            <section className="photo-gallery">
              {image}
              <SkeletonLoading />
            </section>
          </>
        ) : (
          <section className="photo-gallery">{image}</section>
        )}
        <button className="fetch-button" onClick={() => fetchMore()}>
          <span>More Photos</span>
        </button>
      </div>
    </main>
  ) : (
    <div className="error">{message}</div>
  );
};

export default Gallery;
