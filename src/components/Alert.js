import React from 'react' //React functional based components.

export default function alert(props) {
    const capitalise = (word) =>
    {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    props.Alert &&

      <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
    <strong>
    {capitalise(props.Alert.type)}
    </strong>
    :{props.Alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
