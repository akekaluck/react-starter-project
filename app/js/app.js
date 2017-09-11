import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {cyan500} from 'material-ui/styles/colors';

require('../less/main.less')

injectTapEventPlugin();

const Card = () => (
  <Paper className="room-card" zDepth={1}>
    <div>
      <div className="header">
        <div className="room-name">
          Header
        </div>
        <div className="header-button">
          <FlatButton className="card-button" label="EDIT" hoverColor="#DCEDC8" />
          <FlatButton className="card-button delete" label="X" hoverColor="#EF9A9A" />
        </div>
      </div>
      <div className="content">
        Content
      </div>
      <div className="footer">
        <FlatButton className="card-button in" label="IN"
          hoverColor="#64B5F6"/>
        <FlatButton className="card-button out" label="OUT"
          hoverColor="#FFCDD2"/>
      </div>
    </div>
  </Paper>
)
const App = () => (
  <MuiThemeProvider>
    <div>
      <Card />
      <Card />
    </div>
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
