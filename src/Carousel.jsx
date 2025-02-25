import React, { useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  useEffect(() => {
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    const carousel = document.querySelector(".carousel");
    const list = carousel.querySelector(".list");
    const thumbnail = carousel.querySelector(".thumbnail");

    let items = list.children;
    let thumbnails = thumbnail.children;

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let timeout;
    let autoNext = setTimeout(() => {
      next.click();
    }, timeAutoNext);

    const slide = (direction) => {
      if (direction === "next") {
        list.appendChild(items[0]);
        thumbnail.appendChild(thumbnails[0]);
        carousel.classList.add("next");
      } else {
        list.prepend(items[items.length - 1]);
        thumbnail.prepend(thumbnails[thumbnails.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
      }, timeRunning);

      clearTimeout(autoNext);
      autoNext = setTimeout(() => {
        next.click();
      }, timeAutoNext);
    };

    next.addEventListener("click", () => slide("next"));
    prev.addEventListener("click", () => slide("prev"));

    return () => {
      next.removeEventListener("click", () => slide("next"));
      prev.removeEventListener("click", () => slide("prev"));
    };
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
          <div className="text-bg review-1"></div>
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              "The design team exceeded my expectations with their creative approach to our project. Highly recommended for anyone looking for innovative solutions."
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="text-bg review-2"></div>
          <div className="content">
            <div className="author">DEVTEAM</div>
            <div className="title">NATURE BEAUTY</div>
            <div className="topic">NATURE</div>
            <div className="des">
              "Explore the wonders of nature through stunning landscapes. Our team captured breathtaking scenery that will inspire your next adventure."
            </div>
            <div className="buttons">
              <button>EXPLORE</button>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="text-bg review-3"></div>
          <div className="content">
            <div className="author">TECHWORLD</div>
            <div className="title">FUTURE TECH</div>
            <div className="topic">TECHNOLOGY</div>
            <div className="des">
              "The future of innovation starts with groundbreaking technology. Our latest developments have revolutionized how businesses approach digital transformation."
            </div>
            <div className="buttons">
              <button>DISCOVER</button>
              <button>INNOVATE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="text-bg review-4"></div>
          <div className="content">
            <div className="author">TRAVELERS</div>
            <div className="title">ADVENTURE AWAITS</div>
            <div className="topic">TRAVEL</div>
            <div className="des">
              "Join us on an unforgettable journey to breathtaking places. Our travel packages offer exclusive experiences that create memories lasting a lifetime."
            </div>
            <div className="buttons">
              <button>BOOK NOW</button>
              <button>WATCH MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="thumbnail">
        <div className="item">
          <div className="text-bg-thumb thumb-1"></div>
          <div className="content">
            <div className="title">DESIGN SLIDER</div>
            <div className="description">Animal World</div>
          </div>
        </div>

        <div className="item">
          <div className="text-bg-thumb thumb-2"></div>
          <div className="content">
            <div className="title">NATURE BEAUTY</div>
            <div className="description">Scenic Views</div>
          </div>
        </div>

        <div className="item">
          <div className="text-bg-thumb thumb-3"></div>
          <div className="content">
            <div className="title">FUTURE TECH</div>
            <div className="description">Cutting-Edge Innovation</div>
          </div>
        </div>

        <div className="item">
          <div className="text-bg-thumb thumb-4"></div>
          <div className="content">
            <div className="title">ADVENTURE AWAITS</div>
            <div className="description">Travel the World</div>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default Carousel;