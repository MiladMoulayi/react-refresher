import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

  function toggleFavorite() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        key: props.id,
        id: props.id,
        image: props.image,
        title: props.title,
        description: props.description,
        address: props.address,
      })
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </li>
    </Card>
  )
}

export default MeetupItem
