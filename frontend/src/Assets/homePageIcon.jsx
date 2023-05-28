import React from 'react'

const homePageIcon = (props) => {
  const {onClick} = props;
  return (
    <div>
        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path d="M2 14.837L14.3985 2.16226C15.0069 1.5404 15.9931 1.5404 16.6015 2.16226L29 14.837M5.11538 11.6522V25.9837C5.11538 26.8631 5.81279 27.576 6.67308 27.576H12.3846V20.6757C12.3846 19.7963 13.082 19.0833 13.9423 19.0833H17.0577C17.918 19.0833 18.6154 19.7963 18.6154 20.6757V27.576H24.3269C25.1872 27.576 25.8846 26.8631 25.8846 25.9837V11.6522M10.3077 27.576H21.7308" stroke="white" strokeOpacity={props.PStyle} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  )
}

export default homePageIcon;