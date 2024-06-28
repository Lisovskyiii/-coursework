import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import error from '../../assets/error.gif'
import { store } from '../../store/store'
import { fetchReports, selectAll } from '../../store/slices/CardListSlices'
import Spinner from '../../ui/Spinner'
import { Card } from '../../components/Card'
import './style.scss'

export const CardList = ({ className }) => {
  const reports = selectAll(store.getState())
  const reportsLoadingStatus = useSelector(
    state => state.reports.reportsLoadingStatus
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReports())
  }, [])

  if (reportsLoadingStatus === 'loading') {
    return <Spinner></Spinner>
  } else if (reportsLoadingStatus === 'error') {
    return (
      <div
        className={
          className ? `card-list__error ${className}` : 'card-list__error'
        }
      >
        <img src={error} alt='error' />
        <h5>Что-то пошло не так :(</h5>
      </div>
    )
  }

  const renderReportsList = arr => {
    if (arr.length === 0) {
      return (
        <div
          className={
            className ? `card-list__empty ${className}` : 'card-list__empty'
          }
        >
          <img src={error} alt='empty' />
          <h5>Упс! Пусто!</h5>
        </div>
      )
    }
    return arr.map(props => {
      return (
        <Link
          key={props.id}
          to={`/reports/${props.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Card {...props}></Card>
        </Link>
      )
    })
  }

  const elements = renderReportsList(reports)

  return Array.isArray(elements) ? (
    <ul
      className={
        className ? `card-list__wrapper ${className}` : 'card-list__wrapper'
      }
    >
      {elements}
    </ul>
  ) : (
    elements
  )
}
