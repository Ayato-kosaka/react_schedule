import React from 'react';
import FormPlan from './FormPlan'


// Planのstateはここで管理すべきかな
const NewItinerary = () => {

  // 保存ボタンにより発火(fireBaseに登録)
  const createItinerary = () => {

  }

  return (
    <>
      <h2>しおり新規作成画面だよ</h2>
      <FormPlan />
      <button onClick={createItinerary}>しおりを保存</button>
    </>
  );

  
}

export default NewItinerary;