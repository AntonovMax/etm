import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useContext } from 'react';
import MainContext from '../../Contexts/mainContext';

import style from './Article.module.css'

function Article() {

  const { id } = useParams()
  const [state, dispatch] = useContext(MainContext)
  const [card] = state.selected.filter(el => el.id == id)


  return (
    <div className={style.wrapper}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`/img${card.img}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${card.title} от компании ${card.vendor}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Цена: ${card.price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">Добавить</Button>
          <Button size="small" variant="outlined">Удалить</Button>
        </CardActions>
      </Card>
    </div>

  );
}

export default Article;
