import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <Button onClick={() => onLeaveFeedback(item)} key={item}>
          {item}
        </Button>
      ))}
    </div>
  );

  // --- Працюючий варіант!

  // export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   const onBtnClick = evt => {
  //     onLeaveFeedback(evt.target.dataset.name);
  //   };

  // return (
  //   <div>
  //     {options.map(item => (
  //       <Button data-name={item} onClick={onBtnClick} key={item}>
  //         {item}
  //       </Button>
  //     ))}
  //   </div>
  // );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
