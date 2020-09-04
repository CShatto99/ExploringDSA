import React from 'react'
import '../../../css/chpt_4/Project4_2.css'
import project4_2_img from '../../../img/Chpt_4-Img/Project4_2Img.png'

const Project42 = () => {
  return (
    <div className="project-4_2-grid">
      <div className="title-4_2">
        <h2>Project 4.2</h2>
      </div>

      <div className="description-4_2">
        <p>
          In project 4.2 the implementation of an array-based deque will
          be covered. Four methods that are essential to the functionality
          of the deque will be explained. These method
          include: <b>insertRear</b>, <b>insertFront</b>, <b>removeRear</b> and <b>removeFront</b>.
          You can view the complete project here: <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%204/TestClass4_2.java"
            target="blank"><i>Project 4.2</i>
          </a>.
        </p>
      </div>

      <div className="image-4_2">
        <img style={{width: '400px'}} src={project4_2_img}  alt="Project 4.2 Visual"/>
      </div>

      <div className="project-4_2-requirements">
        <p><b>Project requirements</b></p>
        <br/>
        <p>
          Create a Deque class based on the discussion of deques (double-ended
          queues) in this chapter. It should include insertLeft(), insertRight(),
          removeLeft(), removeRight(), isEmpty(), and isFull() methods. It will
          need to support wraparound at the end of the array, as queues do.
        </p>
      </div>

      <pre className="project-4_2-insert_rear">
        <code>
{`public void insertRear(long value) {

  if(rear == maxSize-1)
    rear = -1;

  arr[++rear] = value;

}`}
        </code>
      </pre>

      <pre className="project-4_2-insert_front">
        <code>
{`public void insertFront(long value) {

  if(front == 0)
    front = maxSize;

  arr[--front] = value;

}`}
        </code>
      </pre>

      <pre className="project-4_2-remove_rear">
        <code>
{`public long removeFront() {

  long currentFront = arr[front++];

  if(front == maxSize)
    front = 0;

  return currentFront;

}`}
        </code>
      </pre>

      <pre className="project-4_2-remove_front">
        <code>
{`public long removeRear() {

  long currentRear = arr[rear--];

  if(rear == -1)
    rear = maxSize;

  return currentRear;

}`}
        </code>
      </pre>

      <div className="project-4_2-insert_rear-exp">
        <b>Function:</b> insert an item at the end of a queue.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Check if the rear index needs to be wrapped around.</li>
          <li>Increment the rear index and insert the new value.</li>
        </ul>
      </div>

      <div className="project-4_2-insert_front-exp">
        <b>Function:</b> insert an item at the front of a queue.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Check if the front index needs to be wrapped around.</li>
          <li>Decrement the front index and insert the new value.</li>
        </ul>
      </div>

      <div className="project-4_2-remove_rear-exp">
        <b>Function:</b> remove an item from the end of a queue.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Hold a copy of the current front value and increment the front index.</li>
          <li>Check if the front index needs to be wrapped around.</li>
          <li>Return the front value that was removed.</li>
        </ul>
      </div>

      <div className="project-4_2-remove_front-exp">
        <b>Function:</b> remove an item from the front of a queue.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Hold a copy of the current rear value and decrement the rear index.</li>
          <li>Check if the rear index needs to be wrapped around.</li>
          <li>Return the rear value that was removed.</li>
        </ul>
      </div>

      <div className="hr-4_2">
        <hr/>
      </div>

    </div>
  )
}

export default Project42
