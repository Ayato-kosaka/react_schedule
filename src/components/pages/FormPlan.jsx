import React from 'react';

const FormPlan = () => {
  // 決定ボタンにより発火(Firebase保存ではなく、componentのStateに登録)
  const commitPlan = () => {

  }

  return (
    <div>
      <div>
        <h3>開始時間時間</h3>
        <input type="text" />
        <h3>経過時間</h3>
        <input type="text" />
        <h3>場所</h3>
        <input type="text" />
        <button onClick={commitPlan}>決定</button>
      </div>
    </div>
  );
}

export default FormPlan;
