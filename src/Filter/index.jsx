import React, { Component } from 'react';
import Checkbox from '../Checkbox';
import styles from './Filter.scss';

export default class Filter extends Component {

  onCheck = (id, group, isChecked) => {
    const { selectedFilter, filterSelectCalback } = this.props;
    const newFilter = Object.assign({}, selectedFilter);
    if(isChecked) {
      newFilter[group].push(id);
    } else {
      const index = newFilter[group].indexOf(id);
      if (index > -1) {
        newFilter[group].splice(index, 1);
      }
    }
    filterSelectCalback(newFilter)
  }

  render() {
    const { selectedFilter } = this.props;
    return(
      <div className = {styles.filterDesign}>
        <h2>Filters</h2>
        <div className = {styles.borderBox}>
          <h3>Species</h3>
          <Checkbox
            value="Human"
            group="species"
            id="human"
            isChecked={selectedFilter.species.includes('human')}
            onClick={this.onCheck}
          />
          <Checkbox
            value="Mythology"
            id="mythology"
            group="species"
            isChecked={selectedFilter.species.includes('mythology')}
            onClick={this.onCheck}
          />
          <Checkbox
            value="Alien"
            id="alien"
            group="species"
            isChecked={selectedFilter.species.includes('alien')}
            onClick={this.onCheck}
          />
        </div>
        <div className = {styles.borderBox}>
          <h3>Gender</h3>
          <Checkbox
            value="Male"
            id="male"
            group="gender"
            isChecked={selectedFilter.gender.includes('male')}
            onClick={this.onCheck}
          />
          <Checkbox
            value="Female"
            id="female"
            group="gender"
            isChecked={selectedFilter.gender.includes('female')}
            onClick={this.onCheck}
          />
        </div>
        <div className = {styles.borderBox}>
          <h3>Origin</h3>
          <Checkbox
            value="Unknown"
            id="unknown"
            group="origin"
            isChecked={selectedFilter.origin.includes('unknown')}
            onClick={this.onCheck}
          />
          <Checkbox
            value="Post-Apocalyptic Earth"
            id="post-apocalyptic-earth"
            group="origin"
            isChecked={selectedFilter.origin.includes('post-apocalyptic earth')}
            onClick={this.onCheck}
          />
          <Checkbox
            value="Nuptia 4"
            id="nuptia4"
            group="origin"
            isChecked={selectedFilter.origin.includes('nuptia4')}
            onClick={this.onCheck}
          />
          <Checkbox
            value="Testicle Monster Dimension"
            id="testicle-monster-dimension"
            group="origin"
            isChecked={selectedFilter.origin.includes('testicle-monster-dimension')}
            onClick={this.onCheck}
          />
        </div>
      </div>
    );
  }
}
