import React, { Component } from 'react';
import styles from './App.scss';
import { getData } from '../service';
import Filter from '../Filter';
import CardWrapper  from '../CardWrapper';
import Head from '../Head';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: {},
      selectedFilter: {
        species: [],
        gender: [],
        origin: [],
      },
    };
    this.dataObj = {};
  }

  componentDidMount() {
    getData({
      url: 'https://rickandmortyapi.com/api/character/',
    }).then(dataObj => {
      this.setState({
        dataObj,
      })
      this.dataObj = dataObj;
    });
  }

  filterData = selectedFilter => {
    const { dataObj } = this.state; 
    const newData = Object.assign({}, dataObj);
    // TODO: this needs to be optimised
    newData.results = dataObj.results.filter(item =>  {
      if(selectedFilter.species.length) {
        return selectedFilter.species.includes(item.species.toLowerCase());
      }
      if(selectedFilter.gender.length){
        return selectedFilter.gender.includes(item.gender.toLowerCase());
      }
      if(selectedFilter.origin.length){
        return selectedFilter.origin.includes(item.origin.name.toLowerCase());
      }

      return true
    });
    this.setState({
      selectedFilter,
      dataObj: newData,
    });
  }

  onSearchClick = val => {
    this.setState({
      dataObj: this.dataObj,
    }, () => {
      const { dataObj } = this.state; 
      const newData = Object.assign({}, dataObj);
      newData.results = newData.results.filter(item => 
        item.name.toLowerCase().includes(val.toLowerCase())
      );
      this.setState({
        dataObj: newData,
      });
    });
  }

  onSelectCallback = val => {
    this.setState({
      dataObj: this.dataObj,
    }, () => {
      const { dataObj } = this.state; 
      const newData = Object.assign({}, dataObj);
      newData.results.sort((a, b) => val === 'asc' ? a.id - b.id: b.id - a.id);
      this.setState({
        dataObj: newData,
      });
    });
  }
  
  render() {
    const { selectedFilter, dataObj} = this.state;
    return (
      <div className={styles.app}>
        <div className={styles.filter}>
          <Filter
            selectedFilter={selectedFilter}
            filterSelectCalback={this.filterData}
          />
        </div>
        <div className={styles.characterList}>
        <h1>Ricky and Morty App</h1>
          <Head
            selectedFilter={selectedFilter}
            onSearchClick={this.onSearchClick}
            onSelectCallback={this.onSelectCallback}
          />
          <CardWrapper
            data={dataObj.results || []}
          />
        </div>
      </div>
    );
  }
}

