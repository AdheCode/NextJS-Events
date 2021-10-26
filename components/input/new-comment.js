import { useRef, useState } from 'react';
import classes from './new-comment.module.css';

function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredComment ||
      enteredComment.trim() === '' ||
      !enteredName ||
      enteredName.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' ref={emailInputRef} id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your name</label>
          <input type='text' ref={nameInputRef} id='name' />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' ref={commentInputRef} rows='5'></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button type='submit'>Submit</button>
    </form>
  );
}

export default NewComment;
