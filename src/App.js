import React, { Component } from 'react'

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="row" style={{ margin: 0 }}>
            <div className="col-md-8">
              <h2>Mayur Kamble</h2>
              <h5>Full Stack Developer</h5>
            </div>
            <div className="col-md-4">
              <div>
                <table style={{ fontSize: '18px' }}>
                  <tbody>
                    <tr>
                      <td><img style={{ width: '20px', height: '20px', margin: '8px' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1631013116/image/gmjk9ke5lmtpyllaeah0.png" /></td>
                      <td><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=cse.mkamble@gmail.com" target="_blank" >cse.mkamble@gmail.com</a></td>
                    </tr>
                    <tr>
                      <td><img style={{ width: '20px', height: '20px', margin: '8px' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1631013113/image/cat6qvix6jbvzcf58ueb.png" /></td>
                      <td>+91 95119 45163</td>
                    </tr>
                    <tr>
                      <td><img style={{ width: '20px', height: '20px', margin: '8px' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1631013116/image/pbgp8inqj3wnl9ilhxq3.png" /></td>
                      <td>Maharashtra India</td>
                    </tr>
                    <tr>
                      <td><img style={{ width: '20px', height: '20px', margin: '8px' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1631013117/image/anehdvniwprmfndqcmus.png" /></td>
                      <td><a href="https://github.com/cse-mkamble" target="_blank">github.com/cse-mkamble</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div div className="row" style={{ margin: 0 }}>

            <div className="col-md-8" style={{ borderRight: '1px solid grey' }} >

            </div>

            <div className="col-md-4">
              <div>
                <div className="m-b-2">
                  <div>
                    <h4>Key Skills</h4>
                    <hr />
                  </div>
                  <div className="row" style={{ margin: 0 }}>
                    <div style={{ display: 'contents' }}>
                      <div className="keyskills" >c#.net</div>
                      <div className="keyskills" >SQL</div>
                      <div className="keyskills" >Javascript</div>
                      <div className="keyskills" >Typescript</div>
                      <div className="keyskills" >LAMP Stack</div>
                      <div className="keyskills" >MEAN Stack</div>
                      <div className="keyskills" >MERN Stack</div>
                      <div className="keyskills" >React Native</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Language</h4>
                  <hr />
                </div>
                <div className="row" style={{ margin: 0, fontSize: '18px' }}>
                  <div>
                    <div >English ( Beginner )</div>
                    <div >Hindi ( Native )</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App