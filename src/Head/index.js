import React from 'react';
import styles from './head.scss';
export default class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      selectVal: '',
    }
  }

  onChange = e => {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleChange = e => {
    this.setState({
      selectVal: e.target.value,
    });
    this.props.onSelectCallback(e.target.value);
  } 

  render() {
    const { selectedFilter, onSearchClick } = this.props;
    const { inputVal } = this.state;
    const filterKeys = Object.keys(selectedFilter);
    return(
      <div className={styles.headWrapper}>
        {filterKeys.map(val => {
          selectedFilter[val].map(item => {
            return(
              <div
                key={item}
              >
                {item}
              </div>
          )});
        })}
  
        <div className={styles.search}>
          <label htmlFor ="searchBox">
           <p>Search by Name</p>
          </label>
          <input
            type="text"
            value={inputVal}
            id="searchBox"
            onChange={this.onChange}
          />
          <label htmlFor="searchBtn">
            <input
              type="button"
              value="Search"
              id="searchBtn"
              onClick={e => {
                e.preventDefault();
                onSearchClick(inputVal);
              }}
            />
          </label>
        </div>
  
        <div className={styles.sort}>
          <select
            value={this.state.selectVal}
            onChange={this.handleChange}
          >
            <option value="asc">
                Ascending
            </option>
            <option value="des">
                Descending
            </option>
          </select>
        </div>
  
      </div>
    );
  }
}

