import React from 'react'
import '../../../css/chpt_4/Project4_4.css'
import project4_4_img from '../../../img/Chpt_4-Img/Project4_4Img.png'

const Project44 = () => {
  return (
    <div className="project-4_4-grid">
      <div className="title-4_4">
        <h2>Project 4.4</h2>
      </div>

      <div className="description-4_4">
        <p>
           In project 4.4 we are going to be looking at a priority queue.
           The code on this page will cover insertion, deletion and displaying
           contents of a priority queue. You can view the complete project here: <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%204/TestClass4_4.java"
            target="blank"> <i>Project 4.4</i>
          </a>.
        </p>
      </div>

      <div className="image-4_4">
        <img style={{width: '300px'}} src={project4_4_img}  alt="Project 4.4 Visual"/>
      </div>

      <div className="project-4_4-requirements">
        <p><b>Project requirements</b></p>
        <br/>
        <p>
          The priority queue shown in Listing 4.6 features fast removal of the
          high-priority item but slow insertion of new items. Write a program
          with a revised PriorityQ class that has fast O(1) insertion time but
          slower removal of the highpriority item. Include a method that displays
          the contents of the priority queue, as suggested in Programming Project 4.1.
        </p>
      </div>

      <pre className="project-4_4-insert">
        <code className="language-js">
{`public void insert(long value) {

  if(nItems < maxSize)
    PQArray[nItems++] = value;

}`}
        </code>
      </pre>

      <pre className="project-4_4-remove">
        <code className="language-js">
{`public long remove() {

  for(int i = 0; i < maxSize-1; i++) {

    for(int j = i+1; j < maxSize; j++) {

      if(PQArray[i] > PQArray[j]) {

        long temp = PQArray[i];
        PQArray[i] = PQArray[j];
        PQArray[j] = temp;

      }

    }

  }

  return PQArray[--nItems];

}`}
        </code>
      </pre>



      <pre className="project-4_4-display">
        <code className="language-js">
{`public void display() {

  for(int i = 0; i < maxSize; i++) {

    long temp = remove();
    System.out.print(temp + " ");

  }

}`}
        </code>
      </pre>

      <div className="project-4_4-insert-exp">
        <b>Function:</b> insert an item into the priority queue.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Check if the queue array is not full.</li>
          <li>Insert the new value into the queue.</li>
        </ul>
      </div>

      <div className="project-4_4-remove-exp">
        <b>Function:</b> remove an item from the priority queue.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Declare a For Loop that iterates to maxSize-1.</li>
          <li>Declare a nested For Loop that iterates over the entire array
              and is one index ahead of the first loop.</li>
          <li>Check if the previous element is greater than the next element.</li>
          <li>If the previous step is true, perform a basic <a
              href="https://en.wikipedia.org/wiki/Swap_(computer_programming)"
              target="blank">swap</a>.
          </li>
          <li>Decrement the number of items and return the last element in the
              array.
          </li>
        </ul>
      </div>

      <div className="project-4_4-display-exp">
        <b>Function:</b> display the contents of the priority queue.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Declare a For Loop that iterates over the entire queue.</li>
          <li>Save a temporary copy of the last item in the queue.</li>
          <li>Display the copy of the last item.</li>
        </ul>
      </div>

      <div className="hr-4_4">
        <hr/>
      </div>

    </div>
  )
}

export default Project44
