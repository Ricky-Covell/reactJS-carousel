import { render } from "@testing-library/react";
import Card from "./Card.js";

// smoke test
it('renders without crashing', () => {
     render(
        <Card
            caption='testCaption'
            src='test1.com'
            currNum={1}
            totalNum={1}
        />
     )
})

// snapshot test
it('matches snapshot', () => {
    const {asFragment}= render(
       <Card
           caption='testCaption'
           src='test1.com'
           currNum={1}
           totalNum={1}
       />
    )
    expect(asFragment()).toMatchSnapshot();
})