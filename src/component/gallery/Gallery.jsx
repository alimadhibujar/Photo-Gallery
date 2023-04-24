import React from "react";
import Photo from "../photo/Photo.jsx";
import SkeletonLoading from "../skeletonLoading/SkeletonLoading.jsx";
import "./gallery.css";
import Header from "../header/Header.jsx";
import { useState, useEffect, useMemo, useCallback } from "react";

const Gallery = () => {
  const [imageList, setImageList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(null);
  const [shouldFetchMorePhotos, setShouldFetchMorePhotos] = useState(false);

  const url = "https://picsum.photos/v2/list";

  const fetchImages = useCallback(
    async (page, track) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${url}?page=${page}&limit=4`);
        const data = await response.json();
        setTimeout(() => {
          data && track
            ? setImageList(data)
            : setImageList([...imageList, ...data]);
          setPage((prev) => prev + 1);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setIsError(`There was an error, ${error}`);
      }
    },
    [imageList]
  );

  const fetchMore = useCallback(() => {
    setShouldFetchMorePhotos((shouldFetchMorePhotos) => !shouldFetchMorePhotos);
  }, []);

  useEffect(() => {
    fetchImages(page);
  }, [shouldFetchMorePhotos]);

  const checkHandler = useCallback(() => {
    setIsChecked((isChecked) => !isChecked);
  }, []);

  const image = useMemo(
    () =>
      imageList.map(({ download_url, author, id, url }) => (
        <Photo
          key={id}
          src={download_url}
          author={author}
          isChecked={isChecked}
          url={url}
        />
      )),
    [imageList, isChecked]
  );

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
              {<SkeletonLoading />}
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
    <div className="error">{isError}</div>
  );
};

export default Gallery;
