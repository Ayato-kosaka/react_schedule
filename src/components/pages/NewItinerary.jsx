import React from 'react';
import FormPlan from './FormPlan'


// Planのstateはここで管理すべきかな
const NewItinerary = () => {

  // 保存ボタンにより発火(fireBaseに登録)
  const createItinerary = () => {

  }

  // 場所追加ボタンにより発火（動的にPlanのフォームを呼び出す）
  // まだ決定ボタンが押されていなかった時にどうするか要相談
  const addPlan = () => {
    
  }

  return (
    <>
      <h2>しおり新規作成画面だよ</h2>
      <FormPlan />
      <button onClick={addPlan}>場所追加</button>
      <button onClick={createItinerary}>しおりを保存</button>
    </>
  );

  
}

export default NewItinerary;