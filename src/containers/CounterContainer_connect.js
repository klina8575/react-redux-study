import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//리덕스 스토어 안의 state를 컴포넌트(CounterContainer)의 props로 넘겨주기 위한 함수
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// //액션 생성 함수를 컴포넌트(CounterContainer)의 props로 넘겨주기 위한 함수
// const mapDispatchToProps = (dispatch) => ({
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     },
// });

//connect: 컴포넌트를 리덕스와 연결
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
