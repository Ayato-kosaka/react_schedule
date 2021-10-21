import React from 'react';
// import { db } from '../../fireB/firestore'
import { Link } from 'react-router-dom'

const ItineraryList = () => {

  // const getItinaries = () => {
  //   const colRef = db.collection()
  // }

  return (
    <>
      <h2>しおり一覧画面だよ</h2>
      <table>
        <thead>
          <tr>
            <th>作成日</th>
            <th>タイトル</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2021/11/11</td>
            <td>しおり１</td>
          </tr>
          <tr>
            <td>2021/12/22</td>
            <td>しおり２</td>
          </tr>
        </tbody>
      </table>

      <Link to="/itineraries/new">しおりを作成</Link>
    </>
  );
}

export default ItineraryList;