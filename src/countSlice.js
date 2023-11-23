import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    // 초기값 넣어줌
    count: 0,
  },
  reducers: {
    //slice가 해줄 수 있는 액션들.
    increment: (state) => {
      //여긴 action 사용할 일 없어서 안 써준거
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  countSlice.actions; // 사용하기 쉽게 구조분해로 꺼내줌

export default countSlice;
