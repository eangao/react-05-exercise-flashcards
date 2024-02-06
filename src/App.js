import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  //no  selected card initially
  const [selectedId, setSelectedId] = useState(null);
  //   And now let's remember the three steps of using state,
  // which I like to always come back to
  // because I think this makes it a bit more helpful
  // to understand how we should approach this.

  // So the first step is to define the state variable,
  // which we already did.

  // Second is to then use that state variable,

  // and third is to update it.

  //////////////
  //   Okay? And now what we are going to do is to
  // create a function here.
  // Just to make our code a bit easier to understand.
  // So let's call it handle click.
  // So for now just the name of the function.
  // So here we need to now then pass in that function
  // right? However, that is not really enough
  // because well, here we will now call set selected ID,
  // but as the name says
  // we now actually need the ID of the question that
  // should become the selected question, right?
  // And so what this means is that this function
  // needs to receive that ID so that we can then set it here.
  function handleClick(id) {
    //     because watch what happens when I click here again.
    // So nothing happens, of course, because, well
    // because here we are simply passing in that id
    // and then we are setting that ID as the selected ID.
    // So just as expected.
    // But as we see here, as we click again
    // it actually closes the card again.
    // So this functionality we already have of
    // changing between cards
    // but when we click on it that we don't have yet.
    // So let's do that.
    // And it's not too hard.
    // Basically what we want to do here is to set this ID
    // based on a condition.
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          // So now we need to call this handle click function.
          // With that I'd.
          // So simply enough question.id.
          // But don't make the mistake of thinking
          // that this is finished.
          // And actually React already gave us here an error.
          // So remember that here we need to pass
          // in an actual function and not a function call
          // like we have here.
          // So this is calling handle, click immediately.
          // That's not what we want.
          // We want to pass in a function so that React can
          // then call the function as soon as the event happens.
          // And test should already be enough, at least for now.
          // So that worked great!
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
          //           So again, if the question ID is different
          // from the already selected ID, then set the ID.
          // And so that's exactly this behavior, right?
          // But if not, so basically if the question ID
          // is already equal to the selected ID
          // then set it back to null.
          // And so with null, then none of them will be active.
          // And yeah, that works and I think it makes sense as well.
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

// So this usage of state here was quite a
// bit different from what we had before.
// And so that's why I decided again
// to include this exercise here by the end of this section.
// So please make sure to study exactly what is happening here.
// And then after that, I think you are ready
// for the final coding challenge of this section.
