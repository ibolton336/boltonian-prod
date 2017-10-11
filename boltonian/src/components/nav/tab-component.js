import React, { Component } from 'react';
import { Link, browserHistory} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import HomeComponent from '../template/home';
import AboutComponent from '../template/about';
import ServicesComponent from '../template/services';
import ConnectComponent from '../template/connect';
import BlogComponent from '../template/blog';


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class TabComponent extends Component {
	constructor() {
		super();
		}

  render() {
    const styles = {
      tabs: {
        color: '#2D3142',
        fontFamily: 'isabelregular',
        // backgroundColor: 'rgba(252, 250, 249, .85)'
      },
      tab: {
        color: '#2D3142',
      },
      contentContainerStyle: {
      },
      tabTemplate:{
        //height: '50px'
      },
      tabButton:{
        // backgroundColor: 'rgba(252, 250, 249, .00)',
        paddingTop: '30px',
        fontFamily: 'isabelregular'
      }
    };
    return (
      <Tabs style={styles.tabs} 
        contentContainerStyle={styles.tabsContainer} 
        tabTemplateStyle={styles.tabTemplate}
        inkBarStyle={{background: '#00796B'}} 
        onChange={this.hanldleChange} 
        initialSelectedIndex={this.state.initalTab}>
				<Tab 
          value={0}
          label="home"
          style={styles.tab}
          buttonStyle={styles.tabButton}
        >
          <HomeComponent/>
				</Tab>
				<Tab 
          label="about" 
          value={1}
          style={styles.tab}
          buttonStyle={styles.tabButton}
        >
          <AboutComponent/>
				</Tab>
				<Tab 
          label="services" 
          value={2}
          style={styles.tab}
          buttonStyle={styles.tabButton}
          >
          <ServicesComponent/>
				</Tab>
				<Tab 
          label="blog" 
          value={3}
          style={styles.tab}
          buttonStyle={styles.tabButton}
        >
          <BlogComponent/>
				</Tab>
				<Tab 
          label="connect" 
          value={4}
          style={styles.tab}
          buttonStyle={styles.tabButton}
        >
          <ConnectComponent/>
				</Tab>
			</Tabs>
    );
  }
}

export default TabComponent; 
