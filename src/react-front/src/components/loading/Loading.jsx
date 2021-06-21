import "./loading.scss"

function Loading({ message, show }) {
  return show ? (
    <div className="modal-page">
      <div className="modal-loading-form">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>{message}</p>
      </div>
    </div>
  ) : (
    false
  )
}

export default Loading
