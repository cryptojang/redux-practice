import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const asyncUpFetch = createAsyncThunk(
  "countSlice/asyncUpFetch",
  async () => {
    const response = await axios.get("http://localhost:3010/count");

    return response.data.count;
  }
);

const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    // 초기값 넣어줌
    count: 0,
    isLoading: false,
  },
  reducers: {
    // 동기적 요청 적는 곳. 실행 보장될 때
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

  extraReducers: (builder) => {
    // 비동기 요청. 백엔드 죽어있다거나, 오래 걸리는 등 실행 확실하지 않을때
    builder.addCase(asyncUpFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.count = action.payload;
      state.isLoading = false;
    });
    builder.addCase(asyncUpFetch.rejected, (state) => {
      state.isLoading = false;
    });
  }, // 하나에 총 세개를 만들어야 함? 상태(pending fulfilled rejected 등 비동기 요청 상태에 따라 )
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  countSlice.actions; // 사용하기 쉽게 구조분해로 꺼내줌

export default countSlice;
