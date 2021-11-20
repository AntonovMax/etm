function mainReduser(state, action) {
  switch (action.type) {
    case 'select':
      return {...state, selected: state.rows.filter(el => el.price < action.payload)}
    default:
      return state
  }
}

export default mainReduser
