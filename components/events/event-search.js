import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";

export default function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event){
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="id" ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
          </select>
        </div>
        <div className={classes.control}>
            <label htmlFor='month'>Month</label>
          <select id="month" ref={monthInputRef}>
            <option value='1'>Januari</option>
            <option value='2'>Februari</option>
            <option value='3'>Maret</option>
            <option value='4'>April</option>
            <option value='5'>Mei</option>
            <option value='6'>Juni</option>
            <option value='7'>Juli</option>
            <option value='8'>Agustus</option>
            <option value='9'>September</option>
            <option value='10'>Oktober</option>
            <option value='11'>November</option>
            <option value='12'>Desember</option>
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
}
