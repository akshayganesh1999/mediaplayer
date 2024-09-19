import React, { useState, useEffect } from 'react'
import { getHistoryApi, deleteHistoryApi } from '../services/allApi'

function History() {

  const [historyList, setHistoryList] = useState([])
  const [resp, setResp] = useState({})

  useEffect(() => {
    getData()
  }, [resp])

  const getData = async () => {
    const result = await getHistoryApi()
    if (result.status == 200) {
      setHistoryList(result.data)
      console.log(result.data)
    }
  }

  const deleteHis = async (id) => {
    const result = await deleteHistoryApi(id)
    if (result.status == 200) {
      setResp(result)
    }
  }
  return (
    <>
      <h2>Watch History</h2>
      {
        historyList?.length > 0 ?
          <table className="table table-secondary table-bordered table-striped">
            <thead>
              <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Video URL</td>
                <td>Date and Time</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {
                historyList.map(item => (
                  <tr>
                    <td>{item.vid}</td>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                    <td>{item.date}</td>
                    <td>
                      <button className="btn" onClick={() => { deleteHis(item.id) }}>
                        <i className="fa-solid fa-trash" style={{ color: "#ea1026", }} />
                      </button>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
          :
          <h3>No History!!</h3>
      }
    </>
  )
}

export default History
