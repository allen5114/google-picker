import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import GooglePicker from '../';

const CLIENT_ID = 'Your Client ID';
const DEVELOPER_KEY = 'Your Developer Key';
const SCOPE = ['https://www.googleapis.com/auth/drive.readonly'];

function App() {
  return (
    <div className="container">
      <GooglePicker clientId={CLIENT_ID}
                    developerKey={DEVELOPER_KEY}
                    scope={SCOPE}
                    onChange={data => console.log('on change:', data)}
                    onAuthFailed={data => console.log('on auth failed:', data)}
                    multiselect={true}
                    navHidden={true}
                    authImmediate={false}
                    mimeTypes={['image/png', 'image/jpeg', 'image/jpg', 'application/vnd.google-apps.spreadsheet', 'application/vnd.google-apps.document', 'application/vnd.google-apps.folder', 'application/vnd.google-apps.presentation']}
                    viewId={'DOCS'}>
        <span>Click me to open Google Picker</span>
        <div className="google"></div>
      </GooglePicker>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));