import styled from "styled-components";
import { useRef } from "react";

//https://github.com/wesbos/css-grid/blob/master/20%20-%20CSS%20Grid%20Image%20Gallery/image-gallery-FINISHED.html
export const Gallary = () => {
  const overlay = useRef(null);
  const gallery = useRef(null);
  const image = useRef(null);
  const close = useRef(null);

  const handleClick = (e: any) => {
    const src = e.currentTarget.querySelector("img").src;
    image.src = src;
    overlay.classList.add("open");
  };

  return (
    <div>
      <Overlay ref={overlay}>
        <OverlayInner className="overlay-inner">
          <CloseButton ref={gallery}>× Close</CloseButton>
          <Image ref={image} />
        </OverlayInner>
      </Overlay>
      <Gallery ref={gallery}></Gallery>
    </div>
  );
};

const Overlay = styled.div``;

const OverlayInner = styled.div``;

const CloseButton = styled.button`
  background: none;
  color: black;
  border: 0;
`;

const Image = styled.img``;

const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-auto-rows: 100px;
  grid-auto-flow: dense;
`;

type propsTest = {
  h: number;
  v: number;
};

const Test = styled.div<propsTest>``;

const generateHTML = ([h, v]: number[]) => {
  const randomNumber = (limit: number) => {
    return Math.floor(Math.random() * limit) + 1;
  };
  return (
    <Test h={h} v={v}>
      <img src={`images/${randomNumber(12)}.jpg`} />
      <div>
        <button>View →</button>
      </div>
    </Test>
  );
};

const close = () => {
  overlay.classList.remove("open");
};

const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4)
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1]
]);

const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;

const items = document.querySelectorAll(".item");

items.forEach(item => item.addEventListener("click", handleClick));

overlayClose.addEventListener("click", close);
