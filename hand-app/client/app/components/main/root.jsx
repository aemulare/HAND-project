import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Header from './header';
import Menu from './menu';
import Content from './content';
import '../../assets/styles/app.scss';

const mql = window.matchMedia('(min-width: 800px)');

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mql,
      sidebarOpen: true,
      sidebarDocked: true
    };

    this.onSidebarOpen = this.onSidebarOpen.bind(this);
    this.onSidebarToggle = this.onSidebarToggle.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, sidebarDocked: mql.matches, sidebarOpen: mql.matches });
  }


  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  onSidebarToggle() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen, sidebarDocked: !this.state.sidebarDocked });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches, sidebarOpen: this.state.mql.matches });
  }

  render() {
    const { sidebarOpen, sidebarDocked } = this.state;
    const sidebarContent = <Menu />;

    return (
      <div>
        <Sidebar
          open={sidebarOpen}
          docked={sidebarDocked}
          sidebar={sidebarContent}
          /* onSetOpen={this.onSidebarOpen} */
        >
          <header>
            <Header onSidebarToggle={this.onSidebarToggle} />
          </header>
          <div id="wrapper">
            <Content />
          </div>
        </Sidebar>
      </div>
    );
  }
}

export default Root;
