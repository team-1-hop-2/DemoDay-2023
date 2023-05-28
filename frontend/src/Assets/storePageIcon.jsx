import React from 'react'

const storePageIcon = (props) => {
  const {onClick } = props;
  return (
    <div>
        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path d="M18.1541 26.4977V16.1635C18.1541 15.5928 18.6362 15.1301 19.231 15.1301H23.5388C24.1335 15.1301 24.6157 15.5928 24.6157 16.1635V26.4977M18.1541 26.4977H2.15921M18.1541 26.4977H24.6157M24.6157 26.4977H29.8412M27.8465 26.4977V10.4436M4.15388 26.4977V10.4439M4.15388 10.4439C5.80129 11.3577 7.94438 11.1383 9.3538 9.78583C9.41787 9.72435 9.4795 9.66141 9.53869 9.59713C10.328 10.4552 11.4828 10.9964 12.7694 10.9964C14.056 10.9964 15.2109 10.4552 16.0002 9.597C16.7895 10.4552 17.9444 10.9964 19.231 10.9964C20.5175 10.9964 21.6722 10.4553 22.4616 9.59729C22.5207 9.66147 22.5822 9.72432 22.6462 9.78571C24.0557 11.1383 26.1991 11.3576 27.8465 10.4436M4.15388 10.4439C3.83494 10.267 3.53458 10.0477 3.26171 9.78583C1.57943 8.17153 1.57943 5.55423 3.26171 3.93993L4.96943 2.30122C5.37336 1.91362 5.92121 1.69586 6.49245 1.69586H25.5077C26.0789 1.69586 26.6268 1.91362 27.0307 2.30122L28.7383 3.93981C30.4206 5.55411 30.4206 8.17141 28.7383 9.78571C28.4655 10.0474 28.1653 10.2667 27.8465 10.4436M8.46163 22.364H13.8463C14.4411 22.364 14.9233 21.9014 14.9233 21.3306V16.1635C14.9233 15.5928 14.4411 15.1301 13.8463 15.1301H8.46163C7.86685 15.1301 7.38469 15.5928 7.38469 16.1635V21.3306C7.38469 21.9014 7.86685 22.364 8.46163 22.364Z" stroke="white" strokeOpacity={props.PStyle} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  )
}

export default storePageIcon