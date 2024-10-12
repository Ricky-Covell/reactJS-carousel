import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it('renders without crashing', () => {
     render(
        <Carousel
            photos={TEST_IMAGES}
            title='test carousel'
        />
     )
})

// snapshot test
it('matches snapshot', () => {
  const {asFragment}= render(
     <Carousel
          photos={TEST_IMAGES}
          title='test carousel'
      />
  )
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click on the right and left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move backwards in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the third
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("does not show left and right arrows at the beginning and end of carousel, respectively", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  
  // expect only right arrow at beginning of carousel
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).not.toBeInTheDocument();
  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).toBeInTheDocument();
  
  
  // move to the end of the carousel
  for (let i = 0; i < TEST_IMAGES.length - 1; i++) {
      const rightArrow = container.querySelector(".bi-arrow-right-circle");
      fireEvent.click(rightArrow)
  }

  // expect only left arrow at end of carousel
  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).not.toBeInTheDocument();
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).toBeInTheDocument();

});

