import { TableBody, TableCell, TableRow, TablePagination } from "@mui/material";
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import MainContext from '../../Contexts/mainContext'

import style from './CardList.module.css'
import FilterForm from "../FilterForm/FilterForm";

function CardList(props) {

  const [ state, dispatch ] = useContext(MainContext)
  const [page, setPage] = useState(0)
  
  const count = [...state.selected].length
  // const totalCount = rows.lenght + 1
  return (
    <div className={style.wrapper}>
      <TableBody>
        <TableRow >
          <TableCell sx={{ fontWeight: 900, color: '#00838f' }}>Title</TableCell>
          <TableCell sx={{ fontWeight: 900, color: '#00838f' }}>Vendor</TableCell>
          <TableCell sx={{ fontWeight: 900, color: '#00838f' }}>Pack</TableCell>
          <TableCell sx={{ fontWeight: 900, color: '#00838f' }}>Price</TableCell>
        </TableRow>
        {state.selected.map((row) => {
          return (
            <TableRow hover={true} key={row.id}>
              <Link to={`/catalog/${row.id}`} className={style.link}>
                <TableCell className={style.title}>{row.title}</TableCell>
              </Link>
              <TableCell>{row.vendor}</TableCell>
              <TableCell>{row.pack}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          )
        })}
        <TablePagination
          count={count}
          page={page}
          onChangePage={() => setPage()}
          rowsPerPage={5}
        />
      </TableBody>
      <FilterForm dispatch={dispatch}/>
    </div>
  );
}

export default CardList;
