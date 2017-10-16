import React, { Component } from 'react';
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
        onChange={this.handleCallToRouter}>
				<Tab 
          value="/"
          label="home"
          style={styles.tab}
          buttonStyle={styles.tabButton}
        >
          <HomeComponent/>
				</Tab>
				<Tab 
          label="about" 
          value="/about"
          style={styles.tab}
          buttonStyle={styles.tabButton}
        >
          <AboutComponent/>
				</Tab>
				<Tab 
          label="services" 
          value="/services"
          style={styles.tab}
          buttonStyle={styles.tabButton}
          >
          <ServicesComponent/>
				</Tab>
				<Tab 
          label="blog" 
          value="/blog"
          style={styles.tab}
          buttonStyle={styles.tabButton}
        >
          <BlogComponent/>
				</Tab>
				<Tab 
          label="connect" 
          value="/connect"
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
