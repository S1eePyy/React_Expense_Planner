import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

//safe from code duplication
//wrapper component
/*sometimes u wanna have a component where u dont wanna configure everything thro props.
But instead pass contents BETWEEN the opening and closing tags of that component*/
/*this card component will not be configured thro some attributes*/
//if dont understand -> https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595454#questions
