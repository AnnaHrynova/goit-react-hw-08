import {RotatingLines} from 'react-loader-spinner'
import css from './Loader.module.css'

export default function Loader() {
    return (
      <div className={css.loader}>
        <RotatingLines
  visible={true}
  height="60"
  width="60"
  strokeWidth="5"
  strokeColor='#8e32e3'
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
    );
  }