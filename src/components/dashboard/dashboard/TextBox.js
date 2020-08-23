import React from 'react'
import PropTypes from 'prop-types'

const TextBox = props => {
    return (
        <div className="py-2 p-3">
                          <div className="card shadow mb-4" style={{height:"350px"}}>
                <div className="card-header py-3" >
                  <h6 className="m-0 font-weight-bold text-primary">Daily Logs</h6>
                </div>
                <div className="card-body">
                  <p>Everything is under control</p>
                  <p className="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.Before working with this theme, you should become familiar.</p>
                </div>
              </div>
        </div>
    )
}

TextBox.propTypes = {

}

export default TextBox
