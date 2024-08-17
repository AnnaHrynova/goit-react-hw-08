import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const searchName = useSelector(selectNameFilter);
    const searchInputId = useId();

    return (
        <div className={css.inputWrap}>
            <p className={css.label} htmlFor={searchInputId}>Find contacts by name</p>
            <input
                className={css.input}
                id={searchInputId}
                type="text"
                value={searchName}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
        </div>
    );
}
